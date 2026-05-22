#!/bin/bash
# resize_images.sh — Gera variantes responsivas usando sips (macOS nativo)
# Widths: 480, 960, 1280
# Output: subpasta /responsive/ em cada pasta processada

set -e

WIDTHS=(480 960 1280)

BASE_DIR="$(cd "$(dirname "$0")" && pwd)/img"

FOLDERS=(
  "$BASE_DIR/imagens_header/Maquetes acadêmicas "
  "$BASE_DIR/imagens_header/Maquetes cenográficas"
  "$BASE_DIR/imagens_header/Maquetes escolares "
  "$BASE_DIR/imagens_header/Projetos diversos"
  "$BASE_DIR/imagens_header/maquetes_pro"
  "$BASE_DIR/maquetes_pro2/1. Summit Towers - WE Construtora"
  "$BASE_DIR/maquetes_pro2/2. Horto Residence - Construtora LIMAC"
  "$BASE_DIR/maquetes_pro2/3. Ferraz Junqueira - Construtora Vilela Campos"
  "$BASE_DIR/maquetes_pro2/4. Soul Ipanema - On Construtora"
  "$BASE_DIR/maquetes_pro2/5. Privilége - On Construtora"
  "$BASE_DIR/maquetes_pro2/7. Centro Alimentício Maricá"
  "$BASE_DIR/maquetes_pro2/9. Nutrymax Alimentos"
)

total_processed=0
total_skipped=0

for FOLDER in "${FOLDERS[@]}"; do
  if [ ! -d "$FOLDER" ]; then
    echo "⚠️  Pasta não encontrada, pulando: $FOLDER"
    continue
  fi

  RESPONSIVE_DIR="$FOLDER/responsive"
  mkdir -p "$RESPONSIVE_DIR"
  echo ""
  echo "📁 Processando: $FOLDER"

  # Percorre todos os arquivos de imagem na pasta (não recursivo)
  while IFS= read -r -d '' IMG; do
    FILENAME=$(basename "$IMG")
    EXT_UPPER=$(echo "${FILENAME##*.}" | tr '[:lower:]' '[:upper:]')
    BASENAME="${FILENAME%.*}"

    # Trata HEIC como caso especial — converte para JPG primeiro
    if [ "$EXT_UPPER" = "HEIC" ]; then
      OUT_EXT="jpg"
    else
      OUT_EXT=$(echo "${FILENAME##*.}" | tr '[:upper:]' '[:lower:]')
      # Normaliza JPEG -> jpg
      [ "$OUT_EXT" = "jpeg" ] && OUT_EXT="jpg"
    fi

    # Pega as dimensões originais
    ORIG_WIDTH=$(sips -g pixelWidth "$IMG" 2>/dev/null | grep pixelWidth | awk '{print $2}')

    if [ -z "$ORIG_WIDTH" ]; then
      echo "  ⚠️  Não foi possível ler $FILENAME, pulando..."
      ((total_skipped++)) || true
      continue
    fi

    echo "  🖼️  $FILENAME (${ORIG_WIDTH}px original)"

    for W in "${WIDTHS[@]}"; do
      # Só gera se a imagem original for maior que o width alvo
      if [ "$ORIG_WIDTH" -le "$W" ]; then
        echo "     ↳ w${W}: original menor ou igual, copiando sem resize"
        OUT_FILE="$RESPONSIVE_DIR/${BASENAME}_w${W}.${OUT_EXT}"
        sips -s format jpeg "$IMG" --out "$OUT_FILE" -s formatOptions 85 2>/dev/null || \
          cp "$IMG" "$OUT_FILE"
        continue
      fi

      OUT_FILE="$RESPONSIVE_DIR/${BASENAME}_w${W}.${OUT_EXT}"
      echo "     ↳ gerando w${W} → $OUT_FILE"

      sips --resampleWidth "$W" \
           -s format jpeg \
           -s formatOptions 85 \
           "$IMG" --out "$OUT_FILE" 2>/dev/null

    done

    ((total_processed++)) || true

  done < <(find "$FOLDER" -maxdepth 1 -type f \( \
    -iname "*.jpg" -o -iname "*.jpeg" -o \
    -iname "*.png" -o -iname "*.heic" \) -print0)

done

echo ""
echo "✅ Concluído!"
echo "   Imagens processadas: $total_processed"
echo "   Imagens ignoradas:   $total_skipped"
echo ""
echo "Próximo passo: execute generate_srcset_report.sh para obter os srcsets gerados."

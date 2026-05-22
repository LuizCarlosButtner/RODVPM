#!/bin/bash
DIR="/Users/luizcarlospereira/Documents/PROGRAMAS/RODVPM/img/imagens_header/Maquete Profissional"
echo "const imagePro2 = ["
for file in "$DIR"/*; do
  if [ -f "$file" ]; then
    base=$(basename "$file")
    ext="${base##*.}"
    name="${base%.*}"
    
    ext_upper=$(echo "$ext" | tr '[:lower:]' '[:upper:]')
    if [ "$ext_upper" == "HEIC" ]; then
        ext="jpg"
    fi
    
    ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
    [ "$ext" = "jpeg" ] && ext="jpg"

    echo "    { "
    echo "        src: \"img/imagens_header/Maquete Profissional/$base\","
    echo "        srcset: \"img/imagens_header/Maquete Profissional/responsive/${name}_w480.${ext} 480w, img/imagens_header/Maquete Profissional/responsive/${name}_w960.${ext} 960w, img/imagens_header/Maquete Profissional/responsive/${name}_w1280.${ext} 1280w\""
    echo "    },"
  fi
done
echo "];"

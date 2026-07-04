// Banco de imagens de exemplo para os 8 cards
const imagePacks = [
    [
        {
            src: "img/maquetes_pro/1_summit_tower/1_u4cq1n/1_u4cq1n_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/1_summit_tower/1_u4cq1n/1_u4cq1n_c_scale,w_1299.jpg 1299w, img/maquetes_pro/1_summit_tower/1_u4cq1n/1_u4cq1n_c_scale,w_1600.jpg 1600w, img/maquetes_pro/1_summit_tower/1_u4cq1n/1_u4cq1n_c_scale,w_480.jpg 480w, img/maquetes_pro/1_summit_tower/1_u4cq1n/1_u4cq1n_c_scale,w_955.jpg 955w"
        },
        {
            src: "img/maquetes_pro/1_summit_tower/2_ybybxw/2_ybybxw_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/1_summit_tower/2_ybybxw/2_ybybxw_c_scale,w_1014.jpg 1014w, img/maquetes_pro/1_summit_tower/2_ybybxw/2_ybybxw_c_scale,w_1327.jpg 1327w, img/maquetes_pro/1_summit_tower/2_ybybxw/2_ybybxw_c_scale,w_1600.jpg 1600w, img/maquetes_pro/1_summit_tower/2_ybybxw/2_ybybxw_c_scale,w_480.jpg 480w"
        },
        {
            src: "img/maquetes_pro/1_summit_tower/3_rw4iwo/3_rw4iwo_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/1_summit_tower/3_rw4iwo/3_rw4iwo_c_scale,w_1298.jpg 1298w, img/maquetes_pro/1_summit_tower/3_rw4iwo/3_rw4iwo_c_scale,w_1600.jpg 1600w, img/maquetes_pro/1_summit_tower/3_rw4iwo/3_rw4iwo_c_scale,w_480.jpg 480w, img/maquetes_pro/1_summit_tower/3_rw4iwo/3_rw4iwo_c_scale,w_948.jpg 948w"
        },
        {
            src: "img/maquetes_pro/1_summit_tower/4_hteg1b/4_hteg1b_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/1_summit_tower/4_hteg1b/4_hteg1b_c_scale,w_1365.jpg 1365w, img/maquetes_pro/1_summit_tower/4_hteg1b/4_hteg1b_c_scale,w_1600.jpg 1600w, img/maquetes_pro/1_summit_tower/4_hteg1b/4_hteg1b_c_scale,w_480.jpg 480w, img/maquetes_pro/1_summit_tower/4_hteg1b/4_hteg1b_c_scale,w_967.jpg 967w"
        },
        {
            src: "img/maquetes_pro/1_summit_tower/5_ullhlm/5_ullhlm_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/1_summit_tower/5_ullhlm/5_ullhlm_c_scale,w_1314.jpg 1314w, img/maquetes_pro/1_summit_tower/5_ullhlm/5_ullhlm_c_scale,w_1600.jpg 1600w, img/maquetes_pro/1_summit_tower/5_ullhlm/5_ullhlm_c_scale,w_480.jpg 480w, img/maquetes_pro/1_summit_tower/5_ullhlm/5_ullhlm_c_scale,w_960.jpg 960w"
        },
        {
            src: "img/maquetes_pro/1_summit_tower/6_wmwzum/6_wmwzum_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/1_summit_tower/6_wmwzum/6_wmwzum_c_scale,w_1211.jpg 1211w, img/maquetes_pro/1_summit_tower/6_wmwzum/6_wmwzum_c_scale,w_1600.jpg 1600w, img/maquetes_pro/1_summit_tower/6_wmwzum/6_wmwzum_c_scale,w_480.jpg 480w, img/maquetes_pro/1_summit_tower/6_wmwzum/6_wmwzum_c_scale,w_886.jpg 886w"
        },
        {
            src: "img/maquetes_pro/1_summit_tower/7_u5idpc/7_u5idpc_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/1_summit_tower/7_u5idpc/7_u5idpc_c_scale,w_1307.jpg 1307w, img/maquetes_pro/1_summit_tower/7_u5idpc/7_u5idpc_c_scale,w_1600.jpg 1600w, img/maquetes_pro/1_summit_tower/7_u5idpc/7_u5idpc_c_scale,w_480.jpg 480w, img/maquetes_pro/1_summit_tower/7_u5idpc/7_u5idpc_c_scale,w_946.jpg 946w"
        },
        {
            src: "img/maquetes_pro/1_summit_tower/8_hh9g9n/8_hh9g9n_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/1_summit_tower/8_hh9g9n/8_hh9g9n_c_scale,w_1294.jpg 1294w, img/maquetes_pro/1_summit_tower/8_hh9g9n/8_hh9g9n_c_scale,w_1600.jpg 1600w, img/maquetes_pro/1_summit_tower/8_hh9g9n/8_hh9g9n_c_scale,w_480.jpg 480w, img/maquetes_pro/1_summit_tower/8_hh9g9n/8_hh9g9n_c_scale,w_943.jpg 943w"
        }
    ],
    [
        {
            src: "img/maquetes_pro/2_horto_residence/1_lnvlmj/1_lnvlmj_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/2_horto_residence/1_lnvlmj/1_lnvlmj_c_scale,w_1355.jpg 1355w, img/maquetes_pro/2_horto_residence/1_lnvlmj/1_lnvlmj_c_scale,w_1600.jpg 1600w, img/maquetes_pro/2_horto_residence/1_lnvlmj/1_lnvlmj_c_scale,w_480.jpg 480w, img/maquetes_pro/2_horto_residence/1_lnvlmj/1_lnvlmj_c_scale,w_962.jpg 962w"
        },
        {
            src: "img/maquetes_pro/2_horto_residence/2_xa9xfk/2_xa9xfk_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/2_horto_residence/2_xa9xfk/2_xa9xfk_c_scale,w_1294.jpg 1294w, img/maquetes_pro/2_horto_residence/2_xa9xfk/2_xa9xfk_c_scale,w_1600.jpg 1600w, img/maquetes_pro/2_horto_residence/2_xa9xfk/2_xa9xfk_c_scale,w_480.jpg 480w, img/maquetes_pro/2_horto_residence/2_xa9xfk/2_xa9xfk_c_scale,w_928.jpg 928w"
        },
        {
            src: "img/maquetes_pro/2_horto_residence/3_yhocbd/3_yhocbd_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/2_horto_residence/3_yhocbd/3_yhocbd_c_scale,w_1354.jpg 1354w, img/maquetes_pro/2_horto_residence/3_yhocbd/3_yhocbd_c_scale,w_1600.jpg 1600w, img/maquetes_pro/2_horto_residence/3_yhocbd/3_yhocbd_c_scale,w_480.jpg 480w, img/maquetes_pro/2_horto_residence/3_yhocbd/3_yhocbd_c_scale,w_878.jpg 878w"
        },
        {
            src: "img/maquetes_pro/2_horto_residence/4_upwgqi/4_upwgqi_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/2_horto_residence/4_upwgqi/4_upwgqi_c_scale,w_1329.jpg 1329w, img/maquetes_pro/2_horto_residence/4_upwgqi/4_upwgqi_c_scale,w_1600.jpg 1600w, img/maquetes_pro/2_horto_residence/4_upwgqi/4_upwgqi_c_scale,w_480.jpg 480w, img/maquetes_pro/2_horto_residence/4_upwgqi/4_upwgqi_c_scale,w_959.jpg 959w"
        },
        {
            src: "img/maquetes_pro/2_horto_residence/5_iiqd2p/5_iiqd2p_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/2_horto_residence/5_iiqd2p/5_iiqd2p_c_scale,w_1007.jpg 1007w, img/maquetes_pro/2_horto_residence/5_iiqd2p/5_iiqd2p_c_scale,w_1345.jpg 1345w, img/maquetes_pro/2_horto_residence/5_iiqd2p/5_iiqd2p_c_scale,w_1600.jpg 1600w, img/maquetes_pro/2_horto_residence/5_iiqd2p/5_iiqd2p_c_scale,w_480.jpg 480w"
        },
        {
            src: "img/maquetes_pro/2_horto_residence/6_h2uctn/6_h2uctn_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/2_horto_residence/6_h2uctn/6_h2uctn_c_scale,w_1178.jpg 1178w, img/maquetes_pro/2_horto_residence/6_h2uctn/6_h2uctn_c_scale,w_1600.jpg 1600w, img/maquetes_pro/2_horto_residence/6_h2uctn/6_h2uctn_c_scale,w_480.jpg 480w"
        }
    ],
    [
        {
            src: "img/maquetes_pro/3_ferraz_junqueira/1_wr15cl/1_wr15cl_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/3_ferraz_junqueira/1_wr15cl/1_wr15cl_c_scale,w_1365.jpg 1365w, img/maquetes_pro/3_ferraz_junqueira/1_wr15cl/1_wr15cl_c_scale,w_1600.jpg 1600w, img/maquetes_pro/3_ferraz_junqueira/1_wr15cl/1_wr15cl_c_scale,w_480.jpg 480w, img/maquetes_pro/3_ferraz_junqueira/1_wr15cl/1_wr15cl_c_scale,w_957.jpg 957w"
        },
        {
            src: "img/maquetes_pro/3_ferraz_junqueira/2_yamcsz/2_yamcsz_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/3_ferraz_junqueira/2_yamcsz/2_yamcsz_c_scale,w_1299.jpg 1299w, img/maquetes_pro/3_ferraz_junqueira/2_yamcsz/2_yamcsz_c_scale,w_1600.jpg 1600w, img/maquetes_pro/3_ferraz_junqueira/2_yamcsz/2_yamcsz_c_scale,w_480.jpg 480w, img/maquetes_pro/3_ferraz_junqueira/2_yamcsz/2_yamcsz_c_scale,w_941.jpg 941w"
        },
        {
            src: "img/maquetes_pro/3_ferraz_junqueira/3_p0zpaz/3_p0zpaz_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/3_ferraz_junqueira/3_p0zpaz/3_p0zpaz_c_scale,w_1296.jpg 1296w, img/maquetes_pro/3_ferraz_junqueira/3_p0zpaz/3_p0zpaz_c_scale,w_1600.jpg 1600w, img/maquetes_pro/3_ferraz_junqueira/3_p0zpaz/3_p0zpaz_c_scale,w_480.jpg 480w, img/maquetes_pro/3_ferraz_junqueira/3_p0zpaz/3_p0zpaz_c_scale,w_945.jpg 945w"
        },
        {
            src: "img/maquetes_pro/3_ferraz_junqueira/4_iumtb4/4_iumtb4_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/3_ferraz_junqueira/4_iumtb4/4_iumtb4_c_scale,w_1294.jpg 1294w, img/maquetes_pro/3_ferraz_junqueira/4_iumtb4/4_iumtb4_c_scale,w_1600.jpg 1600w, img/maquetes_pro/3_ferraz_junqueira/4_iumtb4/4_iumtb4_c_scale,w_480.jpg 480w, img/maquetes_pro/3_ferraz_junqueira/4_iumtb4/4_iumtb4_c_scale,w_919.jpg 919w"
        },
        {
            src: "img/maquetes_pro/3_ferraz_junqueira/5_god0tk/5_god0tk_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/3_ferraz_junqueira/5_god0tk/5_god0tk_c_scale,w_1176.jpg 1176w, img/maquetes_pro/3_ferraz_junqueira/5_god0tk/5_god0tk_c_scale,w_1600.jpg 1600w, img/maquetes_pro/3_ferraz_junqueira/5_god0tk/5_god0tk_c_scale,w_480.jpg 480w"
        },
        {
            src: "img/maquetes_pro/3_ferraz_junqueira/6_mynidi/6_mynidi_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/3_ferraz_junqueira/6_mynidi/6_mynidi_c_scale,w_1185.jpg 1185w, img/maquetes_pro/3_ferraz_junqueira/6_mynidi/6_mynidi_c_scale,w_1600.jpg 1600w, img/maquetes_pro/3_ferraz_junqueira/6_mynidi/6_mynidi_c_scale,w_480.jpg 480w, img/maquetes_pro/3_ferraz_junqueira/6_mynidi/6_mynidi_c_scale,w_884.jpg 884w"
        },
        {
            src: "img/maquetes_pro/3_ferraz_junqueira/7_flztp7/7_flztp7_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/3_ferraz_junqueira/7_flztp7/7_flztp7_c_scale,w_1376.jpg 1376w, img/maquetes_pro/3_ferraz_junqueira/7_flztp7/7_flztp7_c_scale,w_1600.jpg 1600w, img/maquetes_pro/3_ferraz_junqueira/7_flztp7/7_flztp7_c_scale,w_480.jpg 480w, img/maquetes_pro/3_ferraz_junqueira/7_flztp7/7_flztp7_c_scale,w_969.jpg 969w"
        },
        {
            src: "img/maquetes_pro/3_ferraz_junqueira/8_uoftka/8_uoftka_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/3_ferraz_junqueira/8_uoftka/8_uoftka_c_scale,w_1307.jpg 1307w, img/maquetes_pro/3_ferraz_junqueira/8_uoftka/8_uoftka_c_scale,w_1600.jpg 1600w, img/maquetes_pro/3_ferraz_junqueira/8_uoftka/8_uoftka_c_scale,w_480.jpg 480w, img/maquetes_pro/3_ferraz_junqueira/8_uoftka/8_uoftka_c_scale,w_961.jpg 961w"
        },
        {
            src: "img/maquetes_pro/3_ferraz_junqueira/9_acnkfx/9_acnkfx_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/3_ferraz_junqueira/9_acnkfx/9_acnkfx_c_scale,w_1348.jpg 1348w, img/maquetes_pro/3_ferraz_junqueira/9_acnkfx/9_acnkfx_c_scale,w_1600.jpg 1600w, img/maquetes_pro/3_ferraz_junqueira/9_acnkfx/9_acnkfx_c_scale,w_480.jpg 480w, img/maquetes_pro/3_ferraz_junqueira/9_acnkfx/9_acnkfx_c_scale,w_953.jpg 953w"
        }
    ],
    [
        {
            src: "img/maquetes_pro/4_soul_ipanema/1_w0gyhm/1_w0gyhm_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/4_soul_ipanema/1_w0gyhm/1_w0gyhm_c_scale,w_1143.jpg 1143w, img/maquetes_pro/4_soul_ipanema/1_w0gyhm/1_w0gyhm_c_scale,w_1600.jpg 1600w, img/maquetes_pro/4_soul_ipanema/1_w0gyhm/1_w0gyhm_c_scale,w_480.jpg 480w, img/maquetes_pro/4_soul_ipanema/1_w0gyhm/1_w0gyhm_c_scale,w_895.jpg 895w"
        },
        {
            src: "img/maquetes_pro/4_soul_ipanema/2_ijnfu9/2_ijnfu9_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/4_soul_ipanema/2_ijnfu9/2_ijnfu9_c_scale,w_1294.jpg 1294w, img/maquetes_pro/4_soul_ipanema/2_ijnfu9/2_ijnfu9_c_scale,w_1600.jpg 1600w, img/maquetes_pro/4_soul_ipanema/2_ijnfu9/2_ijnfu9_c_scale,w_480.jpg 480w, img/maquetes_pro/4_soul_ipanema/2_ijnfu9/2_ijnfu9_c_scale,w_819.jpg 819w"
        },
        {
            src: "img/maquetes_pro/4_soul_ipanema/3_wwtood/3_wwtood_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/4_soul_ipanema/3_wwtood/3_wwtood_c_scale,w_1365.jpg 1365w, img/maquetes_pro/4_soul_ipanema/3_wwtood/3_wwtood_c_scale,w_1600.jpg 1600w, img/maquetes_pro/4_soul_ipanema/3_wwtood/3_wwtood_c_scale,w_480.jpg 480w, img/maquetes_pro/4_soul_ipanema/3_wwtood/3_wwtood_c_scale,w_978.jpg 978w"
        },
        {
            src: "img/maquetes_pro/4_soul_ipanema/4_uhnrha/4_uhnrha_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/4_soul_ipanema/4_uhnrha/4_uhnrha_c_scale,w_1299.jpg 1299w, img/maquetes_pro/4_soul_ipanema/4_uhnrha/4_uhnrha_c_scale,w_1600.jpg 1600w, img/maquetes_pro/4_soul_ipanema/4_uhnrha/4_uhnrha_c_scale,w_480.jpg 480w, img/maquetes_pro/4_soul_ipanema/4_uhnrha/4_uhnrha_c_scale,w_947.jpg 947w"
        },
        {
            src: "img/maquetes_pro/4_soul_ipanema/5_qjyold/5_qjyold_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/4_soul_ipanema/5_qjyold/5_qjyold_c_scale,w_1299.jpg 1299w, img/maquetes_pro/4_soul_ipanema/5_qjyold/5_qjyold_c_scale,w_1600.jpg 1600w, img/maquetes_pro/4_soul_ipanema/5_qjyold/5_qjyold_c_scale,w_480.jpg 480w, img/maquetes_pro/4_soul_ipanema/5_qjyold/5_qjyold_c_scale,w_926.jpg 926w"
        }
    ],
    [
        {
            src: "img/maquetes_pro/5_privillege/1_ennokx/1_ennokx_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/5_privillege/1_ennokx/1_ennokx_c_scale,w_1037.jpg 1037w, img/maquetes_pro/5_privillege/1_ennokx/1_ennokx_c_scale,w_1600.jpg 1600w, img/maquetes_pro/5_privillege/1_ennokx/1_ennokx_c_scale,w_480.jpg 480w, img/maquetes_pro/5_privillege/1_ennokx/1_ennokx_c_scale,w_784.jpg 784w"
        },
        {
            src: "img/maquetes_pro/5_privillege/2_jxrvvq/2_jxrvvq_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/5_privillege/2_jxrvvq/2_jxrvvq_c_scale,w_1326.jpg 1326w, img/maquetes_pro/5_privillege/2_jxrvvq/2_jxrvvq_c_scale,w_1600.jpg 1600w, img/maquetes_pro/5_privillege/2_jxrvvq/2_jxrvvq_c_scale,w_480.jpg 480w, img/maquetes_pro/5_privillege/2_jxrvvq/2_jxrvvq_c_scale,w_966.jpg 966w"
        },
        {
            src: "img/maquetes_pro/5_privillege/3_bxpqc7/3_bxpqc7_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/5_privillege/3_bxpqc7/3_bxpqc7_c_scale,w_1302.jpg 1302w, img/maquetes_pro/5_privillege/3_bxpqc7/3_bxpqc7_c_scale,w_1600.jpg 1600w, img/maquetes_pro/5_privillege/3_bxpqc7/3_bxpqc7_c_scale,w_480.jpg 480w, img/maquetes_pro/5_privillege/3_bxpqc7/3_bxpqc7_c_scale,w_953.jpg 953w"
        },
        {
            src: "img/maquetes_pro/5_privillege/4_scdafg/4_scdafg_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/5_privillege/4_scdafg/4_scdafg_c_scale,w_1471.jpg 1471w, img/maquetes_pro/5_privillege/4_scdafg/4_scdafg_c_scale,w_1600.jpg 1600w, img/maquetes_pro/5_privillege/4_scdafg/4_scdafg_c_scale,w_480.jpg 480w, img/maquetes_pro/5_privillege/4_scdafg/4_scdafg_c_scale,w_986.jpg 986w"
        },
        {
            src: "img/maquetes_pro/5_privillege/5_hmdnnj/5_hmdnnj_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/5_privillege/5_hmdnnj/5_hmdnnj_c_scale,w_1368.jpg 1368w, img/maquetes_pro/5_privillege/5_hmdnnj/5_hmdnnj_c_scale,w_1600.jpg 1600w, img/maquetes_pro/5_privillege/5_hmdnnj/5_hmdnnj_c_scale,w_480.jpg 480w, img/maquetes_pro/5_privillege/5_hmdnnj/5_hmdnnj_c_scale,w_947.jpg 947w"
        }
    ],
    [
        {
            src: "img/maquetes_pro/6_serena_tucuruvi/1_jpyqym/1_jpyqym_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/6_serena_tucuruvi/1_jpyqym/1_jpyqym_c_scale,w_1373.png 1373w, img/maquetes_pro/6_serena_tucuruvi/1_jpyqym/1_jpyqym_c_scale,w_1600.png 1600w, img/maquetes_pro/6_serena_tucuruvi/1_jpyqym/1_jpyqym_c_scale,w_480.png 480w, img/maquetes_pro/6_serena_tucuruvi/1_jpyqym/1_jpyqym_c_scale,w_986.png 986w"
        },
        {
            src: "img/maquetes_pro/6_serena_tucuruvi/2_ct6uvc/2_ct6uvc_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/6_serena_tucuruvi/2_ct6uvc/2_ct6uvc_c_scale,w_1370.png 1370w, img/maquetes_pro/6_serena_tucuruvi/2_ct6uvc/2_ct6uvc_c_scale,w_1600.png 1600w, img/maquetes_pro/6_serena_tucuruvi/2_ct6uvc/2_ct6uvc_c_scale,w_480.png 480w, img/maquetes_pro/6_serena_tucuruvi/2_ct6uvc/2_ct6uvc_c_scale,w_978.png 978w"
        },
        {
            src: "img/maquetes_pro/6_serena_tucuruvi/3_nqi0sc/3_nqi0sc_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/6_serena_tucuruvi/3_nqi0sc/3_nqi0sc_c_scale,w_1337.png 1337w, img/maquetes_pro/6_serena_tucuruvi/3_nqi0sc/3_nqi0sc_c_scale,w_1600.png 1600w, img/maquetes_pro/6_serena_tucuruvi/3_nqi0sc/3_nqi0sc_c_scale,w_480.png 480w, img/maquetes_pro/6_serena_tucuruvi/3_nqi0sc/3_nqi0sc_c_scale,w_962.png 962w"
        },
        {
            src: "img/maquetes_pro/6_serena_tucuruvi/4_gfphv4/4_gfphv4_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/6_serena_tucuruvi/4_gfphv4/4_gfphv4_c_scale,w_1340.png 1340w, img/maquetes_pro/6_serena_tucuruvi/4_gfphv4/4_gfphv4_c_scale,w_1600.png 1600w, img/maquetes_pro/6_serena_tucuruvi/4_gfphv4/4_gfphv4_c_scale,w_480.png 480w, img/maquetes_pro/6_serena_tucuruvi/4_gfphv4/4_gfphv4_c_scale,w_980.png 980w"
        },
        {
            src: "img/maquetes_pro/6_serena_tucuruvi/5_zanrt6/5_zanrt6_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/6_serena_tucuruvi/5_zanrt6/5_zanrt6_c_scale,w_1366.png 1366w, img/maquetes_pro/6_serena_tucuruvi/5_zanrt6/5_zanrt6_c_scale,w_1600.png 1600w, img/maquetes_pro/6_serena_tucuruvi/5_zanrt6/5_zanrt6_c_scale,w_480.png 480w, img/maquetes_pro/6_serena_tucuruvi/5_zanrt6/5_zanrt6_c_scale,w_981.png 981w"
        },
        {
            src: "img/maquetes_pro/6_serena_tucuruvi/6_krftwk/6_krftwk_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/6_serena_tucuruvi/6_krftwk/6_krftwk_c_scale,w_1367.png 1367w, img/maquetes_pro/6_serena_tucuruvi/6_krftwk/6_krftwk_c_scale,w_1600.png 1600w, img/maquetes_pro/6_serena_tucuruvi/6_krftwk/6_krftwk_c_scale,w_480.png 480w, img/maquetes_pro/6_serena_tucuruvi/6_krftwk/6_krftwk_c_scale,w_983.png 983w"
        },
        {
            src: "img/maquetes_pro/6_serena_tucuruvi/7_epuaec/7_epuaec_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/6_serena_tucuruvi/7_epuaec/7_epuaec_c_scale,w_1369.png 1369w, img/maquetes_pro/6_serena_tucuruvi/7_epuaec/7_epuaec_c_scale,w_1600.png 1600w, img/maquetes_pro/6_serena_tucuruvi/7_epuaec/7_epuaec_c_scale,w_480.png 480w, img/maquetes_pro/6_serena_tucuruvi/7_epuaec/7_epuaec_c_scale,w_984.png 984w"
        },
        {
            src: "img/maquetes_pro/6_serena_tucuruvi/8_trhbip/8_trhbip_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/6_serena_tucuruvi/8_trhbip/8_trhbip_c_scale,w_1374.png 1374w, img/maquetes_pro/6_serena_tucuruvi/8_trhbip/8_trhbip_c_scale,w_1600.png 1600w, img/maquetes_pro/6_serena_tucuruvi/8_trhbip/8_trhbip_c_scale,w_480.png 480w, img/maquetes_pro/6_serena_tucuruvi/8_trhbip/8_trhbip_c_scale,w_988.png 988w"
        }
    ],
    [
        {
            src: "img/maquetes_pro/7_centro_alimenticio_marica/1_xbyjuw/1_xbyjuw_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/7_centro_alimenticio_marica/1_xbyjuw/1_xbyjuw_c_scale,w_1304.jpg 1304w, img/maquetes_pro/7_centro_alimenticio_marica/1_xbyjuw/1_xbyjuw_c_scale,w_1600.jpg 1600w, img/maquetes_pro/7_centro_alimenticio_marica/1_xbyjuw/1_xbyjuw_c_scale,w_480.jpg 480w, img/maquetes_pro/7_centro_alimenticio_marica/1_xbyjuw/1_xbyjuw_c_scale,w_944.jpg 944w"
        },
        {
            src: "img/maquetes_pro/7_centro_alimenticio_marica/2_dv8miz/2_dv8miz_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/7_centro_alimenticio_marica/2_dv8miz/2_dv8miz_c_scale,w_1369.jpg 1369w, img/maquetes_pro/7_centro_alimenticio_marica/2_dv8miz/2_dv8miz_c_scale,w_1600.jpg 1600w, img/maquetes_pro/7_centro_alimenticio_marica/2_dv8miz/2_dv8miz_c_scale,w_480.jpg 480w, img/maquetes_pro/7_centro_alimenticio_marica/2_dv8miz/2_dv8miz_c_scale,w_940.jpg 940w"
        },
        {
            src: "img/maquetes_pro/7_centro_alimenticio_marica/3_nojxih/3_nojxih_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/7_centro_alimenticio_marica/3_nojxih/3_nojxih_c_scale,w_1064.jpg 1064w, img/maquetes_pro/7_centro_alimenticio_marica/3_nojxih/3_nojxih_c_scale,w_1425.jpg 1425w, img/maquetes_pro/7_centro_alimenticio_marica/3_nojxih/3_nojxih_c_scale,w_1600.jpg 1600w, img/maquetes_pro/7_centro_alimenticio_marica/3_nojxih/3_nojxih_c_scale,w_480.jpg 480w"
        },
        {
            src: "img/maquetes_pro/7_centro_alimenticio_marica/4_ksqbin/4_ksqbin_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/7_centro_alimenticio_marica/4_ksqbin/4_ksqbin_c_scale,w_1372.jpg 1372w, img/maquetes_pro/7_centro_alimenticio_marica/4_ksqbin/4_ksqbin_c_scale,w_1600.jpg 1600w, img/maquetes_pro/7_centro_alimenticio_marica/4_ksqbin/4_ksqbin_c_scale,w_480.jpg 480w, img/maquetes_pro/7_centro_alimenticio_marica/4_ksqbin/4_ksqbin_c_scale,w_974.jpg 974w"
        },
        {
            src: "img/maquetes_pro/7_centro_alimenticio_marica/5_q2ien7/5_q2ien7_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/7_centro_alimenticio_marica/5_q2ien7/5_q2ien7_c_scale,w_1381.jpg 1381w, img/maquetes_pro/7_centro_alimenticio_marica/5_q2ien7/5_q2ien7_c_scale,w_1600.jpg 1600w, img/maquetes_pro/7_centro_alimenticio_marica/5_q2ien7/5_q2ien7_c_scale,w_480.jpg 480w, img/maquetes_pro/7_centro_alimenticio_marica/5_q2ien7/5_q2ien7_c_scale,w_983.jpg 983w"
        },
        {
            src: "img/maquetes_pro/7_centro_alimenticio_marica/6_plgxvb/6_plgxvb_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/7_centro_alimenticio_marica/6_plgxvb/6_plgxvb_c_scale,w_1334.jpg 1334w, img/maquetes_pro/7_centro_alimenticio_marica/6_plgxvb/6_plgxvb_c_scale,w_1600.jpg 1600w, img/maquetes_pro/7_centro_alimenticio_marica/6_plgxvb/6_plgxvb_c_scale,w_480.jpg 480w, img/maquetes_pro/7_centro_alimenticio_marica/6_plgxvb/6_plgxvb_c_scale,w_988.jpg 988w"
        },
        {
            src: "img/maquetes_pro/7_centro_alimenticio_marica/7_xvamxc/7_xvamxc_c_scale,w_1600.jpg",
            srcset: "img/maquetes_pro/7_centro_alimenticio_marica/7_xvamxc/7_xvamxc_c_scale,w_1151.jpg 1151w, img/maquetes_pro/7_centro_alimenticio_marica/7_xvamxc/7_xvamxc_c_scale,w_1600.jpg 1600w, img/maquetes_pro/7_centro_alimenticio_marica/7_xvamxc/7_xvamxc_c_scale,w_480.jpg 480w"
        }
    ],
    [
        {
            src: "img/maquetes_pro/8_studio_alfa/1_cyhyaa/1_cyhyaa_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/8_studio_alfa/1_cyhyaa/1_cyhyaa_c_scale,w_1376.png 1376w, img/maquetes_pro/8_studio_alfa/1_cyhyaa/1_cyhyaa_c_scale,w_1600.png 1600w, img/maquetes_pro/8_studio_alfa/1_cyhyaa/1_cyhyaa_c_scale,w_480.png 480w, img/maquetes_pro/8_studio_alfa/1_cyhyaa/1_cyhyaa_c_scale,w_990.png 990w"
        },
        {
            src: "img/maquetes_pro/8_studio_alfa/2_pl1ngo/2_pl1ngo_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/8_studio_alfa/2_pl1ngo/2_pl1ngo_c_scale,w_1381.png 1381w, img/maquetes_pro/8_studio_alfa/2_pl1ngo/2_pl1ngo_c_scale,w_1600.png 1600w, img/maquetes_pro/8_studio_alfa/2_pl1ngo/2_pl1ngo_c_scale,w_480.png 480w, img/maquetes_pro/8_studio_alfa/2_pl1ngo/2_pl1ngo_c_scale,w_992.png 992w"
        },
        {
            src: "img/maquetes_pro/8_studio_alfa/3_jznqeo/3_jznqeo_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/8_studio_alfa/3_jznqeo/3_jznqeo_c_scale,w_1385.png 1385w, img/maquetes_pro/8_studio_alfa/3_jznqeo/3_jznqeo_c_scale,w_1600.png 1600w, img/maquetes_pro/8_studio_alfa/3_jznqeo/3_jznqeo_c_scale,w_480.png 480w, img/maquetes_pro/8_studio_alfa/3_jznqeo/3_jznqeo_c_scale,w_997.png 997w"
        },
        {
            src: "img/maquetes_pro/8_studio_alfa/4_pucpkc/4_pucpkc_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/8_studio_alfa/4_pucpkc/4_pucpkc_c_scale,w_1000.png 1000w, img/maquetes_pro/8_studio_alfa/4_pucpkc/4_pucpkc_c_scale,w_1389.png 1389w, img/maquetes_pro/8_studio_alfa/4_pucpkc/4_pucpkc_c_scale,w_1600.png 1600w, img/maquetes_pro/8_studio_alfa/4_pucpkc/4_pucpkc_c_scale,w_480.png 480w"
        },
        {
            src: "img/maquetes_pro/8_studio_alfa/5_smpwzo/5_smpwzo_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/8_studio_alfa/5_smpwzo/5_smpwzo_c_scale,w_1367.png 1367w, img/maquetes_pro/8_studio_alfa/5_smpwzo/5_smpwzo_c_scale,w_1600.png 1600w, img/maquetes_pro/8_studio_alfa/5_smpwzo/5_smpwzo_c_scale,w_480.png 480w, img/maquetes_pro/8_studio_alfa/5_smpwzo/5_smpwzo_c_scale,w_984.png 984w"
        },
        {
            src: "img/maquetes_pro/8_studio_alfa/6_nqgsjj/6_nqgsjj_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/8_studio_alfa/6_nqgsjj/6_nqgsjj_c_scale,w_1363.png 1363w, img/maquetes_pro/8_studio_alfa/6_nqgsjj/6_nqgsjj_c_scale,w_1600.png 1600w, img/maquetes_pro/8_studio_alfa/6_nqgsjj/6_nqgsjj_c_scale,w_480.png 480w, img/maquetes_pro/8_studio_alfa/6_nqgsjj/6_nqgsjj_c_scale,w_963.png 963w"
        },
        {
            src: "img/maquetes_pro/8_studio_alfa/7_nkc19l/7_nkc19l_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/8_studio_alfa/7_nkc19l/7_nkc19l_c_scale,w_1337.png 1337w, img/maquetes_pro/8_studio_alfa/7_nkc19l/7_nkc19l_c_scale,w_1600.png 1600w, img/maquetes_pro/8_studio_alfa/7_nkc19l/7_nkc19l_c_scale,w_480.png 480w, img/maquetes_pro/8_studio_alfa/7_nkc19l/7_nkc19l_c_scale,w_961.png 961w"
        },
        {
            src: "img/maquetes_pro/8_studio_alfa/8_suttle/8_suttle_c_scale,w_1600.png",
            srcset: "img/maquetes_pro/8_studio_alfa/8_suttle/8_suttle_c_scale,w_1046.png 1046w, img/maquetes_pro/8_studio_alfa/8_suttle/8_suttle_c_scale,w_1396.png 1396w, img/maquetes_pro/8_studio_alfa/8_suttle/8_suttle_c_scale,w_1600.png 1600w, img/maquetes_pro/8_studio_alfa/8_suttle/8_suttle_c_scale,w_480.png 480w"
        }
    ]
];

let currentPack = [];
let currentIndex = 0;

const modal = document.getElementById('galleryModal');
const mainImg = document.getElementById('mainModalImage');
const counter = document.getElementById('modalCounter');
const thumbContainer = document.getElementById('thumbnailContainer');

// Função para abrir o modal
function openModal(packIndex) {
    currentPack = imagePacks[packIndex];
    currentIndex = 0;
    
    // Removendo display hidden do tailwind
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Impede rolagem do fundo
    document.body.style.overflow = 'hidden';

    // Adiciona estado ao histórico para permitir fechar no botão "Voltar" (Mobile)
    history.pushState({ modalOpen: true }, "");

    updateModalContent();
}

// Esconde o modal visualmente (Lógica isolada)
function hideModalElements() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    // Restaura rolagem do fundo
    document.body.style.overflow = '';
}

// Função para fechar o modal
function closeModal() {
    // Se o histórico tiver o estado do modal, recuamos um passo (isso dispara o evento popstate)
    if (history.state && history.state.modalOpen) {
        history.back(); 
    } else {
        hideModalElements(); // Caso contrário fechamos direto
    }
}

// Evento: Fecha o modal pelo botão "Voltar" do navegador/celular
window.addEventListener('popstate', () => {
    // Quando o usuário clica em voltar, o histórico já recuou, então apenas escondemos o modal
    if (!modal.classList.contains('hidden')) {
        hideModalElements();
    }
});

// Evento: Fecha o modal ao apertar 'Esc'
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Evento: Fecha o modal ao clicar fora da foto
modal.addEventListener('click', (e) => {
    // Checa se o clique foi na área vazia (fundo do modal, ou divs que envelopam a imagem)
    if (e.target === modal || 
        e.target.classList.contains('flex-1') || 
        e.target.classList.contains('justify-between')) {
        closeModal();
    }
});

// Função para atualizar a imagem, contador e miniaturas ativas
function updateModalContent() {
    const currentItem = currentPack[currentIndex];
    // Atualiza imagem principal
    mainImg.src = currentItem.src || currentItem;
    if (currentItem.srcset) {
        mainImg.srcset = currentItem.srcset;
        mainImg.sizes = "(max-width: 1600px) 100vw, 1600px";
    } else {
        mainImg.removeAttribute('srcset');
        mainImg.removeAttribute('sizes');
    }
    
    // Atualiza o contador (ex: "1 of 6")
    counter.innerText = `${currentIndex + 1} de ${currentPack.length}`;
    
    // Renderiza barra de miniaturas
    renderThumbnails();
}

// Navegação
function nextImage() {
    currentIndex = (currentIndex + 1) % currentPack.length;
    updateModalContent();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentPack.length) % currentPack.length;
    updateModalContent();
}

function setMainImage(index) {
    currentIndex = index;
    updateModalContent();
}

// Construir as miniaturas dinamicamente no rodapé do modal
function renderThumbnails() {
    thumbContainer.innerHTML = ''; // Limpar antigos
    
    currentPack.forEach((item, index) => {
        const isActive = index === currentIndex;
        
        const img = document.createElement('img');
        img.src = item.src || item;
        if (item.srcset) {
            img.srcset = item.srcset;
            img.sizes = "96px"; // Thumbnail size approximately
        }
        img.onclick = () => setMainImage(index);
        
        // Classes Tailwind para miniatura idêntica à referência
        img.className = `h-20 w-24 object-cover cursor-pointer transition-all duration-200 
                         ${isActive ? 'border-2 border-white opacity-100 scale-105 shadow-lg' : 'opacity-50 hover:opacity-100'}`;
        
        thumbContainer.appendChild(img);
    });
    
    // Faz a miniatura ativa rolar para o centro suavemente
    if(thumbContainer.children[currentIndex]) {
        thumbContainer.children[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}

// Expondo as funções globalmente para que possam ser chamadas do HTML
window.openModal = openModal;
window.closeModal = closeModal;
window.nextImage = nextImage;
window.prevImage = prevImage;
window.setMainImage = setMainImage;

// ===== MODAL MAQUETES PROFISSIONAIS =====
// Pacote de imagens da pasta Maquete Profissional
const imagePro2 = [
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro1/maquete_pro1_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro1/maquete_pro1_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro1/maquete_pro1_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro1/maquete_pro1_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro10/maquete_pro10_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro10/maquete_pro10_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro10/maquete_pro10_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro10/maquete_pro10_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro11/maquete_pro11_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro11/maquete_pro11_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro11/maquete_pro11_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro11/maquete_pro11_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro12/maquete_pro12_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro12/maquete_pro12_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro12/maquete_pro12_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro12/maquete_pro12_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro13/maquete_pro13_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro13/maquete_pro13_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro13/maquete_pro13_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro13/maquete_pro13_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro14/maquete_pro14_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro14/maquete_pro14_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro14/maquete_pro14_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro14/maquete_pro14_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro15/maquete_pro15_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro15/maquete_pro15_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro15/maquete_pro15_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro15/maquete_pro15_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro16/maquete_pro16_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro16/maquete_pro16_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro16/maquete_pro16_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro16/maquete_pro16_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro17/maquete_pro17_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro17/maquete_pro17_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro17/maquete_pro17_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro17/maquete_pro17_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro18/maquete_pro18_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro18/maquete_pro18_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro18/maquete_pro18_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro18/maquete_pro18_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro19/maquete_pro19_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro19/maquete_pro19_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro19/maquete_pro19_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro19/maquete_pro19_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro2/maquete_pro2_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro2/maquete_pro2_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro2/maquete_pro2_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro2/maquete_pro2_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro20/maquete_pro20_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro20/maquete_pro20_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro20/maquete_pro20_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro20/maquete_pro20_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro21/maquete_pro21_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro21/maquete_pro21_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro21/maquete_pro21_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro21/maquete_pro21_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro22/maquete_pro22_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro22/maquete_pro22_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro22/maquete_pro22_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro22/maquete_pro22_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro23/maquete_pro23_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro23/maquete_pro23_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro23/maquete_pro23_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro23/maquete_pro23_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro24/maquete_pro24_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro24/maquete_pro24_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro24/maquete_pro24_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro24/maquete_pro24_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro25/maquete_pro25_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro25/maquete_pro25_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro25/maquete_pro25_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro25/maquete_pro25_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro26/maquete_pro26_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro26/maquete_pro26_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro26/maquete_pro26_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro26/maquete_pro26_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro27/maquete_pro27_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro27/maquete_pro27_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro27/maquete_pro27_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro27/maquete_pro27_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro28/maquete_pro28_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro28/maquete_pro28_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro28/maquete_pro28_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro28/maquete_pro28_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro29/maquete_pro29_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro29/maquete_pro29_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro29/maquete_pro29_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro29/maquete_pro29_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro3/maquete_pro3_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro3/maquete_pro3_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro3/maquete_pro3_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro3/maquete_pro3_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro30/maquete_pro30_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro30/maquete_pro30_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro30/maquete_pro30_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro30/maquete_pro30_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro31/maquete_pro31_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro31/maquete_pro31_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro31/maquete_pro31_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro31/maquete_pro31_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro32/maquete_pro32_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro32/maquete_pro32_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro32/maquete_pro32_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro32/maquete_pro32_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro33/maquete_pro33_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro33/maquete_pro33_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro33/maquete_pro33_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro33/maquete_pro33_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro34/maquete_pro34_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro34/maquete_pro34_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro34/maquete_pro34_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro34/maquete_pro34_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro35/maquete_pro35_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro35/maquete_pro35_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro35/maquete_pro35_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro35/maquete_pro35_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro36/maquete_pro36_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro36/maquete_pro36_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro36/maquete_pro36_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro36/maquete_pro36_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro37/maquete_pro37_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro37/maquete_pro37_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro37/maquete_pro37_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro37/maquete_pro37_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro38/maquete_pro38_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro38/maquete_pro38_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro38/maquete_pro38_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro38/maquete_pro38_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro39/maquete_pro39_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro39/maquete_pro39_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro39/maquete_pro39_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro39/maquete_pro39_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro4/maquete_pro4_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro4/maquete_pro4_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro4/maquete_pro4_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro4/maquete_pro4_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro40/maquete_pro40_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro40/maquete_pro40_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro40/maquete_pro40_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro40/maquete_pro40_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro41/maquete_pro41_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro41/maquete_pro41_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro41/maquete_pro41_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro41/maquete_pro41_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro42/maquete_pro42_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro42/maquete_pro42_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro42/maquete_pro42_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro42/maquete_pro42_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro43/maquete_pro43_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro43/maquete_pro43_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro43/maquete_pro43_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro43/maquete_pro43_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro44/maquete_pro44_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro44/maquete_pro44_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro44/maquete_pro44_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro44/maquete_pro44_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro45/maquete_pro45_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro45/maquete_pro45_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro45/maquete_pro45_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro45/maquete_pro45_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro46/maquete_pro46_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro46/maquete_pro46_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro46/maquete_pro46_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro46/maquete_pro46_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro47/maquete_pro47_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro47/maquete_pro47_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro47/maquete_pro47_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro47/maquete_pro47_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro48/maquete_pro48_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro48/maquete_pro48_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro48/maquete_pro48_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro48/maquete_pro48_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro49/maquete_pro49_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro49/maquete_pro49_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro49/maquete_pro49_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro49/maquete_pro49_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro5/maquete_pro5_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro5/maquete_pro5_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro5/maquete_pro5_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro5/maquete_pro5_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro50/maquete_pro50_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro50/maquete_pro50_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro50/maquete_pro50_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro50/maquete_pro50_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro51/maquete_pro51_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro51/maquete_pro51_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro51/maquete_pro51_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro51/maquete_pro51_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro52/maquete_pro52_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro52/maquete_pro52_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro52/maquete_pro52_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro52/maquete_pro52_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro53/maquete_pro53_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro53/maquete_pro53_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro53/maquete_pro53_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro53/maquete_pro53_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro54/maquete_pro54_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro54/maquete_pro54_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro54/maquete_pro54_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro54/maquete_pro54_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro55/maquete_pro55_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro55/maquete_pro55_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro55/maquete_pro55_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro55/maquete_pro55_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro56/maquete_pro56_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro56/maquete_pro56_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro56/maquete_pro56_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro56/maquete_pro56_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro57/maquete_pro57_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro57/maquete_pro57_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro57/maquete_pro57_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro57/maquete_pro57_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro58/maquete_pro58_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro58/maquete_pro58_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro58/maquete_pro58_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro58/maquete_pro58_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro59/maquete_pro59_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro59/maquete_pro59_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro59/maquete_pro59_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro59/maquete_pro59_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro6/maquete_pro6_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro6/maquete_pro6_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro6/maquete_pro6_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro6/maquete_pro6_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro60/maquete_pro60_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro60/maquete_pro60_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro60/maquete_pro60_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro60/maquete_pro60_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro61/maquete_pro61_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro61/maquete_pro61_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro61/maquete_pro61_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro61/maquete_pro61_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro62/maquete_pro62_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro62/maquete_pro62_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro62/maquete_pro62_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro62/maquete_pro62_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro63/maquete_pro63_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro63/maquete_pro63_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro63/maquete_pro63_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro63/maquete_pro63_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro64/maquete_pro64_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro64/maquete_pro64_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro64/maquete_pro64_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro64/maquete_pro64_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro65/maquete_pro65_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro65/maquete_pro65_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro65/maquete_pro65_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro65/maquete_pro65_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro66/maquete_pro66_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro66/maquete_pro66_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro66/maquete_pro66_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro66/maquete_pro66_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro67/maquete_pro67_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro67/maquete_pro67_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro67/maquete_pro67_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro67/maquete_pro67_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro68/maquete_pro68_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro68/maquete_pro68_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro68/maquete_pro68_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro68/maquete_pro68_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro69/maquete_pro69_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro69/maquete_pro69_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro69/maquete_pro69_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro69/maquete_pro69_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro7/maquete_pro7_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro7/maquete_pro7_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro7/maquete_pro7_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro7/maquete_pro7_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro70/maquete_pro70_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro70/maquete_pro70_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro70/maquete_pro70_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro70/maquete_pro70_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro71/maquete_pro71_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro71/maquete_pro71_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro71/maquete_pro71_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro71/maquete_pro71_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro72/maquete_pro72_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro72/maquete_pro72_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro72/maquete_pro72_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro72/maquete_pro72_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro73/maquete_pro73_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro73/maquete_pro73_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro73/maquete_pro73_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro73/maquete_pro73_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro74/maquete_pro74_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro74/maquete_pro74_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro74/maquete_pro74_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro74/maquete_pro74_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro75/maquete_pro75_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro75/maquete_pro75_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro75/maquete_pro75_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro75/maquete_pro75_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro76/maquete_pro76_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro76/maquete_pro76_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro76/maquete_pro76_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro76/maquete_pro76_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro77/maquete_pro77_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro77/maquete_pro77_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro77/maquete_pro77_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro77/maquete_pro77_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro78/maquete_pro78_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro78/maquete_pro78_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro78/maquete_pro78_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro78/maquete_pro78_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro79/maquete_pro79_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro79/maquete_pro79_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro79/maquete_pro79_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro79/maquete_pro79_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro8/maquete_pro8_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro8/maquete_pro8_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_profissionais/maquete_pro8/maquete_pro8_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_profissionais/maquete_pro8/maquete_pro8_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro80/maquete_pro80_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro80/maquete_pro80_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro80/maquete_pro80_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro80/maquete_pro80_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_profissionais/maquete_pro9/maquete_pro9_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_profissionais/maquete_pro9/maquete_pro9_c_scale,w_480.png 480w, img/imagens_header/maquetes_profissionais/maquete_pro9/maquete_pro9_c_scale,w_960.png 960w, img/imagens_header/maquetes_profissionais/maquete_pro9/maquete_pro9_c_scale,w_1280.png 1280w"
    }
];

// Abre o modal reutilizando a mesma infraestrutura existente,
// mas carregando o pacote completo de fotos de Maquete Profissional
function openPro2Modal() {
    currentPack = imagePro2;
    currentIndex = 0;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    document.body.style.overflow = 'hidden';
    history.pushState({ modalOpen: true }, "");

    updateModalContent();
}

window.openPro2Modal = openPro2Modal;

// ===== MODAL MAQUETES ACADÊMICAS =====
const imageAcademica = [
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica10/maquete_academica10_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica10/maquete_academica10_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica10/maquete_academica10_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica10/maquete_academica10_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica11/maquete_academica11_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica11/maquete_academica11_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica11/maquete_academica11_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica11/maquete_academica11_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica12/maquete_academica12_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica12/maquete_academica12_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica12/maquete_academica12_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica12/maquete_academica12_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica13/maquete_academica13_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica13/maquete_academica13_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica13/maquete_academica13_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica13/maquete_academica13_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica14/maquete_academica14_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica14/maquete_academica14_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica14/maquete_academica14_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica14/maquete_academica14_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica15/maquete_academica15_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica15/maquete_academica15_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica15/maquete_academica15_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica15/maquete_academica15_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica16/maquete_academica16_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica16/maquete_academica16_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica16/maquete_academica16_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica16/maquete_academica16_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica17/maquete_academica17_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica17/maquete_academica17_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica17/maquete_academica17_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica17/maquete_academica17_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica18/maquete_academica18_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica18/maquete_academica18_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica18/maquete_academica18_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica18/maquete_academica18_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica19/maquete_academica19_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica19/maquete_academica19_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica19/maquete_academica19_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica19/maquete_academica19_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica20/maquete_academica20_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica20/maquete_academica20_c_scale,w_480.png 480w, img/imagens_header/maquetes_academicas/maquete_academica20/maquete_academica20_c_scale,w_960.png 960w, img/imagens_header/maquetes_academicas/maquete_academica20/maquete_academica20_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica21/maquete_academica21_c_scale,w_1280.png",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica21/maquete_academica21_c_scale,w_480.png 480w, img/imagens_header/maquetes_academicas/maquete_academica21/maquete_academica21_c_scale,w_960.png 960w, img/imagens_header/maquetes_academicas/maquete_academica21/maquete_academica21_c_scale,w_1280.png 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica22/maquete_academica22_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica22/maquete_academica22_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica22/maquete_academica22_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica22/maquete_academica22_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica23/maquete_academica23_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica23/maquete_academica23_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica23/maquete_academica23_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica23/maquete_academica23_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica24/maquete_academica24_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica24/maquete_academica24_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica24/maquete_academica24_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica24/maquete_academica24_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_academicas/maquete_academica25/maquete_academica25_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_academicas/maquete_academica25/maquete_academica25_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_academicas/maquete_academica25/maquete_academica25_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_academicas/maquete_academica25/maquete_academica25_c_scale,w_1280.jpg 1280w"
    }
];

function openAcademicaModal() {
    currentPack = imageAcademica;
    currentIndex = 0;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    history.pushState({ modalOpen: true }, "");
    updateModalContent();
}
window.openAcademicaModal = openAcademicaModal;

// ===== MODAL MAQUETES CENOGRÁFICAS =====
const imageCenografica = [
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica10/maquete_cenografica10_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica10/maquete_cenografica10_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica10/maquete_cenografica10_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica10/maquete_cenografica10_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica11/maquete_cenografica11_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica11/maquete_cenografica11_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica11/maquete_cenografica11_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica11/maquete_cenografica11_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica12/maquete_cenografica12_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica12/maquete_cenografica12_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica12/maquete_cenografica12_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica12/maquete_cenografica12_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica13/maquete_cenografica13_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica13/maquete_cenografica13_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica13/maquete_cenografica13_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica13/maquete_cenografica13_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica14/maquete_cenografica14_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica14/maquete_cenografica14_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica14/maquete_cenografica14_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica14/maquete_cenografica14_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica15/maquete_cenografica15_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica15/maquete_cenografica15_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica15/maquete_cenografica15_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica15/maquete_cenografica15_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica16/maquete_cenografica16_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica16/maquete_cenografica16_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica16/maquete_cenografica16_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica16/maquete_cenografica16_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica17/maquete_cenografica17_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica17/maquete_cenografica17_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica17/maquete_cenografica17_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica17/maquete_cenografica17_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica18/maquete_cenografica18_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica18/maquete_cenografica18_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica18/maquete_cenografica18_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica18/maquete_cenografica18_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica19/maquete_cenografica19_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica19/maquete_cenografica19_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica19/maquete_cenografica19_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica19/maquete_cenografica19_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica20/maquete_cenografica20_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica20/maquete_cenografica20_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica20/maquete_cenografica20_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica20/maquete_cenografica20_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica21/maquete_cenografica21_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica21/maquete_cenografica21_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica21/maquete_cenografica21_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica21/maquete_cenografica21_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica22/maquete_cenografica22_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica22/maquete_cenografica22_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica22/maquete_cenografica22_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica22/maquete_cenografica22_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica23/maquete_cenografica23_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica23/maquete_cenografica23_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica23/maquete_cenografica23_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica23/maquete_cenografica23_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica24/maquete_cenografica24_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica24/maquete_cenografica24_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica24/maquete_cenografica24_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica24/maquete_cenografica24_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica25/maquete_cenografica25_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica25/maquete_cenografica25_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica25/maquete_cenografica25_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica25/maquete_cenografica25_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica26/maquete_cenografica26_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica26/maquete_cenografica26_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica26/maquete_cenografica26_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica26/maquete_cenografica26_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica27/maquete_cenografica27_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica27/maquete_cenografica27_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica27/maquete_cenografica27_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica27/maquete_cenografica27_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica28/maquete_cenografica28_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica28/maquete_cenografica28_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica28/maquete_cenografica28_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica28/maquete_cenografica28_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica29/maquete_cenografica29_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica29/maquete_cenografica29_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica29/maquete_cenografica29_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica29/maquete_cenografica29_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica30/maquete_cenografica30_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica30/maquete_cenografica30_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica30/maquete_cenografica30_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica30/maquete_cenografica30_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica31/maquete_cenografica31_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica31/maquete_cenografica31_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica31/maquete_cenografica31_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica31/maquete_cenografica31_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica32/maquete_cenografica32_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica32/maquete_cenografica32_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica32/maquete_cenografica32_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica32/maquete_cenografica32_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica33/maquete_cenografica33_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica33/maquete_cenografica33_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica33/maquete_cenografica33_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica33/maquete_cenografica33_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica34/maquete_cenografica34_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica34/maquete_cenografica34_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica34/maquete_cenografica34_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica34/maquete_cenografica34_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica35/maquete_cenografica35_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica35/maquete_cenografica35_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica35/maquete_cenografica35_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica35/maquete_cenografica35_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica36/maquete_cenografica36_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica36/maquete_cenografica36_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica36/maquete_cenografica36_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica36/maquete_cenografica36_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica37/maquete_cenografica37_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica37/maquete_cenografica37_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica37/maquete_cenografica37_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica37/maquete_cenografica37_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica38/maquete_cenografica38_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica38/maquete_cenografica38_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica38/maquete_cenografica38_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica38/maquete_cenografica38_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica39/maquete_cenografica39_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica39/maquete_cenografica39_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica39/maquete_cenografica39_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica39/maquete_cenografica39_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica40/maquete_cenografica40_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica40/maquete_cenografica40_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica40/maquete_cenografica40_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica40/maquete_cenografica40_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_cenograficas/maquete_cenografica41/maquete_cenografica41_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_cenograficas/maquete_cenografica41/maquete_cenografica41_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_cenograficas/maquete_cenografica41/maquete_cenografica41_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_cenograficas/maquete_cenografica41/maquete_cenografica41_c_scale,w_1280.jpg 1280w"
    }
];

function openCenograficaModal() {
    currentPack = imageCenografica;
    currentIndex = 0;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    history.pushState({ modalOpen: true }, "");
    updateModalContent();
}
window.openCenograficaModal = openCenograficaModal;

// ===== MODAL MAQUETES ESCOLARES =====
const imageEscolar = [
    {
        src: "img/imagens_header/maquetes_escolares/6616a1a0_6807_4cf8_9b2b_a35e811e937e/6616a1a0_6807_4cf8_9b2b_a35e811e937e_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/6616a1a0_6807_4cf8_9b2b_a35e811e937e/6616a1a0_6807_4cf8_9b2b_a35e811e937e_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/6616a1a0_6807_4cf8_9b2b_a35e811e937e/6616a1a0_6807_4cf8_9b2b_a35e811e937e_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/6616a1a0_6807_4cf8_9b2b_a35e811e937e/6616a1a0_6807_4cf8_9b2b_a35e811e937e_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_escolares/img_2768/img_2768_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/img_2768/img_2768_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/img_2768/img_2768_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/img_2768/img_2768_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_escolares/img_8413/img_8413_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/img_8413/img_8413_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/img_8413/img_8413_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/img_8413/img_8413_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_escolares/img_9675/img_9675_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/img_9675/img_9675_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/img_9675/img_9675_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/img_9675/img_9675_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_30_21/whatsapp_image_2025_12_02_at_22_30_21_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_30_21/whatsapp_image_2025_12_02_at_22_30_21_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_30_21/whatsapp_image_2025_12_02_at_22_30_21_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_30_21/whatsapp_image_2025_12_02_at_22_30_21_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_31_26/whatsapp_image_2025_12_02_at_22_31_26_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_31_26/whatsapp_image_2025_12_02_at_22_31_26_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_31_26/whatsapp_image_2025_12_02_at_22_31_26_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_31_26/whatsapp_image_2025_12_02_at_22_31_26_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_13/whatsapp_image_2025_12_02_at_22_40_17_13_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_13/whatsapp_image_2025_12_02_at_22_40_17_13_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_13/whatsapp_image_2025_12_02_at_22_40_17_13_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_13/whatsapp_image_2025_12_02_at_22_40_17_13_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_14/whatsapp_image_2025_12_02_at_22_40_17_14_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_14/whatsapp_image_2025_12_02_at_22_40_17_14_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_14/whatsapp_image_2025_12_02_at_22_40_17_14_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_14/whatsapp_image_2025_12_02_at_22_40_17_14_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_19/whatsapp_image_2025_12_02_at_22_40_17_19_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_19/whatsapp_image_2025_12_02_at_22_40_17_19_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_19/whatsapp_image_2025_12_02_at_22_40_17_19_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_19/whatsapp_image_2025_12_02_at_22_40_17_19_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_20/whatsapp_image_2025_12_02_at_22_40_17_20_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_20/whatsapp_image_2025_12_02_at_22_40_17_20_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_20/whatsapp_image_2025_12_02_at_22_40_17_20_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_20/whatsapp_image_2025_12_02_at_22_40_17_20_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_7/whatsapp_image_2025_12_02_at_22_40_17_7_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_7/whatsapp_image_2025_12_02_at_22_40_17_7_c_scale,w_480.jpg 480w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_7/whatsapp_image_2025_12_02_at_22_40_17_7_c_scale,w_960.jpg 960w, img/imagens_header/maquetes_escolares/whatsapp_image_2025_12_02_at_22_40_17_7/whatsapp_image_2025_12_02_at_22_40_17_7_c_scale,w_1280.jpg 1280w"
    }
];

function openEscolarModal() {
    currentPack = imageEscolar;
    currentIndex = 0;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    history.pushState({ modalOpen: true }, "");
    updateModalContent();
}
window.openEscolarModal = openEscolarModal;

// ===== MODAL PROJETOS DIVERSOS =====
const imageDiversos = [
    {
        src: "img/imagens_header/projetos_diversos/maquete_diversos10/maquete_diversos10_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/projetos_diversos/maquete_diversos10/maquete_diversos10_c_scale,w_480.jpg 480w, img/imagens_header/projetos_diversos/maquete_diversos10/maquete_diversos10_c_scale,w_960.jpg 960w, img/imagens_header/projetos_diversos/maquete_diversos10/maquete_diversos10_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/projetos_diversos/maquete_diversos11/maquete_diversos11_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/projetos_diversos/maquete_diversos11/maquete_diversos11_c_scale,w_480.jpg 480w, img/imagens_header/projetos_diversos/maquete_diversos11/maquete_diversos11_c_scale,w_960.jpg 960w, img/imagens_header/projetos_diversos/maquete_diversos11/maquete_diversos11_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/projetos_diversos/maquete_diversos12/maquete_diversos12_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/projetos_diversos/maquete_diversos12/maquete_diversos12_c_scale,w_480.jpg 480w, img/imagens_header/projetos_diversos/maquete_diversos12/maquete_diversos12_c_scale,w_960.jpg 960w, img/imagens_header/projetos_diversos/maquete_diversos12/maquete_diversos12_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/projetos_diversos/maquete_diversos13/maquete_diversos13_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/projetos_diversos/maquete_diversos13/maquete_diversos13_c_scale,w_480.jpg 480w, img/imagens_header/projetos_diversos/maquete_diversos13/maquete_diversos13_c_scale,w_960.jpg 960w, img/imagens_header/projetos_diversos/maquete_diversos13/maquete_diversos13_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/projetos_diversos/maquete_diversos14/maquete_diversos14_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/projetos_diversos/maquete_diversos14/maquete_diversos14_c_scale,w_480.jpg 480w, img/imagens_header/projetos_diversos/maquete_diversos14/maquete_diversos14_c_scale,w_960.jpg 960w, img/imagens_header/projetos_diversos/maquete_diversos14/maquete_diversos14_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/projetos_diversos/maquete_diversos15/maquete_diversos15_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/projetos_diversos/maquete_diversos15/maquete_diversos15_c_scale,w_480.jpg 480w, img/imagens_header/projetos_diversos/maquete_diversos15/maquete_diversos15_c_scale,w_960.jpg 960w, img/imagens_header/projetos_diversos/maquete_diversos15/maquete_diversos15_c_scale,w_1280.jpg 1280w"
    },
    {
        src: "img/imagens_header/projetos_diversos/maquete_diversos16/maquete_diversos16_c_scale,w_1280.jpg",
        srcset: "img/imagens_header/projetos_diversos/maquete_diversos16/maquete_diversos16_c_scale,w_480.jpg 480w, img/imagens_header/projetos_diversos/maquete_diversos16/maquete_diversos16_c_scale,w_960.jpg 960w, img/imagens_header/projetos_diversos/maquete_diversos16/maquete_diversos16_c_scale,w_1280.jpg 1280w"
    }
];

function openDiversosModal() {
    currentPack = imageDiversos;
    currentIndex = 0;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    history.pushState({ modalOpen: true }, "");
    updateModalContent();
}
window.openDiversosModal = openDiversosModal;

// ===== CARROSSEL DA GALERIA =====
const galeriaCarousel = document.getElementById('galeriaCarousel');
const galeariaDots = document.getElementById('galeariaDots');

// Dados dos cards da galeria
const galeriaCards = [
    {
        src: "img/maquetes_pro/1_summit_tower/1_u4cq1n/1_u4cq1n_c_scale,w_1600.jpg",
        srcset: `img/maquetes_pro/1_summit_tower/1_u4cq1n/1_u4cq1n_c_scale,w_480.jpg 480w,
                 img/maquetes_pro/1_summit_tower/1_u4cq1n/1_u4cq1n_c_scale,w_955.jpg 955w,
                 img/maquetes_pro/1_summit_tower/1_u4cq1n/1_u4cq1n_c_scale,w_1299.jpg 1299w,
                 img/maquetes_pro/1_summit_tower/1_u4cq1n/1_u4cq1n_c_scale,w_1600.jpg 1600w`,
        alt: "Summit Towers",
        titulo: "Summit Towers",
        constructor: "WE Construtora",
        localidade: "Ipatinga, MG",
        escala: "1:100",
        modalIndex: 0
    },
    {
        src: "img/maquetes_pro/2_horto_residence/1_lnvlmj/1_lnvlmj_c_scale,w_1600.jpg",
        srcset: `img/maquetes_pro/2_horto_residence/1_lnvlmj/1_lnvlmj_c_scale,w_480.jpg 480w,
                 img/maquetes_pro/2_horto_residence/1_lnvlmj/1_lnvlmj_c_scale,w_962.jpg 962w,
                 img/maquetes_pro/2_horto_residence/1_lnvlmj/1_lnvlmj_c_scale,w_1355.jpg 1355w,
                 img/maquetes_pro/2_horto_residence/1_lnvlmj/1_lnvlmj_c_scale,w_1600.jpg 1600w`,
        alt: "Horto Residence",
        titulo: "Horto Residence",
        constructor: "Construtora LIMAC",
        localidade: "Ipatinga, MG",
        escala: "1:50",
        modalIndex: 1
    },
    {
        src: "img/maquetes_pro/3_ferraz_junqueira/1_wr15cl/1_wr15cl_c_scale,w_1600.jpg",
        srcset: `img/maquetes_pro/3_ferraz_junqueira/1_wr15cl/1_wr15cl_c_scale,w_480.jpg 480w,
                 img/maquetes_pro/3_ferraz_junqueira/1_wr15cl/1_wr15cl_c_scale,w_957.jpg 957w,
                 img/maquetes_pro/3_ferraz_junqueira/1_wr15cl/1_wr15cl_c_scale,w_1365.jpg 1365w,
                 img/maquetes_pro/3_ferraz_junqueira/1_wr15cl/1_wr15cl_c_scale,w_1600.jpg 1600w`,
        alt: "Ferraz Junqueira",
        titulo: "Ferraz Junqueira",
        constructor: "Construtora Vilela Campos",
        localidade: "S\u00e3o Louren\u00e7o, MG",
        escala: "1:50",
        modalIndex: 2
    },
    {
        src: "img/maquetes_pro/4_soul_ipanema/1_w0gyhm/1_w0gyhm_c_scale,w_1600.jpg",
        srcset: `img/maquetes_pro/4_soul_ipanema/1_w0gyhm/1_w0gyhm_c_scale,w_480.jpg 480w,
                 img/maquetes_pro/4_soul_ipanema/1_w0gyhm/1_w0gyhm_c_scale,w_895.jpg 895w,
                 img/maquetes_pro/4_soul_ipanema/1_w0gyhm/1_w0gyhm_c_scale,w_1143.jpg 1143w,
                 img/maquetes_pro/4_soul_ipanema/1_w0gyhm/1_w0gyhm_c_scale,w_1600.jpg 1600w`,
        alt: "Soul Ipanema",
        titulo: "Soul Ipanema",
        constructor: "On Construtora",
        localidade: "Ipatinga, MG",
        escala: "1:50",
        modalIndex: 3
    },
    {
        src: "img/maquetes_pro/5_privillege/1_ennokx/1_ennokx_c_scale,w_1600.jpg",
        srcset: `img/maquetes_pro/5_privillege/1_ennokx/1_ennokx_c_scale,w_480.jpg 480w,
                 img/maquetes_pro/5_privillege/1_ennokx/1_ennokx_c_scale,w_784.jpg 784w,
                 img/maquetes_pro/5_privillege/1_ennokx/1_ennokx_c_scale,w_1037.jpg 1037w,
                 img/maquetes_pro/5_privillege/1_ennokx/1_ennokx_c_scale,w_1600.jpg 1600w`,
        alt: "Privil\u00e9ge",
        titulo: "Privil\u00e9ge",
        constructor: "On Construtora",
        localidade: "Ituiutaba, MG",
        escala: "1:50",
        modalIndex: 4
    },
    {
        src: "img/maquetes_pro/6_serena_tucuruvi/1_jpyqym/1_jpyqym_c_scale,w_1600.png",
        srcset: `img/maquetes_pro/6_serena_tucuruvi/1_jpyqym/1_jpyqym_c_scale,w_480.png 480w,
                 img/maquetes_pro/6_serena_tucuruvi/1_jpyqym/1_jpyqym_c_scale,w_986.png 986w,
                 img/maquetes_pro/6_serena_tucuruvi/1_jpyqym/1_jpyqym_c_scale,w_1373.png 1373w,
                 img/maquetes_pro/6_serena_tucuruvi/1_jpyqym/1_jpyqym_c_scale,w_1600.png 1600w`,
        alt: "Serena Tucuruvi",
        titulo: "Serena Tucuruvi",
        constructor: "Construtora LIMAC",
        localidade: "S\u00e3o Paulo, SP",
        escala: "1:75",
        modalIndex: 5
    },
    {
        src: "img/maquetes_pro/7_centro_alimenticio_marica/1_xbyjuw/1_xbyjuw_c_scale,w_1600.jpg",
        srcset: `img/maquetes_pro/7_centro_alimenticio_marica/1_xbyjuw/1_xbyjuw_c_scale,w_480.jpg 480w,
                 img/maquetes_pro/7_centro_alimenticio_marica/1_xbyjuw/1_xbyjuw_c_scale,w_944.jpg 944w,
                 img/maquetes_pro/7_centro_alimenticio_marica/1_xbyjuw/1_xbyjuw_c_scale,w_1304.jpg 1304w,
                 img/maquetes_pro/7_centro_alimenticio_marica/1_xbyjuw/1_xbyjuw_c_scale,w_1600.jpg 1600w`,
        alt: "Centro Aliment\u00edcio",
        titulo: "Centro Aliment\u00edcio",
        constructor: "Masterplan e BioTec Maric\u00e1",
        localidade: "Maric\u00e1, RJ",
        escala: "1:300",
        modalIndex: 6
    },
    {
        src: "img/maquetes_pro/8_studio_alfa/1_cyhyaa/1_cyhyaa_c_scale,w_1600.png",
        srcset: `img/maquetes_pro/8_studio_alfa/1_cyhyaa/1_cyhyaa_c_scale,w_480.png 480w,
                 img/maquetes_pro/8_studio_alfa/1_cyhyaa/1_cyhyaa_c_scale,w_990.png 990w,
                 img/maquetes_pro/8_studio_alfa/1_cyhyaa/1_cyhyaa_c_scale,w_1376.png 1376w,
                 img/maquetes_pro/8_studio_alfa/1_cyhyaa/1_cyhyaa_c_scale,w_1600.png 1600w`,
        alt: "Studio Alfa",
        titulo: "Studio Alfa",
        constructor: "Construtora Alfa",
        localidade: "Manhua\u00e7u, MG",
        escala: "1:75",
        modalIndex: 7
    }
];

// Inicializar carrossel da galeria
function initGaleriaCarousel() {
    if (!galeriaCarousel) return;
    
    galeriaCarousel.innerHTML = '';
    
    galeriaCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'carousel-item cursor-pointer relative w-full h-[400px] md:h-[500px] overflow-hidden group bg-black flex-shrink-0';
        cardElement.onclick = () => openModal(card.modalIndex);
        
        const srcsetAttr = card.srcset ? `srcset="${card.srcset}"` : '';
        const sizesAttr = `sizes="(max-width: 768px) 100vw, 800px"`;
        
        cardElement.innerHTML = `
            <img src="${card.src}" ${srcsetAttr} ${sizesAttr} alt="${card.alt}" class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60">
            <div class="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-[#1b1b1b]/40 to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
            
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                <svg class="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>
            </div>

            <div class="absolute bottom-0 left-0 w-full p-5 z-30 flex flex-col gap-2 transition-transform duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div>
                    <h3 class="text-white text-lg font-bold leading-tight">${card.titulo}</h3>
                    ${card.constructor ? `<p class="text-gray-300 text-xs font-light mt-1">${card.constructor}</p>` : ''}
                    ${card.localidade ? `<p class="text-gray-400 text-xs font-light">${card.localidade}</p>` : ''}
                </div>
                <div class="flex items-center gap-1.5 mt-2">
                    <svg class="w-3.5 h-3.5 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <g transform="rotate(-45 12 12)">
                            <rect x="3" y="8" width="18" height="8" />
                            <path d="M6 16v-2.5 M9 16v-4 M12 16v-2.5 M15 16v-4 M18 16v-2.5" />
                        </g>
                    </svg>
                    <span class="text-white/80 text-xs font-medium">${card.escala || '1:50'}</span>
                </div>
            </div>
        `;
        
        galeriaCarousel.appendChild(cardElement);
    });
    
    initGaleariaDots();
}

// Inicializar dots da galeria
function initGaleariaDots() {
    if (!galeariaDots) return;
    
    galeariaDots.innerHTML = '';
    
    galeriaCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => scrollToGaleriaItem(index);
        galeariaDots.appendChild(dot);
    });
}

// Atualizar dots da galeria baseado na posição do scroll
function updateGaleariaDots() {
    if (!galeriaCarousel) return;
    
    const scrollLeft = galeriaCarousel.scrollLeft;
    const itemWidth = galeriaCarousel.clientWidth;
    
    document.querySelectorAll('#galeariaDots .dot').forEach((dot, index) => {
        if (Math.abs(scrollLeft - index * itemWidth) < itemWidth / 2) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Navegar com setas na galeria
function scrollGaleria(direction) {
    if (!galeriaCarousel) return;
    
    const itemWidth = galeriaCarousel.clientWidth;
    const scrollAmount = itemWidth * direction;
    galeriaCarousel.scrollLeft += scrollAmount;
}

// Rolar para item específico na galeria
function scrollToGaleriaItem(index) {
    if (!galeriaCarousel) return;
    
    const itemWidth = galeriaCarousel.clientWidth;
    galeriaCarousel.scrollLeft = itemWidth * index;
}

// Expondo as funções globalmente para que possam ser chamadas do HTML
window.scrollGaleria = scrollGaleria;

// Atualizar dots ao rolar na galeria
if (galeriaCarousel) {
    galeriaCarousel.addEventListener('scroll', updateGaleariaDots);
}

// Inicializar carrossel da galeria na carga da página
document.addEventListener('DOMContentLoaded', initGaleriaCarousel);
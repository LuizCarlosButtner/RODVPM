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
        src: "img/imagens_header/Maquete Profissional/maquete_pro1.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro1_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro1_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro1_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro10.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro10_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro10_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro10_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro11.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro11_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro11_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro11_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro12.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro12_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro12_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro12_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro13.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro13_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro13_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro13_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro14.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro14_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro14_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro14_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro15.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro15_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro15_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro15_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro16.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro16_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro16_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro16_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro17.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro17_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro17_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro17_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro18.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro18_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro18_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro18_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro19.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro19_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro19_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro19_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro2.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro2_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro2_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro2_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro20.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro20_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro20_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro20_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro21.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro21_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro21_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro21_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro22.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro22_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro22_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro22_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro23.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro23_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro23_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro23_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro24.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro24_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro24_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro24_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro25.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro25_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro25_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro25_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro26.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro26_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro26_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro26_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro27.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro27_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro27_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro27_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro28.HEIC",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro28_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro28_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro28_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro29.HEIC",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro29_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro29_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro29_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro3.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro3_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro3_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro3_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro30.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro30_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro30_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro30_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro31.HEIC",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro31_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro31_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro31_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro32.HEIC",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro32_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro32_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro32_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro33.HEIC",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro33_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro33_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro33_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro34.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro34_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro34_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro34_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro35.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro35_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro35_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro35_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro36.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro36_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro36_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro36_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro37.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro37_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro37_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro37_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro38.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro38_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro38_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro38_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro39.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro39_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro39_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro39_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro4.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro4_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro4_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro4_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro40.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro40_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro40_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro40_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro41.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro41_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro41_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro41_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro42.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro42_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro42_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro42_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro43.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro43_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro43_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro43_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro44.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro44_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro44_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro44_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro45.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro45_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro45_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro45_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro46.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro46_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro46_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro46_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro47.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro47_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro47_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro47_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro48.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro48_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro48_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro48_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro49.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro49_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro49_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro49_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro5.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro5_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro5_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro5_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro50.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro50_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro50_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro50_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro51.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro51_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro51_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro51_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro52.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro52_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro52_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro52_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro53.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro53_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro53_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro53_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro54.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro54_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro54_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro54_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro55.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro55_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro55_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro55_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro56.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro56_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro56_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro56_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro57.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro57_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro57_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro57_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro58.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro58_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro58_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro58_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro59.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro59_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro59_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro59_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro6.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro6_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro6_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro6_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro60.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro60_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro60_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro60_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro61.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro61_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro61_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro61_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro62.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro62_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro62_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro62_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro63.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro63_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro63_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro63_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro64.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro64_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro64_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro64_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro65.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro65_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro65_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro65_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro66.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro66_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro66_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro66_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro67.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro67_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro67_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro67_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro68.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro68_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro68_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro68_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro69.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro69_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro69_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro69_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro7.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro7_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro7_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro7_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro70.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro70_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro70_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro70_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro71.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro71_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro71_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro71_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro72.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro72_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro72_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro72_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro73.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro73_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro73_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro73_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro74.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro74_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro74_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro74_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro75.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro75_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro75_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro75_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro76.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro76_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro76_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro76_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro77.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro77_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro77_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro77_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro78.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro78_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro78_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro78_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro79.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro79_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro79_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro79_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro8.JPG",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro8_w480.jpg 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro8_w960.jpg 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro8_w1280.jpg 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro80.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro80_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro80_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro80_w1280.png 1280w"
    },
    { 
        src: "img/imagens_header/Maquete Profissional/maquete_pro9.png",
        srcset: "img/imagens_header/Maquete Profissional/responsive/maquete_pro9_w480.png 480w, img/imagens_header/Maquete Profissional/responsive/maquete_pro9_w960.png 960w, img/imagens_header/Maquete Profissional/responsive/maquete_pro9_w1280.png 1280w"
    },
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
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica10.jpg" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica11.jpg" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica12.JPEG" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica13.JPEG" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica14.jpg" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica15.JPEG" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica16.JPEG" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica17.jpg" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica18.jpg" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica19.JPEG" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica20.png" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica21.png" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica22.jpg" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica23.jpeg" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica24.jpeg" },
    { src: "img/imagens_header/Maquetes acadêmicas /maquete_academica25.jpeg" },
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
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica10.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica11.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica12.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica13.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica14.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica15.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica16.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica17.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica18.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica19.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica20.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica21.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica22.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica23.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica24.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica25.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica26.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica27.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica28.JPEG" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica29.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica30.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica31.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica32.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica33.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica34.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica35.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica36.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica37.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica38.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica39.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica40.jpeg" },
    { src: "img/imagens_header/Maquetes cenográficas/maquete_cenografica41.jpeg" },
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
    { src: "img/imagens_header/Maquetes escolares /6616A1A0-6807-4CF8-9B2B-A35E811E937E.jpg" },
    { src: "img/imagens_header/Maquetes escolares /IMG_2768.JPEG" },
    { src: "img/imagens_header/Maquetes escolares /IMG_8413.JPEG" },
    { src: "img/imagens_header/Maquetes escolares /IMG_9675.JPEG" },
    { src: "img/imagens_header/Maquetes escolares /WhatsApp Image 2025-12-02 at 22.30.21.jpeg" },
    { src: "img/imagens_header/Maquetes escolares /WhatsApp Image 2025-12-02 at 22.31.26.jpeg" },
    { src: "img/imagens_header/Maquetes escolares /WhatsApp Image 2025-12-02 at 22.40.17 (13).jpeg" },
    { src: "img/imagens_header/Maquetes escolares /WhatsApp Image 2025-12-02 at 22.40.17 (14).jpeg" },
    { src: "img/imagens_header/Maquetes escolares /WhatsApp Image 2025-12-02 at 22.40.17 (19).jpeg" },
    { src: "img/imagens_header/Maquetes escolares /WhatsApp Image 2025-12-02 at 22.40.17 (20).jpeg" },
    { src: "img/imagens_header/Maquetes escolares /WhatsApp Image 2025-12-02 at 22.40.17 (7).jpeg" },
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
    { src: "img/imagens_header/Projetos diversos/maquete_diversos10.jpg" },
    { src: "img/imagens_header/Projetos diversos/maquete_diversos11.jpg" },
    { src: "img/imagens_header/Projetos diversos/maquete_diversos12.jpg" },
    { src: "img/imagens_header/Projetos diversos/maquete_diversos13.jpeg" },
    { src: "img/imagens_header/Projetos diversos/maquete_diversos14.jpeg" },
    { src: "img/imagens_header/Projetos diversos/maquete_diversos15.jpeg" },
    { src: "img/imagens_header/Projetos diversos/maquete_diversos16.jpeg" },
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
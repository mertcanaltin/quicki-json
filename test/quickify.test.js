const quicki = require('../index').quicki;
const assert = require('assert');

describe('Speed Test', function () {
  const obj = [{
    "pagination": {
      "total_count": 42,
      "current_page": 1,
      "num_pages": 2,
      "page_size": 24
    },
    "facets": [
      {
        "name": "Kategoriler",
        "key": "category_ids",
        "search_key": "category_ids",
        "widget_type": "category",
        "order": 1,
        "extra_params": {
          
        },
        "data": {
          "name": "Kategoriler",
          "search_key": "category_ids",
          "choices": [
            {
              "label": "Elektrikli Ev Aletleri",
              "value": 166,
              "quantity": 42,
              "is_selected": true,
              "depth": 0,
              "real_depth": 2,
              "url": "/elektrikli-ev-aletleri/?format=json",
              "menuitemmodel": "498e945edb4e48038be3fefb7cbf0f21",
              "is_parent_of_selection": false
            },
            {
              "label": "Ütüler",
              "value": 2,
              "quantity": 26,
              "is_selected": false,
              "depth": 1,
              "real_depth": 3,
              "url": "/elektrikli-ev-aletleri/utuleme/?format=json",
              "menuitemmodel": "e2b4bba2a4954b758987b966093f6183",
              "is_parent_of_selection": false
            },
            {
              "label": "Elektrikli Süpürgeler",
              "value": 133,
              "quantity": 16,
              "is_selected": false,
              "depth": 1,
              "real_depth": 3,
              "url": "/elektrikli-ev-aletleri/elektrikli-supurgeler/?format=json",
              "menuitemmodel": "3e561d5037a64fe9ac03d4cc6c61e88c",
              "is_parent_of_selection": false
            },
            {
              "label": "Tava ve Tencereler",
              "value": 7,
              "quantity": 136,
              "is_selected": false,
              "depth": 0,
              "real_depth": 2,
              "url": "/tava-ve-tencereler/?format=json",
              "menuitemmodel": "7e29d5cd047c42a2b1c1552fc0343668",
              "is_parent_of_selection": false
            },
            {
              "label": "Tartı",
              "value": 33,
              "quantity": 6,
              "is_selected": false,
              "depth": 0,
              "real_depth": 2,
              "url": "/tarti/?format=json",
              "menuitemmodel": "12a637c056964cd089ad7e2e9877f460",
              "is_parent_of_selection": false
            },
            {
              "label": "Elektrikli Mutfak Aletleri",
              "value": 35,
              "quantity": 79,
              "is_selected": false,
              "depth": 0,
              "real_depth": 2,
              "url": "/elektrikli-mutfak-aletleri/?format=json",
              "menuitemmodel": "744a92ae797b41a4a99cef61be14f26c",
              "is_parent_of_selection": false
            },
            {
              "label": "Mutfak Aksesuarları",
              "value": 34,
              "quantity": 123,
              "is_selected": false,
              "depth": 0,
              "real_depth": 2,
              "url": "/mutfak-aksesuarlari/?format=json",
              "menuitemmodel": "f5a6b0aa71a64b5ba1172fd9df9c85ce",
              "is_parent_of_selection": false
            },
            {
              "label": "Aksesuarlar",
              "value": 331,
              "quantity": 20,
              "is_selected": false,
              "depth": 0,
              "real_depth": 2,
              "url": "/aksesuarlar/?format=json",
              "menuitemmodel": "acfa04cc3af54bfe82c7c8e7255b8a76",
              "is_parent_of_selection": false
            },
            {
              "label": "Setler",
              "value": 1724,
              "quantity": 6,
              "is_selected": false,
              "depth": 0,
              "real_depth": 2,
              "url": "/setler/?format=json",
              "menuitemmodel": "37efb60860424cefa21a0cc6bb5c1dc6",
              "is_parent_of_selection": false
            }
          ],
          "widget_type": "category",
          "key": "category_ids",
          "order": 1
        }
      },
      {
        "name": "in_stock",
        "key": "in_stock",
        "search_key": "in_stock",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "in_stock",
          "search_key": "in_stock",
          "choices": [
            {
              "label": "0",
              "value": 0,
              "quantity": 21,
              "is_selected": false
            },
            {
              "label": "1",
              "value": 1,
              "quantity": 21,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "in_stock",
          "order": null
        }
      },
      {
        "name": "Materyal",
        "key": "integration_attributeId_105",
        "search_key": "attributes_integration_attributeId_105",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Materyal",
          "search_key": "attributes_integration_attributeId_105",
          "choices": [
            {
              "label": "Paslanmaz Çelik",
              "value": "Paslanmaz Çelik",
              "quantity": 3,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_105",
          "order": null
        }
      },
      {
        "name": "Teknoloji",
        "key": "integration_attributeId_21",
        "search_key": "attributes_integration_attributeId_21",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Teknoloji",
          "search_key": "attributes_integration_attributeId_21",
          "choices": [
            {
              "label": "Dikey",
              "value": "Dikey",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "Toz Torbasız",
              "value": "Toz Torbasız",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "Toz Torbalı",
              "value": "Toz Torbalı",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_21",
          "order": null
        }
      },
      {
        "name": "Renk",
        "key": "integration_attributeId_22",
        "search_key": "attributes_integration_attributeId_22",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Renk",
          "search_key": "attributes_integration_attributeId_22",
          "choices": [
            {
              "label": "Mor",
              "value": "Mor",
              "quantity": 4,
              "is_selected": false
            },
            {
              "label": "Mavi",
              "value": "Mavi",
              "quantity": 3,
              "is_selected": false
            },
            {
              "label": "Siyah",
              "value": "Siyah",
              "quantity": 3,
              "is_selected": false
            },
            {
              "label": "Bordo",
              "value": "Bordo",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "Beyaz - Mavi",
              "value": "Beyaz - Mavi",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Koyu Kahverengi",
              "value": "Koyu Kahverengi",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Kırmızı",
              "value": "Kırmızı",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Kırmızı",
              "value": "Kırmızı - Siyah",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Siyah - Gri",
              "value": "Siyah - Gri",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Siyah-Yeşil",
              "value": "Siyah-Yeşil",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_22",
          "order": null
        }
      },
      {
        "name": "Otomatik Kapanma",
        "key": "integration_attributeId_227",
        "search_key": "attributes_integration_attributeId_227",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Otomatik Kapanma",
          "search_key": "attributes_integration_attributeId_227",
          "choices": [
            {
              "label": "Var",
              "value": "Var",
              "quantity": 20,
              "is_selected": false
            },
            {
              "label": "Yok",
              "value": "Yok",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_227",
          "order": null
        }
      },
      {
        "name": "Taban Türü",
        "key": "integration_attributeId_24",
        "search_key": "attributes_integration_attributeId_24",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Taban Türü",
          "search_key": "attributes_integration_attributeId_24",
          "choices": [
            {
              "label": "Durilium Airglide",
              "value": "Durilium Airglide",
              "quantity": 5,
              "is_selected": false
            },
            {
              "label": "Durilium Airglide Autoclean",
              "value": "Durilium Airglide Autoclean",
              "quantity": 5,
              "is_selected": false
            },
            {
              "label": "Seramik",
              "value": "Seramik",
              "quantity": 2,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_24",
          "order": null
        }
      },
      {
        "name": "Güç",
        "key": "integration_attributeId_287",
        "search_key": "attributes_integration_attributeId_287",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Güç",
          "search_key": "attributes_integration_attributeId_287",
          "choices": [
            {
              "label": "2800 watt",
              "value": "2800 watt",
              "quantity": 6,
              "is_selected": false
            },
            {
              "label": "2600 watt",
              "value": "2600 watt",
              "quantity": 4,
              "is_selected": false
            },
            {
              "label": "550 watt",
              "value": "550 watt",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "890 watt",
              "value": "890 watt",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "2170 watt",
              "value": "2170 watt",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "3000 watt",
              "value": "3000 watt",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "3200 watt",
              "value": "3200 watt",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_287",
          "order": null
        }
      },
      {
        "name": "Ses Seviyesi",
        "key": "integration_attributeId_34",
        "search_key": "attributes_integration_attributeId_34",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Ses Seviyesi",
          "search_key": "attributes_integration_attributeId_34",
          "choices": [
            {
              "label": "60 dBA",
              "value": "60 dBA",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "61 Dba - 70 Dba",
              "value": "61 Dba - 70 Dba",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "64 db",
              "value": "64 db",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "65 dBA",
              "value": "65 dBA",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "65 db",
              "value": "65 db",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "67 Dba",
              "value": "67 Dba",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "67 db",
              "value": "67 db",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "75 dB",
              "value": "75 dB",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "76 db",
              "value": "76 db",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "78 db",
              "value": "78 db",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "79 db",
              "value": "79 db",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "82 dBA",
              "value": "82 dBA",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "86 dBA",
              "value": "86 dBA",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "86 db",
              "value": "86 db",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_34",
          "order": null
        }
      },
      {
        "name": "Buhar Basıncı Değeri",
        "key": "integration_attributeId_47",
        "search_key": "attributes_integration_attributeId_47",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Buhar Basıncı Değeri",
          "search_key": "attributes_integration_attributeId_47",
          "choices": [
            {
              "label": "7,5 bar",
              "value": "7,5 bar",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "8 bar",
              "value": "8 bar",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "5,8 bar",
              "value": "5,8 bar",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "6 bar",
              "value": "6 bar",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "6,5 bar",
              "value": "6,5 bar",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "6,7 bar",
              "value": "6,7 bar",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "6,8 bar",
              "value": "6,8 bar",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "7,6 bar",
              "value": "7,6 bar",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "7,8 bar",
              "value": "7,8 bar",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_47",
          "order": null
        }
      },
      {
        "name": "Şok Buhar Gücü",
        "key": "integration_attributeId_49",
        "search_key": "attributes_integration_attributeId_49",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Şok Buhar Gücü",
          "search_key": "attributes_integration_attributeId_49",
          "choices": [
            {
              "label": "260 gr/dk",
              "value": "260 gr/dk",
              "quantity": 3,
              "is_selected": false
            },
            {
              "label": "130 gr/dk",
              "value": "130 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "160 gr/dk",
              "value": "160 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "200 gr/dk",
              "value": "200 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "240 gr/dk",
              "value": "240 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "260 gr/dk",
              "value": "260 g/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "270 gr/dk",
              "value": "270 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "280 gr/dk",
              "value": "280 g/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "290 g/dk",
              "value": "290 g/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "380 gr/dk",
              "value": "380 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "420 gr/dk",
              "value": "420 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "450 gr/dk",
              "value": "450 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "460 gr/dk",
              "value": "460 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "530 gr/dk",
              "value": "530 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "550 g/dk",
              "value": "550 g/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "550 gr/dk",
              "value": "550 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "560 gr/dk",
              "value": "560 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "650 g/dk",
              "value": "650 g/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Yok",
              "value": "Yok",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_49",
          "order": null
        }
      },
      {
        "name": "Anti-Kireç Sistemi",
        "key": "integration_attributeId_50",
        "search_key": "attributes_integration_attributeId_50",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Anti-Kireç Sistemi",
          "search_key": "attributes_integration_attributeId_50",
          "choices": [
            {
              "label": "Var",
              "value": "Var",
              "quantity": 20,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_50",
          "order": null
        }
      },
      {
        "name": "Su Haznesi Kapasitesi",
        "key": "integration_attributeId_51",
        "search_key": "attributes_integration_attributeId_51",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Su Haznesi Kapasitesi",
          "search_key": "attributes_integration_attributeId_51",
          "choices": [
            {
              "label": "270 ml",
              "value": "270 ml",
              "quantity": 7,
              "is_selected": false
            },
            {
              "label": "1,8 L",
              "value": "1,8 L",
              "quantity": 5,
              "is_selected": false
            },
            {
              "label": "1,2 L",
              "value": "1,2 L",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "1,9 L",
              "value": "1,9 lt",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "300 ml",
              "value": "300 ml",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "350 ml",
              "value": "350 ml",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "1,1 L",
              "value": "1,1 L",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "1,8 L",
              "value": "1,8 lt",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Var",
              "value": "Var",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Yok",
              "value": "Yok",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_51",
          "order": null
        }
      },
      {
        "name": "Islak/Kuru Kullanım",
        "key": "integration_attributeId_656",
        "search_key": "attributes_integration_attributeId_656",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Islak/Kuru Kullanım",
          "search_key": "attributes_integration_attributeId_656",
          "choices": [
            {
              "label": "Kuru",
              "value": "Kuru",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_656",
          "order": null
        }
      },
      {
        "name": "Şarj süresi (h)",
        "key": "integration_attributeId_659",
        "search_key": "attributes_integration_attributeId_659",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Şarj süresi (h)",
          "search_key": "attributes_integration_attributeId_659",
          "choices": [
            {
              "label": "4 saat",
              "value": "4 saat",
              "quantity": 3,
              "is_selected": false
            },
            {
              "label": "3 saat",
              "value": "3 saat",
              "quantity": 2,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_659",
          "order": null
        }
      },
      {
        "name": "Başlıklar ve Aksesuarlar",
        "key": "integration_attributeId_67",
        "search_key": "attributes_integration_attributeId_67",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Başlıklar ve Aksesuarlar",
          "search_key": "attributes_integration_attributeId_67",
          "choices": [
            {
              "label": "Animal Care",
              "value": "Animal Care",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Delta başlık",
              "value": "Delta başlık",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Motorlu Fırça",
              "value": "Motorlu Fırça",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "POWER AIR Başlık, Maxi Turbo Başlık, Mini Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Entegre Easy Brush",
              "value": "POWER AIR Başlık, Maxi Turbo Başlık, Mini Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Entegre Easy Brush",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "POWER AIR Başlık, Maxi Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Radyatör Başlığı, Entegre Easy Brush",
              "value": "POWER AIR Başlık, Maxi Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Radyatör Başlığı, Entegre Easy Brush",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Power Air",
              "value": "Power Air",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Yüksek Verimli Başlık, Döşeme Başlığı, Dar Uçlu Başlık",
              "value": "Yüksek Verimli Başlık, Döşeme Başlığı, Dar Uçlu Başlık",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_67",
          "order": null
        }
      },
      {
        "name": "Sürekli Buhar Gücü",
        "key": "integration_attributeId_693",
        "search_key": "attributes_integration_attributeId_693",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Sürekli Buhar Gücü",
          "search_key": "attributes_integration_attributeId_693",
          "choices": [
            {
              "label": "120 g/dk - 420 g/dk",
              "value": "120 g/dk - 420 g/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "150 g/dk - 550 g/dk",
              "value": "150 g/dk - 550 g/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "180 g/dk - 650 g/dk",
              "value": "180 g/dk - 650 g/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "50 gr/dk",
              "value": "50 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "60 gr/dk",
              "value": "60 gr/dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "90 g/dk - 200 g/dk",
              "value": "90 g/dk - 200 g/dk",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_693",
          "order": null
        }
      },
      {
        "name": "Kablo Uzunluğu",
        "key": "integration_attributeId_730",
        "search_key": "attributes_integration_attributeId_730",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Kablo Uzunluğu",
          "search_key": "attributes_integration_attributeId_730",
          "choices": [
            {
              "label": "2 m",
              "value": "2 m",
              "quantity": 9,
              "is_selected": false
            },
            {
              "label": "1,6 m",
              "value": "1,6 m",
              "quantity": 7,
              "is_selected": false
            },
            {
              "label": "1,7 m",
              "value": "1,7 m",
              "quantity": 3,
              "is_selected": false
            },
            {
              "label": "2,5 m",
              "value": "2,5 m",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "6,2 m",
              "value": "6,2 m",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "8,4 m",
              "value": "8,4 m",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "1,9 m",
              "value": "1,9 m",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "6 m",
              "value": "6 m",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_730",
          "order": null
        }
      },
      {
        "name": "Filtreleme",
        "key": "integration_attributeId_87",
        "search_key": "attributes_integration_attributeId_87",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Filtreleme",
          "search_key": "attributes_integration_attributeId_87",
          "choices": [
            {
              "label": "Köpük + Siklon + Yüksek Verimli Filtre",
              "value": "Köpük + Siklon + Yüksek Verimli Filtre",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "Yıkanabilir filtre",
              "value": "Yıkanabilir filtre",
              "quantity": 2,
              "is_selected": false
            },
            {
              "label": "Köpük + Yüksek Verimli Filtre",
              "value": "Köpük + Yüksek Verimli Filtre",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Yüksek Verimli Başlık, Döşeme Başlığı, Dar Uçlu Başlık",
              "value": "Yüksek Verimli Başlık, Döşeme Başlığı, Dar Uçlu Başlık",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Yüksek verimli filtre + Köpük + Hygiene+ Torba",
              "value": "Yüksek verimli filtre + Köpük + Hygiene+ Torba",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "Yıkanabilir Yüksek Verimli Filtre",
              "value": "Yıkanabilir Yüksek Verimli Filtre",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "integration_attributeId_87",
          "order": null
        }
      },
      {
        "name": "Ağırlık",
        "key": "product_agirlik",
        "search_key": "attributes_product_agirlik",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Ağırlık",
          "search_key": "attributes_product_agirlik",
          "choices": [
            {
              "label": "1.1 kg",
              "value": "1.1 kg",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "product_agirlik",
          "order": null
        }
      },
      {
        "name": "Çalışma Süresi",
        "key": "product_calisma_suresi",
        "search_key": "attributes_product_calisma_suresi",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Çalışma Süresi",
          "search_key": "attributes_product_calisma_suresi",
          "choices": [
            {
              "label": "120 dk",
              "value": "120 dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "120 dk",
              "value": "120 dk'ya kadar",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "45 dk",
              "value": "45 dk",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "80 dk",
              "value": "80 dk",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "product_calisma_suresi",
          "order": null
        }
      },
      {
        "name": "Dayanım/Cycle",
        "key": "product_dayanim_cycle",
        "search_key": "attributes_product_dayanim_cycle",
        "widget_type": "multiselect",
        "order": null,
        "extra_params": {
          
        },
        "data": {
          "name": "Dayanım/Cycle",
          "search_key": "attributes_product_dayanim_cycle",
          "choices": [
            {
              "label": "8000",
              "value": "8000",
              "quantity": 1,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "product_dayanim_cycle",
          "order": null
        }
      },
      {
        "name": "Fiyat",
        "key": "price",
        "search_key": "price",
        "widget_type": "multiselect",
        "order": -1,
        "extra_params": {
          
        },
        "data": {
          "name": "Fiyat",
          "search_key": "price",
          "choices": [
            {
              "label": "500 ₺ - 999 ₺",
              "value": "500-999",
              "quantity": 3,
              "is_selected": false
            },
            {
              "label": "1000 ₺ - 1999 ₺",
              "value": "1000-1999",
              "quantity": 6,
              "is_selected": false
            },
            {
              "label": "2000 ₺ - 2999 ₺",
              "value": "2000-2999",
              "quantity": 5,
              "is_selected": false
            },
            {
              "label": "3000 ₺ - 3999 ₺",
              "value": "3000-3999",
              "quantity": 8,
              "is_selected": false
            },
            {
              "label": "4000 ₺ - 4999 ₺",
              "value": "4000-4999",
              "quantity": 1,
              "is_selected": false
            },
            {
              "label": "5000 ₺ - 9999 ₺",
              "value": "5000-9999",
              "quantity": 14,
              "is_selected": false
            },
            {
              "label": "10000 ₺ ÜZERİ ÜRÜNLER",
              "value": "10000",
              "quantity": 5,
              "is_selected": false
            }
          ],
          "widget_type": "multiselect",
          "key": "price",
          "order": -1
        }
      }
    ],
    "sorters": [
      {
        "label": "Önerilen",
        "value": "default",
        "is_selected": true
      },
      {
        "label": "Artan Fiyat",
        "value": "price",
        "is_selected": false
      },
      {
        "label": "Azalan Fiyat",
        "value": "-price",
        "is_selected": false
      },
      {
        "label": "Yeni Gelenler",
        "value": "newcomers",
        "is_selected": false
      },
      {
        "label": "Çok Satanlar",
        "value": "topseller",
        "is_selected": false
      },
      {
        "label": "İndirim Oranı",
        "value": "azalan-indirim-orani",
        "is_selected": false
      }
    ],
    "search_text": null,
    "products": [
      {
        "pk": 590,
        "name": "Turbo Pro FV5695 Kireç Avcısı Buharlı Ütü",
        "sku": "1830007642",
        "base_code": "FV56",
        "attributes": {
          "integration_en": "0",
          "integration_editorial_description_title": "Turbo Pro FV5695 Kireç Avcısı <a href=\"https://www.tefal.com.tr/elektrikli-ev-aletleri/buharli-utuler/\">Buharlı Ütü</a> : Gözle görünür şekilde daha güçlü buhar çıkışı!",
          "erp_p12_product_status": "40",
          "erp_attributeId_22": "Siyah",
          "erp_pi2_product_type": "A",
          "erp_alt_aile_kodu": "L01001",
          "yukseklik": "152 mm",
          "integration_attributeId_693": "50 gr/dk",
          "integration_picto": "2--Turbo buhar ile etkili buhar çıkışı--Turbo buharın kumaşa güçlü nüfuz edişi sayesinde en inatçı kırışıklıkları bile zahmetsizce açabilirsiniz.|11--270 g turbo buhar miktarı--270 g turbo buhar miktarı sayesinde en inatçı kırışıklıkları bile zahmetsizce açabilir, dilerseniz dikey ütüleme sayesinde giysilerinizi havalandırabilirsiniz.|12--Durilium Airglide Autoclean Taban--Kayganlıkta 1 numara olan Durilium Airglide Taban, hızlı ve zahmetsiz ütülemede size yardımcı olur. Autoclean özelliği tabanınızın zaman içerisinde lekelenmesi önler, kayganlık performansı ilk günkü gibi devam eder.|13--Eko modu--Eko modu sayesinde maksimum kullanıma göre %20 enerji tasarrufu yapabilirsiniz.|14--Onarılabilir Ürün--<ul> <li> Kolay onarılacak şekilde tasarlanmıştır </li> <li> 10Y+ için düşük bedelli, hızlı yedek parça teslimi </li> <li> Dünya genelinde 6500 onarım merkezi </li> </ul>|15--Otomatik kapanma--<p>Yanlışlıkla gözetimsiz bırakıldığında ütü otomatik olarak kapanır. Dikey konumda bırakıldıysa 8 dakika sonra kapanır. Tabanı yere temas halinde ya da yan durumda bırakılmışsa yalnızca 30 saniyede kapanır.</p>|16--Özel çıkarılabilir kireç avcısı--Tefal'in özel çıkarılabilir kireç avcısı sayesinde kireç parçacıklarını toplar, kolay temizlenir ve uzun ömürlü buhar performansı sağlar|17--Su damlatmaz--Su damlatmama özelliği sayesinde ütülenen kumaşların lekelenmesini önler|18--Sürekli buharı sayesinde zahmetsiz ütüleme--50 g/dk sürekli buharı sayesinde tüm kırışıklıkları zahmetsizce açın.",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "154.68",
          "erp_range_name": "TURBO PRO",
          "integration_barkod": "3121040076422",
          "erp_pallet_dimension_height": "1152",
          "erp_ean_st": "3121040076422",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "L01",
          "erp_products_perparcel": "6",
          "erp_pallet_weight_unit": "KG",
          "integration_products_percontainer_c20": "0",
          "integration_parcel_weight_unit": "KG",
          "erp_grup1kodu": "KM",
          "erp_pallet_volume": "783.924",
          "integration_long_ref": "FV5695E1",
          "integration_yukselik": "0",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/BAA0E154-F27A-41D1-B01684B874E515D3/?w=147&h=147&crop=true__Hızlı ısınma için 3000 Watt",
          "erp_layers_perpallet": "3",
          "compare_product_slug": "buharli-utuler-compare",
          "integration_etailling_description_detail": "<p>&bull; Hızlı ısınma ve y&uuml;ksek buhar g&uuml;c&uuml; i&ccedil;in 3000W &bull; 270g/dk şok buhar ve 50g/dk s&uuml;rekli buhar sayesinde verimli &uuml;t&uuml;leme &bull; Durilium Airglide Autoclean taban kullanım sonrası temiz kalır, maksimum buhar dağılımını garanti eder &bull; Ekstra g&uuml;venlik i&ccedil;in akıllı otomatik kapanma &bull; Otomatik buhar &ouml;zelliği kumaş tipine g&ouml;re ayarlanır, zahmetsiz &uuml;t&uuml;leme sağlar &bull; 300ml su tankı ile tek seferde daha uzun s&uuml;reli &uuml;t&uuml;leme imkanı tanır &bull; Eko modu ile %20 ye varan enerji tasarrufu&nbsp; &bull; Fransa&#39;da &uuml;retilmiştir &nbsp; &nbsp;</p>",
          "integration_layers_perpallet": "3",
          "erp_barkod": "3121040076422",
          "erp_range": "FV56",
          "product_line": "LINEN CARE",
          "agirlik": "1,54",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/2E0E73AE-0F16-4ABB-8C1C14E2E41133A9/?w=147&h=147&crop=true__Özel çıkarılabilir kireç avcısı",
          "integration_ean_kar": "13121040076429",
          "integration_spare_parts_avaibility": "False",
          "integration_garanti_durumu": "Var, Başlamamış",
          "integration_parcel_volume": "65.327",
          "integration_serisonuflg": "false",
          "erp_en": "0",
          "integration_grup2kodu": "M",
          "integration_alt_aile_kodu": "L01001",
          "integration_brand_system": "G",
          "erp_agirlik": "1450",
          "ozellik6_aciklama": "Eko modu sayesinde maksimum kullanıma göre %20 enerji tasarrufu yapabilirsiniz.",
          "integration_product_description": "TEFAL TURBO PRO ANTI-CALC FV5695 3000 WATT BUHARLI EL ÜTÜSÜ",
          "integration_grup1kodu": "KM",
          "integration_products_percontainer_c40": "0",
          "integration_attributeId_730": "2 m",
          "integration_product_line_name": "LINEN CARE",
          "integration_defoluflg": "false",
          "erp_parcel_weight_unit": "KG",
          "erp_parcel_unit": "MM",
          "erp_sirketkodu": "2006_GSEB",
          "erp_pallet_unit": "MM",
          "erp_parcel_dimension_width": "330",
          "integration_editorial_description_detail": "Hızlı ısınma ve yüksek buhar gücü için 3000W. 270g/dk şok buhar ve 50g/dk sürekli buhar sayesinde verimli ütüleme. Durilium Airglide Autoclean taban kullanım sonrası temiz kalır, maksimum buhar dağılımını garanti eder. Ekstra güvenlik için akıllı otomatik kapanma. Otomatik buhar özelliği kumaş tipine göre ayarlanır, zahmetsiz ütüleme sağlar. 300ml su tankı ile tek seferde daha uzun süreli ütüleme imkanı tanır. Eko modu ile %20 ye varan enerji tasarrufu. Fransa'da üretilmiştir.",
          "ozellik1_aciklama": "Turbo buharın kumaşa güçlü nüfuz edişi sayesinde en inatçı kırışıklıkları bile zahmetsizce açabilirsiniz.",
          "ozellik5_aciklama": "Tefal'in özel çıkarılabilir kireç avcısı sayesinde kireç parçacıklarını toplar, kolay temizlenir ve uzun ömürlü buhar performansı sağlar",
          "marketplace_product_name": "Tefal FV5695 Turbo Pro Kireç Avcısı Anti-Calc 3000 Watt Buharlı Ütü - 1830007642",
          "erp_editorial_description_title": "G&ouml;zle g&ouml;r&uuml;n&uuml;r şekilde daha g&uuml;&ccedil;l&uuml; buhar &ccedil;ıkışı!",
          "erp_products_perplayer": "24",
          "erp_product_description": "TEFAL TURBO PRO ANTI-CALC FV5695 3000 WATT BUHARLI EL ÜTÜSÜ",
          "erp_picto": "2--Turbo buhar ile etkili buhar çıkışı--Turbo buharın kumaşa güçlü nüfuz edişi sayesinde en inatçı kırışıklıkları bile zahmetsizce açabilirsiniz.|11--270 g turbo buhar miktarı--270 g turbo buhar miktarı sayesinde en inatçı kırışıklıkları bile zahmetsizce açabilir, dilerseniz dikey ütüleme sayesinde giysilerinizi havalandırabilirsiniz.|12--Durilium Airglide Autoclean Taban--Kayganlıkta 1 numara olan Durilium Airglide Taban, hızlı ve zahmetsiz ütülemede size yardımcı olur. Autoclean özelliği tabanınızın zaman içerisinde lekelenmesi önler, kayganlık performansı ilk günkü gibi devam eder.|13--Eko modu--Eko modu sayesinde maksimum kullanıma göre %20 enerji tasarrufu yapabilirsiniz.|14--Onarılabilir Ürün--<ul> <li> Kolay onarılacak şekilde tasarlanmıştır </li> <li> 10Y+ için düşük bedelli, hızlı yedek parça teslimi </li> <li> Dünya genelinde 6500 onarım merkezi </li> </ul>|15--Otomatik kapanma--<p>Yanlışlıkla gözetimsiz bırakıldığında ütü otomatik olarak kapanır. Dikey konumda bırakıldıysa 8 dakika sonra kapanır. Tabanı yere temas halinde ya da yan durumda bırakılmışsa yalnızca 30 saniyede kapanır.</p>|16--Özel çıkarılabilir kireç avcısı--Tefal'in özel çıkarılabilir kireç avcısı sayesinde kireç parçacıklarını toplar, kolay temizlenir ve uzun ömürlü buhar performansı sağlar|17--Su damlatmaz--Su damlatmama özelliği sayesinde ütülenen kumaşların lekelenmesini önler|18--Sürekli buharı sayesinde zahmetsiz ütüleme--50 g/dk sürekli buharı sayesinde tüm kırışıklıkları zahmetsizce açın.",
          "erp_brand_system": "G",
          "garanti_suresi": "2 Yıl",
          "ozellik3_aciklama": "50 gr/dk sürekli buharı sayesinde tüm kırışıklıkları zahmetsizce açın.",
          "integration_pallet_dimension_height": "1152",
          "erp_parcel_weight": "11.14",
          "integration_pallet_volume_unit": "CDM",
          "erp_parcel_volume_unit": "CDM",
          "integration_parcel_weight": "11.14",
          "ozelllik1_aciklama": "Turbo buharın kumaşa güçlü nüfuz edişi sayesinde en inatçı kırışıklıkları bile zahmetsizce açabilirsiniz.",
          "erp_model": "FV569",
          "iade_kategori": "yurtici",
          "integration_range": "FV56",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/AC76CD9A-5D59-4AE0-AC44D97D175B76ED/?w=147&h=147&crop=true__Eko modu",
          "turu": "Buharlı",
          "derinlik": "151 mm",
          "erp_parcel_volume": "65.327",
          "integration_pallet_dimension_depth": "1200",
          "erp_pi2_description": "STEAM IRONS TURBO PRO",
          "integration_attributeId_227": "Var",
          "erp_ean_kar": "13121040076429",
          "integration_country_oforigin": "FR",
          "integration_range_name": "TURBO PRO",
          "integration_is_seo_automatic": "true",
          "ozellik4_aciklama": "Kayganlıkta 1 numara olan Durilium Airglide Taban, hızlı ve zahmetsiz ütülemede size yardımcı olur. Autoclean özelliği tabanınızın zaman içerisinde lekelenmesi önler, kayganlık performansı ilk günkü gibi devam eder.",
          "erp_boy": "0",
          "erp_key_claim_disclaimer": "FV49-FV55 serileri ile kıyaslandığında",
          "downloadable_image_title": "https://tefal.akinoncdn.com/cms/2021/11/03/37010795-6682-49b2-ba70-3af9147df0ba.pdf",
          "integration_attributeId_24": "Durilium Airglide Autoclean",
          "integration_attributeId_22": "Siyah-Yeşil",
          "integration_parcel_unit": "MM",
          "integration_page_description": "Turbo Pro AntiCalc FV5695 3000W Buharlı El Ütüsü",
          "erp_family2": "L01",
          "erp_page_title": "Turbo Pro AntiCalc FV5695 3000W Buharlı El Ütüsü",
          "integration_short_ref": "FV5695",
          "integration_pallet_weight": "154.68",
          "erp_product_line": "C",
          "integration_family1": "001",
          "integration_family2": "L01",
          "erp_product_line_name": "LINEN CARE",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_pallet_unit": "MM",
          "purchase_limit_per_basket": "5",
          "erp_family1": "001",
          "gg_new_catalog_id": "805469",
          "integration_detaylar": "{u'eComUrunDetay': [{u'TIPI': u'1', u'HTML_METIN': u'Turbo buhar\\u0131n kuma\\u015fa g\\xfc\\xe7l\\xfc n\\xfcfuz edi\\u015fi sayesinde en inat\\xe7\\u0131 k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 bile zahmetsizce a\\xe7abilirsiniz.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_2_54sqgja3.25g.jpg', u'BASLIK': u'Turbo buhar ile etkili buhar \\xe7\\u0131k\\u0131\\u015f\\u0131', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'101672'}, {u'TIPI': u'1', u'HTML_METIN': u'270 g turbo buhar miktar\\u0131 sayesinde en inat\\xe7\\u0131 k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 bile zahmetsizce a\\xe7abilir, dilerseniz dikey \\xfct\\xfcleme sayesinde giysilerinizi havaland\\u0131rabilirsiniz.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_11_3avy0f0z.ytt.jpg', u'BASLIK': u'270 g turbo buhar miktar\\u0131', u'SIRANO': u'11.000000', u'GECERLI': u'true', u'DETAY_ID': u'101681'}, {u'TIPI': u'1', u'HTML_METIN': u'Kayganl\\u0131kta 1 numara olan Durilium Airglide Taban, h\\u0131zl\\u0131 ve zahmetsiz \\xfct\\xfclemede size yard\\u0131mc\\u0131 olur. Autoclean \\xf6zelli\\u011fi taban\\u0131n\\u0131z\\u0131n zaman i\\xe7erisinde lekelenmesi \\xf6nler, kayganl\\u0131k performans\\u0131 ilk g\\xfcnk\\xfc gibi devam eder.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_12_pm5gwyj0.iau.jpg', u'BASLIK': u'Durilium Airglide Autoclean Taban', u'SIRANO': u'12.000000', u'GECERLI': u'true', u'DETAY_ID': u'101682'}, {u'TIPI': u'1', u'HTML_METIN': u'Eko modu sayesinde maksimum kullan\\u0131ma g\\xf6re %20 enerji tasarrufu yapabilirsiniz.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_13_sbu1yq1k.hfj.jpg', u'BASLIK': u'Eko modu', u'SIRANO': u'13.000000', u'GECERLI': u'true', u'DETAY_ID': u'101683'}, {u'TIPI': u'1', u'HTML_METIN': u'<ul> <li> Kolay onar\\u0131lacak \\u015fekilde tasarlanm\\u0131\\u015ft\\u0131r </li> <li> 10Y+ i\\xe7in d\\xfc\\u015f\\xfck bedelli, h\\u0131zl\\u0131 yedek par\\xe7a teslimi </li> <li> D\\xfcnya genelinde 6500 onar\\u0131m merkezi </li> </ul>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_14_j1mgmg3g.1fk.jpg', u'BASLIK': u'Onar\\u0131labilir \\xdcr\\xfcn', u'SIRANO': u'14.000000', u'GECERLI': u'true', u'DETAY_ID': u'101684'}, {u'TIPI': u'1', u'HTML_METIN': u'<p>Yanl\\u0131\\u015fl\\u0131kla g\\xf6zetimsiz b\\u0131rak\\u0131ld\\u0131\\u011f\\u0131nda \\xfct\\xfc otomatik olarak kapan\\u0131r. Dikey konumda b\\u0131rak\\u0131ld\\u0131ysa 8 dakika sonra kapan\\u0131r. Taban\\u0131 yere temas halinde ya da yan durumda b\\u0131rak\\u0131lm\\u0131\\u015fsa yaln\\u0131zca 30 saniyede kapan\\u0131r.</p>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_15_hi2gobvd.see.jpg', u'BASLIK': u'Otomatik kapanma', u'SIRANO': u'15.000000', u'GECERLI': u'true', u'DETAY_ID': u'101685'}, {u'TIPI': u'1', u'HTML_METIN': u\"Tefal'in \\xf6zel \\xe7\\u0131kar\\u0131labilir kire\\xe7 avc\\u0131s\\u0131 sayesinde kire\\xe7 par\\xe7ac\\u0131klar\\u0131n\\u0131 toplar, kolay temizlenir ve uzun \\xf6m\\xfcrl\\xfc buhar performans\\u0131 sa\\u011flar\", u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_16_zpzxzl2e.vim.jpg', u'BASLIK': u'\\xd6zel \\xe7\\u0131kar\\u0131labilir kire\\xe7 avc\\u0131s\\u0131', u'SIRANO': u'16.000000', u'GECERLI': u'true', u'DETAY_ID': u'101686'}, {u'TIPI': u'1', u'HTML_METIN': u'Su damlatmama \\xf6zelli\\u011fi sayesinde \\xfct\\xfclenen kuma\\u015flar\\u0131n lekelenmesini \\xf6nler', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_17_jk11h3iy.4hz.jpg', u'BASLIK': u'Su damlatmaz', u'SIRANO': u'17.000000', u'GECERLI': u'true', u'DETAY_ID': u'101687'}, {u'TIPI': u'1', u'HTML_METIN': u'50 g/dk s\\xfcrekli buhar\\u0131 sayesinde t\\xfcm k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 zahmetsizce a\\xe7\\u0131n.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_18_vonubsi5.e0a.jpg', u'BASLIK': u'S\\xfcrekli buhar\\u0131 sayesinde zahmetsiz \\xfct\\xfcleme', u'SIRANO': u'18.000000', u'GECERLI': u'true', u'DETAY_ID': u'101688'}]}",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/FD1FF6A6-5A54-464B-B0610967F47EF2CB/?w=147&h=147&crop=true__Hızlı ısınma için 3000 Watt",
          "integration_p12_product_status": "40",
          "erp_pallet_dimension_width": "800",
          "integration_attributeId_51": "300 ml",
          "integration_products_perplayer": "24",
          "integration_ean_st": "3121040076422",
          "erp_products_percontainer_hq4": "0",
          "integration_aile_kodu": "L01",
          "ozellik2_aciklama": "Hızlı ısınma ve güçlü performans",
          "erp_detaylar": "{u'eComUrunDetay': [{u'TIPI': u'1', u'HTML_METIN': u'Turbo buhar\\u0131n kuma\\u015fa g\\xfc\\xe7l\\xfc n\\xfcfuz edi\\u015fi sayesinde en inat\\xe7\\u0131 k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 bile zahmetsizce a\\xe7abilirsiniz.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_2_54sqgja3.25g.jpg', u'BASLIK': u'Turbo buhar ile etkili buhar \\xe7\\u0131k\\u0131\\u015f\\u0131', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'101672'}, {u'TIPI': u'1', u'HTML_METIN': u'270 g turbo buhar miktar\\u0131 sayesinde en inat\\xe7\\u0131 k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 bile zahmetsizce a\\xe7abilir, dilerseniz dikey \\xfct\\xfcleme sayesinde giysilerinizi havaland\\u0131rabilirsiniz.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_11_3avy0f0z.ytt.jpg', u'BASLIK': u'270 g turbo buhar miktar\\u0131', u'SIRANO': u'11.000000', u'GECERLI': u'true', u'DETAY_ID': u'101681'}, {u'TIPI': u'1', u'HTML_METIN': u'Kayganl\\u0131kta 1 numara olan Durilium Airglide Taban, h\\u0131zl\\u0131 ve zahmetsiz \\xfct\\xfclemede size yard\\u0131mc\\u0131 olur. Autoclean \\xf6zelli\\u011fi taban\\u0131n\\u0131z\\u0131n zaman i\\xe7erisinde lekelenmesi \\xf6nler, kayganl\\u0131k performans\\u0131 ilk g\\xfcnk\\xfc gibi devam eder.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_12_pm5gwyj0.iau.jpg', u'BASLIK': u'Durilium Airglide Autoclean Taban', u'SIRANO': u'12.000000', u'GECERLI': u'true', u'DETAY_ID': u'101682'}, {u'TIPI': u'1', u'HTML_METIN': u'Eko modu sayesinde maksimum kullan\\u0131ma g\\xf6re %20 enerji tasarrufu yapabilirsiniz.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_13_sbu1yq1k.hfj.jpg', u'BASLIK': u'Eko modu', u'SIRANO': u'13.000000', u'GECERLI': u'true', u'DETAY_ID': u'101683'}, {u'TIPI': u'1', u'HTML_METIN': u'<ul> <li> Kolay onar\\u0131lacak \\u015fekilde tasarlanm\\u0131\\u015ft\\u0131r </li> <li> 10Y+ i\\xe7in d\\xfc\\u015f\\xfck bedelli, h\\u0131zl\\u0131 yedek par\\xe7a teslimi </li> <li> D\\xfcnya genelinde 6500 onar\\u0131m merkezi </li> </ul>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_14_j1mgmg3g.1fk.jpg', u'BASLIK': u'Onar\\u0131labilir \\xdcr\\xfcn', u'SIRANO': u'14.000000', u'GECERLI': u'true', u'DETAY_ID': u'101684'}, {u'TIPI': u'1', u'HTML_METIN': u'<p>Yanl\\u0131\\u015fl\\u0131kla g\\xf6zetimsiz b\\u0131rak\\u0131ld\\u0131\\u011f\\u0131nda \\xfct\\xfc otomatik olarak kapan\\u0131r. Dikey konumda b\\u0131rak\\u0131ld\\u0131ysa 8 dakika sonra kapan\\u0131r. Taban\\u0131 yere temas halinde ya da yan durumda b\\u0131rak\\u0131lm\\u0131\\u015fsa yaln\\u0131zca 30 saniyede kapan\\u0131r.</p>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_15_hi2gobvd.see.jpg', u'BASLIK': u'Otomatik kapanma', u'SIRANO': u'15.000000', u'GECERLI': u'true', u'DETAY_ID': u'101685'}, {u'TIPI': u'1', u'HTML_METIN': u\"Tefal'in \\xf6zel \\xe7\\u0131kar\\u0131labilir kire\\xe7 avc\\u0131s\\u0131 sayesinde kire\\xe7 par\\xe7ac\\u0131klar\\u0131n\\u0131 toplar, kolay temizlenir ve uzun \\xf6m\\xfcrl\\xfc buhar performans\\u0131 sa\\u011flar\", u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_16_zpzxzl2e.vim.jpg', u'BASLIK': u'\\xd6zel \\xe7\\u0131kar\\u0131labilir kire\\xe7 avc\\u0131s\\u0131', u'SIRANO': u'16.000000', u'GECERLI': u'true', u'DETAY_ID': u'101686'}, {u'TIPI': u'1', u'HTML_METIN': u'Su damlatmama \\xf6zelli\\u011fi sayesinde \\xfct\\xfclenen kuma\\u015flar\\u0131n lekelenmesini \\xf6nler', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_17_jk11h3iy.4hz.jpg', u'BASLIK': u'Su damlatmaz', u'SIRANO': u'17.000000', u'GECERLI': u'true', u'DETAY_ID': u'101687'}, {u'TIPI': u'1', u'HTML_METIN': u'50 g/dk s\\xfcrekli buhar\\u0131 sayesinde t\\xfcm k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 zahmetsizce a\\xe7\\u0131n.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2601_1830007642_18_vonubsi5.e0a.jpg', u'BASLIK': u'S\\xfcrekli buhar\\u0131 sayesinde zahmetsiz \\xfct\\xfcleme', u'SIRANO': u'18.000000', u'GECERLI': u'true', u'DETAY_ID': u'101688'}]}",
          "integration_model": "FV569",
          "erp_yukselik": "0",
          "erp_products_percontainer_c40": "0",
          "integration_gecerli": "true",
          "integration_parcel_volume_unit": "CDM",
          "integration_page_title": "Turbo Pro AntiCalc FV5695 3000W Buharlı El Ütüsü",
          "integration_product_line": "C",
          "erp_attributeId_693": "50 g/dk - 270 g/dk",
          "integration_products_perparcel": "6",
          "erp_editorial_description_detail": "<p>&bull; Hızlı ısınma ve y&uuml;ksek buhar g&uuml;c&uuml; i&ccedil;in 3000W &bull; 270g/dk şok buhar ve 50g/dk s&uuml;rekli buhar sayesinde verimli &uuml;t&uuml;leme &bull; Durilium Airglide Autoclean taban kullanım sonrası temiz kalır, maksimum buhar dağılımını garanti eder &bull; Ekstra g&uuml;venlik i&ccedil;in akıllı otomatik kapanma &bull; Otomatik buhar &ouml;zelliği kumaş tipine g&ouml;re ayarlanır, zahmetsiz &uuml;t&uuml;leme sağlar &bull; 300ml su tankı ile tek seferde daha uzun s&uuml;reli &uuml;t&uuml;leme imkanı tanır &bull; Eko modu ile %20 ye varan enerji tasarrufu&nbsp; &bull; Fransa&#39;da &uuml;retilmiştir &nbsp; &nbsp;</p>",
          "erp_is_seo_automatic": "true",
          "genislik": "310 mm",
          "integration_attributeId_49": "270 gr/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/9F492A24-1F8C-424D-A6F5E05CC3234046/?w=147&h=147&crop=true__Turbo buhar ile etkili buhar çıkışı",
          "integration_sirketkodu": "2006_GSEB",
          "erp_page_description": "Turbo Pro AntiCalc FV5695 3000W Buharlı El Ütüsü",
          "erp_country_oforigin": "FR",
          "integration_sub_family": "001001",
          "erp_spare_parts_avaibility": "False",
          "integration_parcel_dimension_depth": "505",
          "erp_sub_family": "001001",
          "erp_long_ref": "FV5695E1",
          "integration_agirlik": "1450",
          "erp_gecerliflg": "true",
          "integration_pi2_product_type": "A",
          "erp_gecerli": "true",
          "integration_pi2_description": "STEAM IRONS TURBO PRO",
          "integration_pallet_dimension_width": "800",
          "integration_key_claim_disclaimer": "FV49-FV55 serileri ile kıyaslandığında",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/4C4E8A97-C2B8-4965-908ECB3A0925F58C/?w=147&h=147&crop=true__Durilium Airglide Autoclean Taban",
          "integration_parcel_dimension_height": "392",
          "integration_boy": "0",
          "short_description": "• Kireç toplama haznesi<br> \n• Hızlı ısınma ve yüksek buhar gücü<br> \n• Durilium Airglide Autoclean taban teknolojisi<br>  \n• Ekstra güvenlik için akıllı otomatik kapanma <br> \n• Otomatik buhar özelliği ile zahmetsiz ütüleme <br> \n• Uzun süreli ütüleme imkanı tanır.<br>  \n• Eko modu ile enerji tasarrufu<br>",
          "erp_parcel_dimension_height": "392",
          "erp_short_ref": "FV5695",
          "integration_attributeId_50": "Var",
          "integration_marka": "01",
          "integration_attributeId_287": "3000 watt",
          "integration_products_percontainer_hq4": "0",
          "integration_pallet_weight_unit": "KG",
          "erp_products_percontainer_c20": "0",
          "integration_durum": "Sıfır",
          "erp_marka": "01",
          "erp_parcel_dimension_depth": "505",
          "erp_pallet_dimension_depth": "1200",
          "erp_etailling_description_title": "TEFAL TURBO PRO ANTI-CALC FV5695 3000 WATT BUHARLI EL &Uuml;T&Uuml;S&Uuml;",
          "erp_pallet_volume_unit": "CDM",
          "erp_etailling_description_detail": "<p>&bull; Hızlı ısınma ve y&uuml;ksek buhar g&uuml;c&uuml; i&ccedil;in 3000W &bull; 270g/dk şok buhar ve 50g/dk s&uuml;rekli buhar sayesinde verimli &uuml;t&uuml;leme &bull; Durilium Airglide Autoclean taban kullanım sonrası temiz kalır, maksimum buhar dağılımını garanti eder &bull; Ekstra g&uuml;venlik i&ccedil;in akıllı otomatik kapanma &bull; Otomatik buhar &ouml;zelliği kumaş tipine g&ouml;re ayarlanır, zahmetsiz &uuml;t&uuml;leme sağlar &bull; 300ml su tankı ile tek seferde daha uzun s&uuml;reli &uuml;t&uuml;leme imkanı tanır &bull; Eko modu ile %20 ye varan enerji tasarrufu&nbsp; &bull; Fransa&#39;da &uuml;retilmiştir &nbsp; &nbsp;</p>",
          "integration_parcel_dimension_width": "330",
          "damlama_onizleme": "Var",
          "integration_etailling_description_title": "TEFAL TURBO PRO ANTI-CALC FV5695 3000 WATT BUHARLI EL &Uuml;T&Uuml;S&Uuml;",
          "integration_pallet_volume": "783.924",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 8,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "270 gr/dk",
            "data_type": "dropdown",
            "label": "270 gr/dk"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_sub_family": {
            "value": "001001",
            "data_type": "dropdown",
            "label": "STEAM IRON"
          },
          "erp_attributeId_22": {
            "value": "Siyah",
            "label": "Siyah"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_730": {
            "value": "2 m",
            "data_type": "dropdown",
            "label": "2 m"
          },
          "integration_attributeId_693": {
            "value": "50 gr/dk",
            "data_type": "dropdown",
            "label": "50 gr/dk"
          },
          "erp_sub_family": {
            "value": "001001",
            "label": "STEAM IRON"
          },
          "integration_attributeId_24": {
            "value": "Durilium Airglide Autoclean",
            "data_type": "dropdown",
            "label": "Durilium Airglide Autoclean"
          },
          "integration_attributeId_22": {
            "value": "Siyah-Yeşil",
            "data_type": "dropdown",
            "label": "Siyah-Yeşil"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_51": {
            "value": "300 ml",
            "data_type": "dropdown",
            "label": "300 ml"
          },
          "integration_family1": {
            "value": "001",
            "data_type": "dropdown",
            "label": "STEAM IRONS"
          },
          "integration_family2": {
            "value": "L01",
            "data_type": "dropdown",
            "label": "11 - STEAM IRONS"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_family1": {
            "value": "001",
            "label": "STEAM IRONS"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "erp_family2": {
            "value": "L01",
            "label": "11 - STEAM IRONS"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_287": {
            "value": "3000 watt",
            "data_type": "dropdown",
            "label": "3000 watt"
          },
          "product_line": {
            "value": "LINEN CARE",
            "data_type": "dropdown",
            "label": "LINEN CARE"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_attributeId_693": {
            "value": "50 g/dk - 270 g/dk",
            "data_type": "dropdown",
            "label": "50 g/dk - 270 g/dk"
          },
          "erp_marka": {
            "value": "01",
            "label": "TEFAL"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 9686,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/10/11/1282/964db87b-2d71-4ecf-8527-bb9a1ae50fc1.jpg",
            "order": 1,
            "created_date": "2022-10-11T09:05:32.023924Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9687,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/10/11/1282/a1ee199a-29e7-4942-b473-c847988878b4.jpg",
            "order": 2,
            "created_date": "2022-10-11T09:05:32.233516Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9688,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/10/11/1282/f64ff379-4659-47c4-8f01-ca312aa6dc17.jpg",
            "order": 3,
            "created_date": "2022-10-11T09:05:32.287389Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9689,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/10/11/1282/eb63d45f-2dc1-4e2a-9a3f-5c9d99f7427f.jpg",
            "order": 4,
            "created_date": "2022-10-11T09:05:32.336914Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9690,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/10/11/1282/e322b446-f5a5-4e6b-89bf-e8c351a3f4fb.jpg",
            "order": 5,
            "created_date": "2022-10-11T09:05:32.384954Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9691,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/10/11/1282/a673d58a-4acf-4958-b068-e41c0aa164d7.jpg",
            "order": 6,
            "created_date": "2022-10-11T09:05:32.448852Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9692,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/10/11/1282/a12004da-1de7-43bf-bf7b-489b2de87ca3.jpg",
            "order": 7,
            "created_date": "2022-10-11T09:05:32.500765Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "2149.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "2149.90",
        "unit_type": "qty",
        "absolute_url": "/turbo-pro-fv5695-kirec-avcisi-buharli-utu-1830007642/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": false,
        "stock": 68,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 2679,
        "name": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürge",
        "sku": "2211400976",
        "base_code": "TY698",
        "attributes": {
          "erp_alt_aile_kodu": "E04162",
          "integration_pallet_weight": "0",
          "integration_attributeId_67": "Motorlu Fırça",
          "integration_editorial_description_title": "Tefal X-Pert Kablosuz Elektrik Süpürgesi",
          "teslimat_sureleri": "2",
          "ozellik4_aciklama": "Zeminden tavana kadar evinizin her yerine ulaşmak için tasarlanmış bu ürünle hareket verimliliğini keşfedin.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/A2F30CD5-A911-45A3-9EE76E881BE8B41F/?w=147&h=147&crop=false__22V Lityum Pil",
          "ozellik5_aciklama": "Zahmetsiz ve hızlı temizlik için sadece 2,2 kg.",
          "sss4_cevap": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürgenin motorlu fırçası tek bir seferde tüm tozları toplayıp, temiz ve daha keyifli bir ev için  tozları yok etmenize yardımcı olur.",
          "integration_attributeId_22": "Gri",
          "sss4_soru": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürgenin motorlu fırçası ne işe yarar?",
          "erp_pallet_weight": "0",
          "sss6_cevap": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürge yıkanabilir yüksek verimli filtre sistemini kullanır. Ayrılabilir filtresi, süpürgenizi temizlemeyi kolaylaştırır.",
          "integration_barkod": "3221616009158",
          "parca_sayisi": "3",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "toz_kapasitesi": "0,5 L",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "E04",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "sss5_soru": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürgenin toz haznesinin kapasitesi kaç litredir?",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "ozellik8_aciklama": "Her türlü zeminde etkin kullanım sağlayan motorlu fırça",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "E04",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "n11_product_description": "Tefal X-Pert Kablosuz Elektrik Süpürgesi",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/87E716D9-FEE3-4A06-B5FA5351000BA28C/?w=147&h=147&crop=false__Tüm Zeminler İçin Tek Başlık!",
          "ozellik2_aciklama": "Tek bir seferde tüm tozları toplayan, temiz ve daha keyifli bir ev için  tozları yok eden motorlu bir fırça ile hızlı temizlemeye sahip olun.",
          "erp_defoluflg": "false",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3221616009158",
          "erp_range": "TY698",
          "product_line": "HOME CLEANING",
          "agirlik": "2,8 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/83CDA102-D3FA-4725-92D4DBF52E990C43/?w=147&h=147&crop=false__Ekstra hafif",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "min_stok": "10",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_attributeId_659": "4 saat",
          "integration_serisonuflg": "false",
          "sss6_soru": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürgenin filtreleme teknolojisi nedir?",
          "integration_grup2kodu": "L",
          "erp_is_seo_automatic": "true",
          "integration_alt_aile_kodu": "E04162",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/945D4636-551C-4F19-9DB5468BD0EDEB3D/?w=147&h=147&crop=false__45 dakika*'ya kadar kablosuz kullanım",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "2800",
          "ozellik6_aciklama": "Gelişmiş hareket kapasitesi, alçak mobilyaların altındaki tozları kolay bir şekilde süpürmenize yardımcı olurken, yüksek kaliteli LED ışıklara sahip motorlu bir başlık ile ulaşılması zor alanlardaki tozu kolayca süpürün.",
          "sss5_cevap": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürgenin toz haznesi 0,50 litredir.",
          "integration_products_percontainer_c40": "0",
          "sss1_cevap": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürgenin çalışma süresi minimum 45 dakikadır.",
          "integration_parcel_dimension_depth": "0",
          "erp_products_percontainer_c40": "0",
          "onarilabilirlik": "Var",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/F8A9D949-3C77-4971-B64B45E54E5EC8F8/?w=147&h=147&crop=false__Hızlı temizlik için motorlu fırça",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "sss2_cevap": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürge Power LED Vision başlığı sayesinde karanlık yerlerdeki tozları açığa çıkararak evinizi daha kolay süpürmenizi sağlar.",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Uzun çalışma süresi ve hızlı sonuçlar ile 3'ü 1 arada çok yönlü performansı  parmaklarınızın ucuna getiren X-Pert 3.60 Kablosuz Elektrikli Süpürge, ev temizliğini zahmetsizce ve son derece hızlı yapmanız için tasarlanmıştır. Yüksek kaliteli lityum bataryası ile 45 dakikalık(Elde kullanımında,min konumunda kullanılırken) güçlü ve uzun süreli performas sağlar. 3'ü 1 arada elektrikli süpürge, her bir köşede temizlik sağlamak için evinizin her yerine kolay erişim sağlar, alçak ve ulaşılması zor alanlarda daha kolay toz takibi için LED ışıklı başlığa sahiptir. İhtiyacınız olan her şey elinizin altında, hızlı ve kolay temizlik için, motorlu fırça, yüksek performanslı DC motor ve siklonik teknoloji kombinasyonu sayesinde performanstan ödün vermeden kullanmanıza yardımcı olur.",
          "sss3_cevap": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürge sadece 2,2 kilogram ağırlığındadır.",
          "ozellik7_aciklama": "Ürünü kolayca saklamak için duvara montaj tabanı",
          "ozellik1_aciklama": "Üstün performans ile istediğiniz zaman ve yerde temizlik yapmanızı sağlayan 45 dakikaya kadar çalışma süresi *.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/D498613D-2EE5-4C20-B51A5BECAC241DE1/?w=147&h=147&crop=false__Zeminden tavana 3'ü 1 arada temizlik",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "erp_grup2kodu": "L",
          "short_description": "•  Tüm zeminlere uygun başlık<br>\n•  Led ışıklı motorlu fırça<br>\n•  Uzun batarya ömrü<br>\n•  Ultra hafif gövde<br>\n•  45 dk'ya kadar* çalışma süresi<br>\n•  4 saatlik hızlı şarj süresi<br>",
          "erp_parcel_dimension_height": "0",
          "n11_product_title": "TEFAL TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürge",
          "integration_marka": "01",
          "integration_attributeId_287": "22 V",
          "ozellik3_aciklama": "NiMH pilden iki kata kadar daha uzun süre ev temizliği için 22V'lık yüksek kaliteli lityum pil kullanılmıştır.",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "genel_bakis_web_gorsel": "https://tefal.akinoncdn.com/cms/2022/04/27/728735ca-aac9-439d-9d6f-8c1472f5f849.jpe",
          "sss1_soru": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürgenin çalışma süresi ne kadardır?",
          "sss3_soru": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürge kaç kilogram ağırlığındadır?",
          "integration_products_perparcel": "0",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/2BCA896D-D50C-4378-84BDD212DDBD9329/?w=147&h=147&crop=false__Kullanım sırasında muhteşem konforun keyfine varın",
          "integration_attributeId_34": "86 dBA",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_hq4": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "TY698",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/3C622516-FE5E-4C5E-A316CFFBF7472D9A/?w=147&h=147&crop=false__Tozları daha iyi görebilmeniz için LED ışıklar",
          "erp_pallet_dimension_depth": "0",
          "integration_attributeId_87": "Yıkanabilir filtre",
          "sss2_soru": "TY6983TR X-Pert 3.60 Kablosuz Dikey Şarjlı Süpürgenin Power LED Vision Başlığı ne işe yarar?",
          "ozellik17_aciklama": "Kolay onarılacak şekilde tasarlanmıştır, 15 yıl boyunca düşük bedelli, hızlı parça teslimi  Dünya genelinde 6500 onarım merkezi.",
          "integration_agirlik": "2800",
          "integration_parcel_dimension_width": "0",
          "integration_attributeId_137": "22 V",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "genel_bakis_mobil_gorsel": "https://tefal.akinoncdn.com/cms/2022/04/27/728735ca-aac9-439d-9d6f-8c1472f5f849.jpe",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_67": {
            "value": "Motorlu Fırça",
            "data_type": "dropdown",
            "label": "Motorlu Fırça"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_87": {
            "value": "Yıkanabilir filtre",
            "data_type": "dropdown",
            "label": "Yıkanabilir filtre"
          },
          "integration_attributeId_287": {
            "value": "22 V",
            "data_type": "dropdown",
            "label": "22 V"
          },
          "product_line": {
            "value": "HOME CLEANING",
            "data_type": "dropdown",
            "label": "HOME CLEANING"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_137": {
            "value": "22 V",
            "data_type": "dropdown",
            "label": "22 V"
          },
          "integration_attributeId_659": {
            "value": "4 saat",
            "data_type": "dropdown",
            "label": "4 saat"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "onarilabilirlik": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_34": {
            "value": "86 dBA",
            "data_type": "dropdown",
            "label": "86 dBA"
          },
          "integration_attributeId_22": {
            "value": "Gri",
            "data_type": "dropdown",
            "label": "Gri"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 6257,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/02/28/4605/c31d43da-012b-4141-acb0-6bc2054584ed.jpg",
            "order": 1,
            "created_date": "2021-06-22T10:21:11.773331Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "5199.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "5199.90",
        "unit_type": "qty",
        "absolute_url": "/ty6983tr-x-pert-3-60-kablosuz-dikey-sarjli-supurge-2211400976/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          {
            "pk": 5346,
            "label": "Sepette Ek %15 İndirim",
            "listing_kwargs": {
              "discounted_total_price": 4419.92,
              "discount": 779.98,
              "quantity": 1
            },
            "kwargs": {
              "show_benefit_products": true
            }
          }
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3400,
        "name": "Puregliss FV8066 Buharlı Ütü",
        "sku": "1830008649",
        "base_code": "FV806",
        "attributes": {
          "erp_alt_aile_kodu": "L01001",
          "integration_pallet_weight": "0",
          "integration_editorial_description_title": "Giysileriniz için günden güne mükemmel sonuçlar ve leke koruması sunan buharlı ütü",
          "ozellik4_aciklama": "Bekleme modu, ütü gözetimsiz bırakıldığında otomatik olarak etkinleştirilir—dikey bırakıldığında 8 dakika sonra ve taban plakasında bırakıldığında 30 saniye sonra",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/0904F8F1-82D3-4900-8BC372E7C9FD40CD/?w=147&h=147&crop=false__Mükemmel Kayma",
          "ozellik5_aciklama": "Hassas ve büyük giysilerin buharlanması, son dakika rötuşları için ideal olan dikey buhar özelliği ile kolaylaştırılır ve takım elbise ve diğer asılı giysilerdeki, hatta perdelerdeki kırışıklıklar için idealdir.",
          "integration_attributeId_693": "50 gr/dk",
          "integration_attributeId_24": "Durilium Airglide",
          "integration_attributeId_22": "Siyah - Maldivler Mavisi",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_barkod": "3121040086490",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "damlama_onleyici": "Var",
          "erp_aile_kodu": "L01",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "ozellik8_aciklama": "https://d32iut21qthkdz.cloudfront.net/images/media/10A632B0-83CA-40B5-924F4F58E25545F4/?w=147&h=147&crop=false__Tamir edilebilir ürün",
          "erp_pallet_volume": "0",
          "integration_attributeId_50": "Var",
          "integration_aile_kodu": "L01",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "compare_product_slug": "buharli-utuler-compare",
          "erp_products_percontainer_hq4": "0",
          "ozellik8_baslik": "Dünya çapında 6200'den fazla onarım merkezi sayesinde, 15 yıl veya daha uzun süredir yedek parçaların düşük maliyetli ve hızlı teslimatı ile kolay onarım için tasarlanmıştır.",
          "ozellik2_aciklama": "Patentli Mikro Kireç Filtresi teknolojimiz, tüm giysilerinizi ve çamaşırlarınızı lekesiz ve lekelerden korurken uzun süreli performans sağlar.",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3121040086490",
          "erp_range": "FV806",
          "agirlik": "1.295 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/019FDDC4-3BEC-45FA-A76C987C210B62A5/?w=147&h=147&crop=false__Kolay dikey buharlama",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "270 ml",
          "integration_grup2kodu": "M",
          "erp_is_seo_automatic": "true",
          "integration_alt_aile_kodu": "L01001",
          "integration_attributeId_49": "280 g/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/45628F01-3E84-4370-A94838827F76A1A5/?w=147&h=147&crop=false__Mükemmel sonuçlar",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "1295",
          "ozellik6_aciklama": "Yüksek sıcaklık ve buhar basıncının kombinasyonu, olağanüstü hijyen ve daha sağlıklı giysi bakımı için ütülenebilir tüm kumaşlardaki bakterileri %99,99'a kadar öldürür.",
          "integration_products_percontainer_c40": "0",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "2 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/11D84993-88D2-48C6-AE2ACF34BA1C9299/?w=147&h=147&crop=false__Leke riski yok",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Puregliss ile giysilerinize hak ettikleri özeni gösterin. Bu yüksek performanslı buharlı ütü, en zorlu kırışıklıkların bile anında üstesinden gelmek için güçlü buharla her tür kumaşta mükemmel ütüleme sonuçları sağlar.​ Mikro Kireç Filtresi sistemi, ütünüzün ürün ömrünü uzatmak için kireç parçacıklarını toplarken lekeleri önlemek için buharı arındırır.​ Fransa'da üretilen ve 15 yıl onarılabilen bir ürünle eşsiz kaliteyi keşfedin.​",
          "ozellik7_aciklama": "Fransa'da tavizsiz işçilik, tasarım ve üretim standartlarında üretilen yüksek performanslı bir ürün.",
          "ozellik1_aciklama": "Mükemmel ütüleme için etkileyici güç: Hızlı ısınma için 3000 W güç, 50 g/dk sürekli buhar çıkışı ve inatçı kırışıklıkların üstesinden kolaylıkla gelmek için 280 g/dk buhar atışı",
          "dikey_buhar": "Var",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/00D9C92A-F9BB-4D66-9E3AFC4DE24C8E4C/?w=147&h=147&crop=false__Güvenli otomatik kapanması",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "short_description": "•\tMÜKEMMEL SONUÇLAR: Hızlı ısınma için 3000 W güç ile donatılmış yüksek performanslı buharlı ütü <br> •\tMikro Kireç Filtresi teknolojisi, lekesiz ütüleme için kireç parçacıklarını toplar <br> •\tGÜVENLİ OTOMATİK KAPANMA: Ütü gözetimsiz bırakıldığında otomatik kapanma özelliği ile gönül rahatlığı sunan bir cihaz <br> •\tÇeşitli giysiler için kolay dikey buharlama işlevi",
          "erp_parcel_dimension_height": "0",
          "erp_pallet_dimension_width": "0",
          "integration_marka": "01",
          "integration_attributeId_287": "3000 watt",
          "ozellik3_aciklama": "Durilium Airglide Autoclean teknolojisi ile hızlı ve zahmetsiz ütüleme: Zaman içinde lekesiz ve kusursuz performans için optimum buhar dağılımı, olağanüstü kayma ve Autoclean katalitik kaplama.",
          "sprey": "Var",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/AC0E638D-9F45-4CA7-87A7CCE6228A7979/?w=147&h=147&crop=false__Fransa'da üretilmiştir",
          "integration_products_percontainer_hq4": "0",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "integration_range": "FV806",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/88BC9611-B6E1-48FF-A7B4DDCF633E6A5D/?w=147&h=147&crop=false__Sterilize edici buhar gücü",
          "erp_pallet_dimension_depth": "0",
          "erp_products_percontainer_c40": "0",
          "integration_agirlik": "1295 gr",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_attributeId_227": "Var",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "280 g/dk",
            "data_type": "dropdown",
            "label": "280 gr/dk"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_287": {
            "value": "3000 watt",
            "data_type": "dropdown",
            "label": "3000 watt"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_51": {
            "value": "270 ml",
            "data_type": "dropdown",
            "label": "270 ml"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_693": {
            "value": "50 gr/dk",
            "data_type": "dropdown",
            "label": "50 gr/dk"
          },
          "integration_attributeId_730": {
            "value": "2 m",
            "data_type": "dropdown",
            "label": "2 m"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_24": {
            "value": "Durilium Airglide",
            "data_type": "dropdown",
            "label": "Durilium Airglide"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_22": {
            "value": "Siyah - Maldivler Mavisi",
            "data_type": "dropdown",
            "label": "Siyah - Maldivler Mavisi"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 9676,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10700/a85eb58e-01f3-44e9-a8c7-da33b48fdbb4.jpg",
            "order": 1,
            "created_date": "2022-09-30T23:04:19.203957Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9680,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10700/c08082d3-880d-4392-8517-78a5b0b8511a.jpg",
            "order": 2,
            "created_date": "2022-09-30T23:04:19.672014Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9677,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10700/2f30a0f8-d4de-4316-a543-10978398d9c6.jpg",
            "order": 3,
            "created_date": "2022-09-30T23:04:19.482261Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9681,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10700/460cf529-2c64-42d3-b8f4-1e4cc6052427.jpg",
            "order": 4,
            "created_date": "2022-09-30T23:04:19.735208Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9678,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10700/4154b6c5-10d6-4682-b2d7-4839a75f0c7b.jpg",
            "order": 5,
            "created_date": "2022-09-30T23:04:19.546265Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9682,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10700/f32c0cd0-5c12-43ab-9456-d8f439483183.jpg",
            "order": 6,
            "created_date": "2022-09-30T23:04:19.800671Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9679,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10700/b4e52927-9e1e-43a0-9a4b-c261e70ed09f.jpg",
            "order": 7,
            "created_date": "2022-09-30T23:04:19.616034Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9683,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10700/8e7c1df3-d76d-493c-919c-ea2395c0cf6a.jpg",
            "order": 8,
            "created_date": "2022-09-30T23:04:19.872913Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "2149.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "2149.90",
        "unit_type": "qty",
        "absolute_url": "/puregliss-fv8066-buharli-utu-1830008649/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          {
            "pk": 5347,
            "label": "Sepette Ek %20 İndirim",
            "listing_kwargs": {
              "discounted_total_price": 1719.92,
              "discount": 429.98,
              "quantity": 1
            },
            "kwargs": {
              "show_benefit_products": true
            }
          }
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3604,
        "name": "Express Steam Max FV2868 Buharlı Ütü",
        "sku": "4300007578",
        "base_code": "FV28",
        "attributes": {
          "erp_alt_aile_kodu": "L01001",
          "integration_pallet_weight": "0",
          "erp_products_percontainer_c40": "0",
          "integration_editorial_description_title": "Express Steam : %20 daha fazla buhar",
          "compare_product_slug": "buharli-utuler-compare",
          "integration_garanti_durumu": "Var, Başlamamış",
          "ozellik5_aciklama": "2500 Watt gücü ile hızlı ısınma sağlar ve ihtiyaç duyduğunuz anda kusursuz sonuçlar sunar.",
          "integration_layers_perpallet": "0",
          "integration_attributeId_693": "45 gr/dk",
          "integration_attributeId_24": "Seramik",
          "marketplace_product_name": "Express Steam Max FV2868 Buharlı Ütü",
          "erp_pallet_weight": "0",
          "integration_page_description": "Express Steam Max FV2868",
          "integration_barkod": "6224008208518",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "damlama_onleyici": "Var",
          "erp_aile_kodu": "L01",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "erp_pallet_volume": "0",
          "integration_attributeId_50": "Var",
          "integration_aile_kodu": "L01",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "ozellik4_aciklama": "Su haznesi, kolayca yeniden doldurmak için geniş su doldurma ağzı ve 270 ml kapasiteye sahiptir.",
          "n11_product_description": "Express Steam Max FV2868 Buharlı Ütü",
          "ozellik2_aciklama": "Pürüzsüz kenarlar ve seramik kaplama; tabanın son derece kolay bir şekilde kaymasını sağlayarak hızlı ve etkili ütüleme seansları sunar.",
          "yukseklik": "17 cm",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "6224008208518",
          "erp_range": "FV28",
          "agirlik": "1,18 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/F97CACC1-D8B9-4B6E-949127E2F19A7F3A/?w=147&h=147&crop=false__Hızlı ısınma ve ütüleme için 2500 Watt",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "integration_page_title": "Express Steam Max FV2868",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "270 ml",
          "erp_is_seo_automatic": "true",
          "garantisure": "2 Yıl",
          "genislik": "29 cm",
          "integration_alt_aile_kodu": "L01001",
          "integration_attributeId_49": "160 gr/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E9A23D06-05BE-4B7A-B76139C9B13DE69F/?w=147&h=147&crop=false__Daha hızlı ve kolay ütüleme için %20'ye kadar daha fazla buhar*",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "1300",
          "integration_products_percontainer_c40": "0",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "2 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/2E5245B8-BDD2-4B79-8467668A848F21D6/?w=147&h=147&crop=false__Kolay kayma için seramik taban",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Daha yüksek buhar performansını* ve gelişmiş özellikleri buluşturan EXPRESS STEAM, ütülemeyi hızlı ve kolay hale getirir. Kolay ütüleme için dayanıklı seramik tabana sahip olan Express Steam ayrıca hızlı ısınma süresi için 2500 W güç ve en inatçı kırışıklıkların bile üstesinden gelmek için ekstra güçlü 160 g/dk şok buhar ile birlikte gelir. Damlama önleme özelliğiyle kumaşı lekesiz ve korumalı tutar. Express Steam gönül rahatlığıyla günlük ütüleme için otomatik kapanma özelliğine ve kolayca doldurulabilen büyük bir su haznesine sahiptir.",
          "ozellik1_aciklama": "Yeni EXPRESS STEAM, daha hızlı ve daha kolay ütüleme için daha iyi buhar performansı sunar.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/40EB6DDA-B0B1-4798-BC808EBC947248C3/?w=147&h=147&crop=false__Geniş & kolayca yeniden doldurulabilir su haznesi",
          "integration_attributeId_22": "Mavi",
          "integration_parcel_dimension_height": "0",
          "short_description": "•\tGÜÇLÜ: Hızlı ısınma ve verimli ütüleme için 2500 W güç <br> •\tHIZLI: Hızlı ve rahat kayma için dayanıklı seramik tabanla donatılmıştır. <br> •\tKIRIŞIKLIKLARI GİDERİN: Zorlu kırışıklıklar için 160 gr/dk'ya kadar şok buhar gücüne sahiptir <br> •\tDAMLAMA ÖNLEME SİSTEMİ: Damlama önleyici sistem, suyun çarşaflarınızı lekelemesini önler",
          "erp_parcel_dimension_height": "0",
          "erp_pallet_dimension_width": "0",
          "n11_product_title": "Express Steam Max FV2868 Buharlı Ütü",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "2500 watt",
          "ozellik3_aciklama": "Damlama önleyici özelliği sayesinde ütülenen giysilerin lekelenmesini önler.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B0355C36-3D65-4329-B32167E5C9FECD11/?w=147&h=147&crop=false__Damlama önleyici koruma",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "integration_products_percontainer_hq4": "0",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_hq4": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "FV28",
          "erp_marka": "01",
          "erp_parcel_dimension_depth": "0",
          "erp_pallet_dimension_depth": "0",
          "turu": "Buharlı",
          "integration_attributeId_86": "7,5 bar",
          "derinlik": "12 cm",
          "integration_agirlik": "1300 gr",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_attributeId_227": "Var",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "160 gr/dk",
            "data_type": "dropdown",
            "label": "160 gr/dk"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_287": {
            "value": "2500 watt",
            "data_type": "dropdown",
            "label": "2500 watt"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_51": {
            "value": "270 ml",
            "data_type": "dropdown",
            "label": "270 ml"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_693": {
            "value": "45 gr/dk",
            "data_type": "dropdown",
            "label": "45 gr/dk"
          },
          "integration_attributeId_730": {
            "value": "2 m",
            "data_type": "dropdown",
            "label": "2 m"
          },
          "integration_attributeId_86": {
            "value": "7,5 bar",
            "data_type": "dropdown",
            "label": "7,5 bar"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_24": {
            "value": "Seramik",
            "data_type": "dropdown",
            "label": "Seramik"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_22": {
            "value": "Mavi",
            "data_type": "dropdown",
            "label": "Mavi"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 10785,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/01/23/11552/0c28f4ce-2261-4244-ab5b-f88d5c99ccf0.jpg",
            "order": 1,
            "created_date": "2023-02-17T11:26:36.968424Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10786,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/01/23/11552/0817dadb-bb94-434e-8e9e-832aefd602e4.jpg",
            "order": 2,
            "created_date": "2023-02-17T11:26:37.207241Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10788,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/01/23/11552/064561ef-ddbe-479d-a6cc-7ab4dbebb783.jpg",
            "order": 3,
            "created_date": "2023-02-17T11:26:37.299396Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10787,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/01/23/11552/ba3e4850-d468-4f15-81fe-15cb7d083546.jpg",
            "order": 4,
            "created_date": "2023-02-17T11:26:37.261040Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "949.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "949.90",
        "unit_type": "qty",
        "absolute_url": "/express-steam-max-fv2868-buharli-utu-4300007578/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 509,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 604,
        "name": "Ultimate Pure FV9845 Kireç Avcısı Buharlı Ütü",
        "sku": "1830006927",
        "base_code": "FV98",
        "attributes": {
          "erp_alt_aile_kodu": "L01001",
          "integration_pallet_weight": "0",
          "erp_products_percontainer_c40": "0",
          "integration_en": "0",
          "integration_editorial_description_title": "Ultimate Pure Buharlı ütü: saf buhar gücü",
          "erp_attributeId_24": "Durilium Airglide Autoclean",
          "teslimat_sureleri": "2",
          "ozellik4_aciklama": "60 g/dk’lık sürekli buhar çıkışı, tüm kırışıklıkları etkili bir şekilde gidermek için ideal miktarda sabit buhar çıkışı sağlar.",
          "erp_boy": "0",
          "integration_grup5kodu": "CS",
          "ozellik5_aciklama": "Durilium AirGlide Teknolojisi hızlı ve kolay ütü yapmak için iyi şekilde kayma sağlar. Ayrıca etkili ütüleme için ideal buhar dağılımı sunar. Tefal’in buluşu olan Autoclean katalitik kaplama, taban plakanızın zaman içinde lekesiz ve mükemmel durumda kalmasını sağlar.   * kaplamalardaki dış testler",
          "yukseklik": "163 mm",
          "integration_attributeId_693": "60 gr/dk",
          "integration_attributeId_24": "Durilium Airglide Autoclean",
          "integration_picto": "1--Özel 2’si 1 Arada Micro-Calc Filtre : Çamaşırlardaki Kireç Lekelerine Son Vermek İçin %100 Filtrelenmiş Buhar Gönderimi*--<span><h3>Ultimate Pure FV9845</h3><p>&nbsp;Yepyeni &ouml;zel kire&ccedil; y&ouml;netim sistemi, 2&rsquo;si 1 arada etki i&ccedil;in yeni teknoloji Micro-Calc Filtresi kullanır: kire&ccedil; filtre tarafından durdurulur ve &ccedil;amaşırlara saf buhar verilir.</p><p>&nbsp;Micro-Cac Filtresi kolayca &ccedil;ıkarılabilir ve temizlemesi kolaydır. Kolay &uuml;t&uuml; yapmanın ve olağan&uuml;st&uuml; sonu&ccedil;ların tadını &ccedil;ıkarın! </p><p>&nbsp;</p><p><sup>*Kire&ccedil; partik&uuml;llerini durdurur &lt; 0,2 mm</sup> </p></span>|2--Tefal’den Çok Güçlü Buharlı Ütü--<span><h3>Ultimate Pure FV9845</h3>&nbsp;Hızlı ısınma ve y&uuml;ksek performans i&ccedil;in 3200W. </span>|3--En Zorlu Kırışıklıkları Bile Açan Güçlü Buhar Takviyesi--<span><h3>Ultimate Pure FV9845</h3>&nbsp;260 g şok buhar &ccedil;ıkışının g&uuml;c&uuml;, kalın kumaşlardaki kırışıklıkları yumuşatır ve en inat&ccedil;ı olanları bile kolayca d&uuml;zeltir. </span>|4--Kırışıklıkların Giderilmesini Kolaylaştıran Güçlü Ve Sürekli Buhar Çıkışı--<span><h3>Ultimate Pure FV9845</h3>&nbsp;60 g/dk&rsquo;lık s&uuml;rekli buhar &ccedil;ıkışı, t&uuml;m kırışıklıkları etkili bir şekilde gidermek i&ccedil;in en ideal miktarda sabit buhar &ccedil;ıkışı sağlar. </span>|5--Durilium Airglide Autoclean Taban Plakası: En Hızlı Ve En Kolay Kayma*--<span><h3>Ultimate Pure FV9845</h3><p>&nbsp;Durilium AirGlide Teknolojisi hızlı ve kolay &uuml;t&uuml; yapmak i&ccedil;in en iyi şekilde kayma sağlar.</p><p>&nbsp;Ayrıca etkili &uuml;t&uuml;leme i&ccedil;in ideal buhar dağılımı sunar. Tefal&rsquo;in buluşu olan Autoclean katalitik kaplama, taban plakanızın zaman i&ccedil;inde lekesiz ve m&uuml;kemmel durumda kalmasını sağlar. </p><p>&nbsp;</p><p><sup>* kaplamalardaki dış testler</sup> </p></span>|6--Ekstra Güvenlik İçin Akıllı Otomatik Kapanma--<span><h3>Ultimate Pure FV9845</h3>&nbsp;Yanlışlıkla g&ouml;zetimsiz bırakıldığında &uuml;t&uuml; otomatik olarak kapanır. Dikey konumda bırakıldıysa 8 dakika sonra kapanır. Tabanı yere temas halinde ya da yan durumda bırakılmışsa yalnızca 30 saniyede kapanır. </span>|7--Lekesiz Kumaşlar İçin Damlatmaz Taban--<span><h3>Ultimate Pure FV9845</h3>&nbsp;Damlatmaz &ouml;zelliği &uuml;t&uuml;lerken kumaşınıza su damlamasına ve leke oluşmasına engel olur. </span>|8--Otomatik Buhar Ayarı: Her Kıyafet İçin Doğru Miktarda Buhar--<span><h3>Ultimate Pure FV9845</h3>&nbsp;Otomatik buhar işleviyle buhar miktarını se&ccedil;mek i&ccedil;in endişe etmenize gerek kalmaz. Yalnızca kumaş t&uuml;r&uuml;n&uuml;ze uygun sıcaklığı se&ccedil;in ve gerisini &uuml;t&uuml;n&uuml;ze bırakın. </span>|9--Uzun Süreli Ütülemeler İçin Daha Geniş Su Haznesi--<span><h3>Ultimate Pure FV9845</h3>&nbsp;350 ml kapasiteli su haznesi sayesinde rahatlıkla uzun s&uuml;re &uuml;t&uuml; yapabilirsiniz. </span>|10--Onarılabilir Ürün--<span><h3>Ultimate Pure FV9845</h3><ul><li>&nbsp;Kolay onarılacak şekilde tasarlanmıştır</li><li>&nbsp;10Y+ i&ccedil;in d&uuml;ş&uuml;k bedelli, hızlı yedek par&ccedil;a teslimi</li><li>&nbsp;D&uuml;nya genelinde 6500 onarım merkezi </li></ul></span>",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_page_description": "Ultimate Pure FV9845",
          "integration_barkod": "3121040069271",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "L01",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "integration_attributeId_6": "30 cm",
          "integration_products_percontainer_c20": "0",
          "erp_grup1kodu": "KM",
          "gg_new_catalog_id": "80243",
          "integration_detaylar": "{u'eComUrunDetay': [{u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3><p>&nbsp;Yepyeni &ouml;zel kire&ccedil; y&ouml;netim sistemi, 2&rsquo;si 1 arada etki i&ccedil;in yeni teknoloji Micro-Calc Filtresi kullan\\u0131r: kire&ccedil; filtre taraf\\u0131ndan durdurulur ve &ccedil;ama\\u015f\\u0131rlara saf buhar verilir.</p><p>&nbsp;Micro-Cac Filtresi kolayca &ccedil;\\u0131kar\\u0131labilir ve temizlemesi kolayd\\u0131r. Kolay &uuml;t&uuml; yapman\\u0131n ve ola\\u011fan&uuml;st&uuml; sonu&ccedil;lar\\u0131n tad\\u0131n\\u0131 &ccedil;\\u0131kar\\u0131n! </p><p>&nbsp;</p><p><sup>*Kire&ccedil; partik&uuml;llerini durdurur &lt; 0,2 mm</sup> </p></span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto9.jpg', u'BASLIK': u'\\xd6zel 2\\u2019si 1 Arada Micro-Calc Filtre : \\xc7ama\\u015f\\u0131rlardaki Kire\\xe7 Lekelerine Son Vermek \\u0130\\xe7in %100 Filtrelenmi\\u015f Buhar G\\xf6nderimi*', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'14934'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;H\\u0131zl\\u0131 \\u0131s\\u0131nma ve y&uuml;ksek performans i&ccedil;in 3200W. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto10.jpg', u'BASLIK': u'Tefal\\u2019den \\xc7ok G\\xfc\\xe7l\\xfc Buharl\\u0131 \\xdct\\xfc', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'14935'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;260 g \\u015fok buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131n\\u0131n g&uuml;c&uuml;, kal\\u0131n kuma\\u015flardaki k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 yumu\\u015fat\\u0131r ve en inat&ccedil;\\u0131 olanlar\\u0131 bile kolayca d&uuml;zeltir. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto16.jpg', u'BASLIK': u'En Zorlu K\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 Bile A\\xe7an G\\xfc\\xe7l\\xfc Buhar Takviyesi', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'14936'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;60 g/dk&rsquo;l\\u0131k s&uuml;rekli buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131, t&uuml;m k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 etkili bir \\u015fekilde gidermek i&ccedil;in en ideal miktarda sabit buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131 sa\\u011flar. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto12.jpg', u'BASLIK': u'K\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131n Giderilmesini Kolayla\\u015ft\\u0131ran G\\xfc\\xe7l\\xfc Ve S\\xfcrekli Buhar \\xc7\\u0131k\\u0131\\u015f\\u0131', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'14937'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3><p>&nbsp;Durilium AirGlide Teknolojisi h\\u0131zl\\u0131 ve kolay &uuml;t&uuml; yapmak i&ccedil;in en iyi \\u015fekilde kayma sa\\u011flar.</p><p>&nbsp;Ayr\\u0131ca etkili &uuml;t&uuml;leme i&ccedil;in ideal buhar da\\u011f\\u0131l\\u0131m\\u0131 sunar. Tefal&rsquo;in bulu\\u015fu olan Autoclean katalitik kaplama, taban plakan\\u0131z\\u0131n zaman i&ccedil;inde lekesiz ve m&uuml;kemmel durumda kalmas\\u0131n\\u0131 sa\\u011flar. </p><p>&nbsp;</p><p><sup>* kaplamalardaki d\\u0131\\u015f testler</sup> </p></span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto13.jpg', u'BASLIK': u'Durilium Airglide Autoclean Taban Plakas\\u0131: En H\\u0131zl\\u0131 Ve En Kolay Kayma*', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'14938'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;Yanl\\u0131\\u015fl\\u0131kla g&ouml;zetimsiz b\\u0131rak\\u0131ld\\u0131\\u011f\\u0131nda &uuml;t&uuml; otomatik olarak kapan\\u0131r. Dikey konumda b\\u0131rak\\u0131ld\\u0131ysa 8 dakika sonra kapan\\u0131r. Taban\\u0131 yere temas halinde ya da yan durumda b\\u0131rak\\u0131lm\\u0131\\u015fsa yaln\\u0131zca 30 saniyede kapan\\u0131r. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto14.jpg', u'BASLIK': u'Ekstra G\\xfcvenlik \\u0130\\xe7in Ak\\u0131ll\\u0131 Otomatik Kapanma', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'14939'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;Damlatmaz &ouml;zelli\\u011fi &uuml;t&uuml;lerken kuma\\u015f\\u0131n\\u0131za su damlamas\\u0131na ve leke olu\\u015fmas\\u0131na engel olur. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto15.jpg', u'BASLIK': u'Lekesiz Kuma\\u015flar \\u0130\\xe7in Damlatmaz Taban', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'14940'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;Otomatik buhar i\\u015fleviyle buhar miktar\\u0131n\\u0131 se&ccedil;mek i&ccedil;in endi\\u015fe etmenize gerek kalmaz. Yaln\\u0131zca kuma\\u015f t&uuml;r&uuml;n&uuml;ze uygun s\\u0131cakl\\u0131\\u011f\\u0131 se&ccedil;in ve gerisini &uuml;t&uuml;n&uuml;ze b\\u0131rak\\u0131n. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto7.jpg', u'BASLIK': u'Otomatik Buhar Ayar\\u0131: Her K\\u0131yafet \\u0130\\xe7in Do\\u011fru Miktarda Buhar', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'14941'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;350 ml kapasiteli su haznesi sayesinde rahatl\\u0131kla uzun s&uuml;re &uuml;t&uuml; yapabilirsiniz. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto8.jpg', u'BASLIK': u'Uzun S\\xfcreli \\xdct\\xfclemeler \\u0130\\xe7in Daha Geni\\u015f Su Haznesi', u'SIRANO': u'9.000000', u'GECERLI': u'true', u'DETAY_ID': u'14942'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3><ul><li>&nbsp;Kolay onar\\u0131lacak \\u015fekilde tasarlanm\\u0131\\u015ft\\u0131r</li><li>&nbsp;10Y+ i&ccedil;in d&uuml;\\u015f&uuml;k bedelli, h\\u0131zl\\u0131 yedek par&ccedil;a teslimi</li><li>&nbsp;D&uuml;nya genelinde 6500 onar\\u0131m merkezi </li></ul></span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto_33.jpg', u'BASLIK': u'Onar\\u0131labilir \\xdcr\\xfcn', u'SIRANO': u'10.000000', u'GECERLI': u'true', u'DETAY_ID': u'14943'}, {u'TIPI': u'2', u'HTML_METIN': u'3200 W G&uuml;&ccedil;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_2400W.jpg', u'BASLIK': u'Teknik \\xd6zellik 1', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'14944'}, {u'TIPI': u'2', u'HTML_METIN': u'60&nbsp; g/dk S&uuml;rekli buhar g&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Sabit-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 2', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'14945'}, {u'TIPI': u'2', u'HTML_METIN': u'260&nbsp;gr \\u015eok buhar g&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_\\u015eok-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 3', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'14946'}, {u'TIPI': u'2', u'HTML_METIN': u'Dikey buhar', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Dikey-Utuleme.jpg', u'BASLIK': u'Teknik \\xd6zellik 4', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'14947'}, {u'TIPI': u'2', u'HTML_METIN': u'<p>Durilium Airglide Autoclean taban</p>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Kendi-Kendini-Temizleme.jpg', u'BASLIK': u'Teknik \\xd6zellik 5', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'14948'}, {u'TIPI': u'2', u'HTML_METIN': u'350 ml su haznesi', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Su-kapasitesi.jpg', u'BASLIK': u'Teknik \\xd6zellik 6', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'14949'}, {u'TIPI': u'2', u'HTML_METIN': u'Su damlatmama', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Su-Damlatmama.jpg', u'BASLIK': u'Teknik \\xd6zellik 7', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'14950'}, {u'TIPI': u'2', u'HTML_METIN': u'Sprey', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_sprey.jpg', u'BASLIK': u'Teknik \\xd6zellik 8', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'14951'}, {u'TIPI': u'2', u'HTML_METIN': u'Otomatik kapanma', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Otomatik-Kapanma.jpg', u'BASLIK': u'Teknik \\xd6zellik 9', u'SIRANO': u'9.000000', u'GECERLI': u'true', u'DETAY_ID': u'14952'}, {u'TIPI': u'2', u'HTML_METIN': u'2,5 m Kordon uzunlu\\u011fu', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_8,2-m.-Kordon-Uzunlu\\u011fu.jpg', u'BASLIK': u'Teknik \\xd6zellik 10', u'SIRANO': u'10.000000', u'GECERLI': u'true', u'DETAY_ID': u'14953'}, {u'TIPI': u'2', u'HTML_METIN': u'&Ouml;zel &ccedil;\\u0131kar\\u0131labilir kire&ccedil; toplay\\u0131c\\u0131s\\u0131', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Kire\\xe7-Avc\\u0131s\\u0131.jpg', u'BASLIK': u'Teknik \\xd6zellik 11', u'SIRANO': u'11.000000', u'GECERLI': u'true', u'DETAY_ID': u'14954'}]}",
          "erp_pallet_volume": "0",
          "integration_yukselik": "0",
          "erp_parcel_dimension_depth": "0",
          "erp_pallet_dimension_width": "0",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/BAA0E154-F27A-41D1-B01684B874E515D3/?w=147&h=147&crop=false__Zorlu kırışıklıkları bile açan güçlü buhar takviyesi",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "compare_product_slug": "buharli-utuler-compare",
          "erp_products_percontainer_hq4": "0",
          "short_description": "• 3200 W güç<br>\n• Micro-Calc filtre sistemi<br>\n• Kireç önleyici<br>\n• Hızlı ısınma<br>\n• Ergonomik tasarım<br>\n• Durilium AirGlide Autoclean taban teknolojisi<br>",
          "integration_aile_kodu": "L01",
          "ozellik2_aciklama": "Hızlı ısınma ve yüksek performans için 3200W.",
          "erp_detaylar": "{u'eComUrunDetay': [{u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3><p>&nbsp;Yepyeni &ouml;zel kire&ccedil; y&ouml;netim sistemi, 2&rsquo;si 1 arada etki i&ccedil;in yeni teknoloji Micro-Calc Filtresi kullan\\u0131r: kire&ccedil; filtre taraf\\u0131ndan durdurulur ve &ccedil;ama\\u015f\\u0131rlara saf buhar verilir.</p><p>&nbsp;Micro-Cac Filtresi kolayca &ccedil;\\u0131kar\\u0131labilir ve temizlemesi kolayd\\u0131r. Kolay &uuml;t&uuml; yapman\\u0131n ve ola\\u011fan&uuml;st&uuml; sonu&ccedil;lar\\u0131n tad\\u0131n\\u0131 &ccedil;\\u0131kar\\u0131n! </p><p>&nbsp;</p><p><sup>*Kire&ccedil; partik&uuml;llerini durdurur &lt; 0,2 mm</sup> </p></span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto9.jpg', u'BASLIK': u'\\xd6zel 2\\u2019si 1 Arada Micro-Calc Filtre : \\xc7ama\\u015f\\u0131rlardaki Kire\\xe7 Lekelerine Son Vermek \\u0130\\xe7in %100 Filtrelenmi\\u015f Buhar G\\xf6nderimi*', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'14934'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;H\\u0131zl\\u0131 \\u0131s\\u0131nma ve y&uuml;ksek performans i&ccedil;in 3200W. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto10.jpg', u'BASLIK': u'Tefal\\u2019den \\xc7ok G\\xfc\\xe7l\\xfc Buharl\\u0131 \\xdct\\xfc', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'14935'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;260 g \\u015fok buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131n\\u0131n g&uuml;c&uuml;, kal\\u0131n kuma\\u015flardaki k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 yumu\\u015fat\\u0131r ve en inat&ccedil;\\u0131 olanlar\\u0131 bile kolayca d&uuml;zeltir. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto16.jpg', u'BASLIK': u'En Zorlu K\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 Bile A\\xe7an G\\xfc\\xe7l\\xfc Buhar Takviyesi', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'14936'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;60 g/dk&rsquo;l\\u0131k s&uuml;rekli buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131, t&uuml;m k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 etkili bir \\u015fekilde gidermek i&ccedil;in en ideal miktarda sabit buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131 sa\\u011flar. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto12.jpg', u'BASLIK': u'K\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131n Giderilmesini Kolayla\\u015ft\\u0131ran G\\xfc\\xe7l\\xfc Ve S\\xfcrekli Buhar \\xc7\\u0131k\\u0131\\u015f\\u0131', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'14937'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3><p>&nbsp;Durilium AirGlide Teknolojisi h\\u0131zl\\u0131 ve kolay &uuml;t&uuml; yapmak i&ccedil;in en iyi \\u015fekilde kayma sa\\u011flar.</p><p>&nbsp;Ayr\\u0131ca etkili &uuml;t&uuml;leme i&ccedil;in ideal buhar da\\u011f\\u0131l\\u0131m\\u0131 sunar. Tefal&rsquo;in bulu\\u015fu olan Autoclean katalitik kaplama, taban plakan\\u0131z\\u0131n zaman i&ccedil;inde lekesiz ve m&uuml;kemmel durumda kalmas\\u0131n\\u0131 sa\\u011flar. </p><p>&nbsp;</p><p><sup>* kaplamalardaki d\\u0131\\u015f testler</sup> </p></span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto13.jpg', u'BASLIK': u'Durilium Airglide Autoclean Taban Plakas\\u0131: En H\\u0131zl\\u0131 Ve En Kolay Kayma*', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'14938'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;Yanl\\u0131\\u015fl\\u0131kla g&ouml;zetimsiz b\\u0131rak\\u0131ld\\u0131\\u011f\\u0131nda &uuml;t&uuml; otomatik olarak kapan\\u0131r. Dikey konumda b\\u0131rak\\u0131ld\\u0131ysa 8 dakika sonra kapan\\u0131r. Taban\\u0131 yere temas halinde ya da yan durumda b\\u0131rak\\u0131lm\\u0131\\u015fsa yaln\\u0131zca 30 saniyede kapan\\u0131r. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto14.jpg', u'BASLIK': u'Ekstra G\\xfcvenlik \\u0130\\xe7in Ak\\u0131ll\\u0131 Otomatik Kapanma', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'14939'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;Damlatmaz &ouml;zelli\\u011fi &uuml;t&uuml;lerken kuma\\u015f\\u0131n\\u0131za su damlamas\\u0131na ve leke olu\\u015fmas\\u0131na engel olur. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto15.jpg', u'BASLIK': u'Lekesiz Kuma\\u015flar \\u0130\\xe7in Damlatmaz Taban', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'14940'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;Otomatik buhar i\\u015fleviyle buhar miktar\\u0131n\\u0131 se&ccedil;mek i&ccedil;in endi\\u015fe etmenize gerek kalmaz. Yaln\\u0131zca kuma\\u015f t&uuml;r&uuml;n&uuml;ze uygun s\\u0131cakl\\u0131\\u011f\\u0131 se&ccedil;in ve gerisini &uuml;t&uuml;n&uuml;ze b\\u0131rak\\u0131n. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto7.jpg', u'BASLIK': u'Otomatik Buhar Ayar\\u0131: Her K\\u0131yafet \\u0130\\xe7in Do\\u011fru Miktarda Buhar', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'14941'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3>&nbsp;350 ml kapasiteli su haznesi sayesinde rahatl\\u0131kla uzun s&uuml;re &uuml;t&uuml; yapabilirsiniz. </span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto8.jpg', u'BASLIK': u'Uzun S\\xfcreli \\xdct\\xfclemeler \\u0130\\xe7in Daha Geni\\u015f Su Haznesi', u'SIRANO': u'9.000000', u'GECERLI': u'true', u'DETAY_ID': u'14942'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Ultimate Pure FV9845</h3><ul><li>&nbsp;Kolay onar\\u0131lacak \\u015fekilde tasarlanm\\u0131\\u015ft\\u0131r</li><li>&nbsp;10Y+ i&ccedil;in d&uuml;\\u015f&uuml;k bedelli, h\\u0131zl\\u0131 yedek par&ccedil;a teslimi</li><li>&nbsp;D&uuml;nya genelinde 6500 onar\\u0131m merkezi </li></ul></span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_picto_33.jpg', u'BASLIK': u'Onar\\u0131labilir \\xdcr\\xfcn', u'SIRANO': u'10.000000', u'GECERLI': u'true', u'DETAY_ID': u'14943'}, {u'TIPI': u'2', u'HTML_METIN': u'3200 W G&uuml;&ccedil;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_2400W.jpg', u'BASLIK': u'Teknik \\xd6zellik 1', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'14944'}, {u'TIPI': u'2', u'HTML_METIN': u'60&nbsp; g/dk S&uuml;rekli buhar g&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Sabit-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 2', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'14945'}, {u'TIPI': u'2', u'HTML_METIN': u'260&nbsp;gr \\u015eok buhar g&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_\\u015eok-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 3', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'14946'}, {u'TIPI': u'2', u'HTML_METIN': u'Dikey buhar', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Dikey-Utuleme.jpg', u'BASLIK': u'Teknik \\xd6zellik 4', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'14947'}, {u'TIPI': u'2', u'HTML_METIN': u'<p>Durilium Airglide Autoclean taban</p>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Kendi-Kendini-Temizleme.jpg', u'BASLIK': u'Teknik \\xd6zellik 5', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'14948'}, {u'TIPI': u'2', u'HTML_METIN': u'350 ml su haznesi', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Su-kapasitesi.jpg', u'BASLIK': u'Teknik \\xd6zellik 6', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'14949'}, {u'TIPI': u'2', u'HTML_METIN': u'Su damlatmama', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Su-Damlatmama.jpg', u'BASLIK': u'Teknik \\xd6zellik 7', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'14950'}, {u'TIPI': u'2', u'HTML_METIN': u'Sprey', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_sprey.jpg', u'BASLIK': u'Teknik \\xd6zellik 8', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'14951'}, {u'TIPI': u'2', u'HTML_METIN': u'Otomatik kapanma', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Otomatik-Kapanma.jpg', u'BASLIK': u'Teknik \\xd6zellik 9', u'SIRANO': u'9.000000', u'GECERLI': u'true', u'DETAY_ID': u'14952'}, {u'TIPI': u'2', u'HTML_METIN': u'2,5 m Kordon uzunlu\\u011fu', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_8,2-m.-Kordon-Uzunlu\\u011fu.jpg', u'BASLIK': u'Teknik \\xd6zellik 10', u'SIRANO': u'10.000000', u'GECERLI': u'true', u'DETAY_ID': u'14953'}, {u'TIPI': u'2', u'HTML_METIN': u'&Ouml;zel &ccedil;\\u0131kar\\u0131labilir kire&ccedil; toplay\\u0131c\\u0131s\\u0131', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2060_img1_Kire\\xe7-Avc\\u0131s\\u0131.jpg', u'BASLIK': u'Teknik \\xd6zellik 11', u'SIRANO': u'11.000000', u'GECERLI': u'true', u'DETAY_ID': u'14954'}]}",
          "integration_layers_perpallet": "0",
          "erp_serisonuflg": "false",
          "erp_yukselik": "0",
          "erp_range": "FV98",
          "product_line": "LINEN CARE",
          "agirlik": "1,45 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/ABAC9C82-2992-4CE0-AA4FA5C9ADBDC7F7/?w=147&h=147&crop=false__Durilium AirGlide Autoclean taban plakası: hızlı ve kolay kayma*",
          "integration_gecerli": "true",
          "erp_grup6kodu": "EY",
          "min_stok": "10,5",
          "integration_page_title": "Ultimate Pure FV9845",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "erp_en": "0",
          "integration_grup2kodu": "M",
          "erp_is_seo_automatic": "true",
          "integration_spare_parts_avaibility": "False",
          "genislik": "316 mm",
          "integration_alt_aile_kodu": "L01001",
          "integration_attributeId_49": "260 gr/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/01B97660-B8CB-4CBC-B3E5AC1C73B8F6DC/?w=147&h=147&crop=false__Özel 2’si 1 arada Micro-Calc Filtre : çamaşırlardaki kireç lekelerine son vermek için %100 filtrelenmiş buhar gönderimi*",
          "integration_sirketkodu": "2006_GSEB",
          "erp_page_description": "Ultimate Pure FV9845",
          "erp_agirlik": "1450",
          "ozellik6_aciklama": "Yanlışlıkla gözetimsiz bırakıldığında ütü otomatik olarak kapanır. Dikey konumda bırakıldıysa 8 dakika sonra kapanır. Tabanı yere temas halinde ya da yan durumda bırakılmışsa yalnızca 30 saniyede kapanır.",
          "integration_grup1kodu": "KM",
          "integration_products_percontainer_c40": "0",
          "erp_barkod": "3121040069271",
          "erp_spare_parts_avaibility": "False",
          "ozellik17_baslik": "https://tefal.akinoncdn.com/cms/2022/02/04/a717e518-07f3-4498-b0e3-963bad95c47e.jpe__Ürün 15 yıl boyunca onarılabilir",
          "erp_page_title": "Ultimate Pure FV9845",
          "integration_attributeId_730": "2,5 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/F71C8B0F-F4A4-4C21-94E8DFC8D7B7771F/?w=147&h=147&crop=false__Tefal’den çok güçlü buharlı ütü",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Üstün performanslı buhar gücü sunan Tefal’den Ultimate Pure buharlı ütü, çamaşırlar üzerindeki kireç lekelerine son veren ve mükemmel sonuçlar sağlayan birinci sınıf bir ütüdür Yeni Micro-Calc Filtre sistemi buharın %100’ünü filtreleyerek, tortu ve lekelerin önlenmesine yardımcı olan olağanüstü bir kireç yönetimi ve muhteşem ütü sonuçları sağlar. 3200W güç, ısınma süresini hızlandırır; 60 g/dk’ye kadar değişken buhar çıkışı son derece etkili bir ütüleme deneyimi sunarken, 260 g şok buhar çıkışı inatçı kırışıklıkları bile açabilir. Kayganlık açısından 1 numara olan ve bakım gerektirmeyen Durilium AirGlide Autoclean taban plakasına, üst düzeyde rahatlık için gelişmiş özelliklere ve saf buhar gücüne sahip buharlı ütüyü keşfedin.",
          "ozellik1_aciklama": "Yepyeni özel kireç yönetim sistemi, 2’si 1 arada etki için yeni teknoloji Micro-Calc Filtresi kullanır: kireç filtre tarafından durdurulur ve çamaşırlara saf buhar verilir.   Micro-Cac Filtresi kolayca çıkarılabilir ve temizlemesi kolaydır.   Kolay ütü yapmanın ve olağanüstü sonuçların tadını çıkarın!   *Kireç partiküllerini durdurur < 0,2 mm",
          "integration_parcel_dimension_depth": "0",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/565D7B5C-0468-4D2F-9F1FC24EB2AF359C/?w=147&h=147&crop=false__Kırışıklıkların giderilmesini kolaylaştıran güçlü ve sürekli buhar çıkışı",
          "integration_attributeId_22": "Siyah - Metalik pembe",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "integration_boy": "0",
          "erp_picto": "1--Özel 2’si 1 Arada Micro-Calc Filtre : Çamaşırlardaki Kireç Lekelerine Son Vermek İçin %100 Filtrelenmiş Buhar Gönderimi*--<span><h3>Ultimate Pure FV9845</h3><p>&nbsp;Yepyeni &ouml;zel kire&ccedil; y&ouml;netim sistemi, 2&rsquo;si 1 arada etki i&ccedil;in yeni teknoloji Micro-Calc Filtresi kullanır: kire&ccedil; filtre tarafından durdurulur ve &ccedil;amaşırlara saf buhar verilir.</p><p>&nbsp;Micro-Cac Filtresi kolayca &ccedil;ıkarılabilir ve temizlemesi kolaydır. Kolay &uuml;t&uuml; yapmanın ve olağan&uuml;st&uuml; sonu&ccedil;ların tadını &ccedil;ıkarın! </p><p>&nbsp;</p><p><sup>*Kire&ccedil; partik&uuml;llerini durdurur &lt; 0,2 mm</sup> </p></span>|2--Tefal’den Çok Güçlü Buharlı Ütü--<span><h3>Ultimate Pure FV9845</h3>&nbsp;Hızlı ısınma ve y&uuml;ksek performans i&ccedil;in 3200W. </span>|3--En Zorlu Kırışıklıkları Bile Açan Güçlü Buhar Takviyesi--<span><h3>Ultimate Pure FV9845</h3>&nbsp;260 g şok buhar &ccedil;ıkışının g&uuml;c&uuml;, kalın kumaşlardaki kırışıklıkları yumuşatır ve en inat&ccedil;ı olanları bile kolayca d&uuml;zeltir. </span>|4--Kırışıklıkların Giderilmesini Kolaylaştıran Güçlü Ve Sürekli Buhar Çıkışı--<span><h3>Ultimate Pure FV9845</h3>&nbsp;60 g/dk&rsquo;lık s&uuml;rekli buhar &ccedil;ıkışı, t&uuml;m kırışıklıkları etkili bir şekilde gidermek i&ccedil;in en ideal miktarda sabit buhar &ccedil;ıkışı sağlar. </span>|5--Durilium Airglide Autoclean Taban Plakası: En Hızlı Ve En Kolay Kayma*--<span><h3>Ultimate Pure FV9845</h3><p>&nbsp;Durilium AirGlide Teknolojisi hızlı ve kolay &uuml;t&uuml; yapmak i&ccedil;in en iyi şekilde kayma sağlar.</p><p>&nbsp;Ayrıca etkili &uuml;t&uuml;leme i&ccedil;in ideal buhar dağılımı sunar. Tefal&rsquo;in buluşu olan Autoclean katalitik kaplama, taban plakanızın zaman i&ccedil;inde lekesiz ve m&uuml;kemmel durumda kalmasını sağlar. </p><p>&nbsp;</p><p><sup>* kaplamalardaki dış testler</sup> </p></span>|6--Ekstra Güvenlik İçin Akıllı Otomatik Kapanma--<span><h3>Ultimate Pure FV9845</h3>&nbsp;Yanlışlıkla g&ouml;zetimsiz bırakıldığında &uuml;t&uuml; otomatik olarak kapanır. Dikey konumda bırakıldıysa 8 dakika sonra kapanır. Tabanı yere temas halinde ya da yan durumda bırakılmışsa yalnızca 30 saniyede kapanır. </span>|7--Lekesiz Kumaşlar İçin Damlatmaz Taban--<span><h3>Ultimate Pure FV9845</h3>&nbsp;Damlatmaz &ouml;zelliği &uuml;t&uuml;lerken kumaşınıza su damlamasına ve leke oluşmasına engel olur. </span>|8--Otomatik Buhar Ayarı: Her Kıyafet İçin Doğru Miktarda Buhar--<span><h3>Ultimate Pure FV9845</h3>&nbsp;Otomatik buhar işleviyle buhar miktarını se&ccedil;mek i&ccedil;in endişe etmenize gerek kalmaz. Yalnızca kumaş t&uuml;r&uuml;n&uuml;ze uygun sıcaklığı se&ccedil;in ve gerisini &uuml;t&uuml;n&uuml;ze bırakın. </span>|9--Uzun Süreli Ütülemeler İçin Daha Geniş Su Haznesi--<span><h3>Ultimate Pure FV9845</h3>&nbsp;350 ml kapasiteli su haznesi sayesinde rahatlıkla uzun s&uuml;re &uuml;t&uuml; yapabilirsiniz. </span>|10--Onarılabilir Ürün--<span><h3>Ultimate Pure FV9845</h3><ul><li>&nbsp;Kolay onarılacak şekilde tasarlanmıştır</li><li>&nbsp;10Y+ i&ccedil;in d&uuml;ş&uuml;k bedelli, hızlı yedek par&ccedil;a teslimi</li><li>&nbsp;D&uuml;nya genelinde 6500 onarım merkezi </li></ul></span>",
          "erp_parcel_dimension_height": "0",
          "integration_attributeId_50": "Var",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "3200 watt",
          "ozellik3_aciklama": "260 g şok buhar çıkışının gücü, kalın kumaşlardaki kırışıklıkları yumuşatır ve inatçı olanları bile kolayca düzeltir.",
          "integration_model": "Ultimate Anti-Calc FV9774",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "integration_attributeId_51": "350 ml",
          "erp_attributeId_51": "350 ml",
          "erp_attributeId_50": "Var",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "erp_grup5kodu": "CS",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "FV98",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B1BA8638-6C1E-4612-9E4D763EBA1DE3CF/?w=147&h=147&crop=false__Ekstra güvenlik için akıllı otomatik kapanma",
          "erp_pallet_dimension_depth": "0",
          "derinlik": "151 mm",
          "integration_agirlik": "1,45 kg",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_attributeId_227": "Var",
          "integration_grup6kodu": "EY",
          "integration_packed_dimension_depth": "0",
          "integration_products_percontainer_hq4": "0"
        },
        "attribute_set": 100,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "260 gr/dk",
            "data_type": "dropdown",
            "label": "260 gr/dk"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_attributeId_24": {
            "value": "Durilium Airglide Autoclean",
            "data_type": "dropdown",
            "label": "Durilium Airglide Autoclean"
          },
          "integration_attributeId_693": {
            "value": "60 gr/dk",
            "data_type": "dropdown",
            "label": "60 gr/dk"
          },
          "integration_attributeId_730": {
            "value": "2,5 m",
            "data_type": "dropdown",
            "label": "2,5 m"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_24": {
            "value": "Durilium Airglide Autoclean",
            "data_type": "dropdown",
            "label": "Durilium Airglide Autoclean"
          },
          "integration_attributeId_22": {
            "value": "Siyah - Metalik pembe",
            "data_type": "dropdown",
            "label": "Siyah - Metalik pembe"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_6": {
            "value": "30 cm",
            "data_type": "dropdown",
            "label": "30 cm"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_51": {
            "value": "350 ml",
            "data_type": "dropdown",
            "label": "350 ml"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_287": {
            "value": "3200 watt",
            "data_type": "dropdown",
            "label": "3200 watt"
          },
          "erp_attributeId_51": {
            "value": "350 ml",
            "data_type": "dropdown",
            "label": "350 ml"
          },
          "erp_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "product_line": {
            "value": "LINEN CARE",
            "data_type": "dropdown",
            "label": "LINEN CARE"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 8007,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/670c7d53-ecc9-4673-acaa-25cebc2cb0f8.jpg",
            "order": 1,
            "created_date": "2021-10-01T12:22:27.230789Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8008,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/30ae30b6-90ef-4ef5-bf6f-faf9be1e9a58.jpg",
            "order": 2,
            "created_date": "2021-10-01T12:22:27.327635Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8009,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/7a76d7a0-d8b4-4dcf-9a6f-f855dccfd662.jpg",
            "order": 3,
            "created_date": "2021-10-01T12:22:27.412496Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8018,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/2eb889cb-eac6-4e14-9b17-40739019502a.jpg",
            "order": 4,
            "created_date": "2021-10-01T12:32:24.187664Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8010,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/8fb811e5-bf36-4b25-9f9b-f79f8331242d.jpg",
            "order": 5,
            "created_date": "2021-10-01T12:22:27.503952Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8011,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/f2b75f39-f8e7-4597-8f3c-ec56f574ede1.jpg",
            "order": 6,
            "created_date": "2021-10-01T12:22:27.578123Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8012,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/09/30/1301/baeaa4d1-0f9c-4757-bdfc-10ea56dd2188.jpg",
            "order": 7,
            "created_date": "2021-10-01T12:22:27.656695Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8013,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/b1685578-e367-4c7b-a1ab-4be68eb09c75.jpg",
            "order": 8,
            "created_date": "2021-10-01T12:22:27.714000Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8016,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/cf0a0804-606d-4899-a7c2-fa324e6e7430.jpg",
            "order": 9,
            "created_date": "2021-10-01T12:23:02.145245Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8014,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/688f4479-ec1e-4eda-be9e-8d0bdcc13ade.jpg",
            "order": 10,
            "created_date": "2021-10-01T12:22:27.773912Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8017,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/6661ff20-b775-43c4-b323-2b3ed0005a3f.jpg",
            "order": 11,
            "created_date": "2021-10-01T12:23:02.208631Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8015,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/01/2978/bbfede79-cc92-4d80-baa2-9ddd7254e87a.jpg",
            "order": 12,
            "created_date": "2021-10-01T12:22:27.824439Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7973,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/09/30/2978/89bd4051-b35a-4507-b556-db92de7ef818.jpg",
            "order": 13,
            "created_date": "2021-09-30T12:32:49.771905Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7974,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/09/30/2978/b2cfb825-efff-4fec-a517-4ac900e0f6d2.jpg",
            "order": 14,
            "created_date": "2021-09-30T12:32:49.833528Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7975,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/09/30/2978/1220a5a7-8dd6-4924-a7ae-5ae20044ee57.jpg",
            "order": 15,
            "created_date": "2021-09-30T12:32:49.883878Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7976,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/09/30/2978/4c2fef96-e677-4ac9-970f-77ceaa696002.jpg",
            "order": 16,
            "created_date": "2021-09-30T12:32:50.871596Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "2949.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "2949.90",
        "unit_type": "qty",
        "absolute_url": "/ultimate-pure-fv9845-kirec-avcisi-buharli-utu-1830006927/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 182,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3349,
        "name": "TY6973 X-Pert 3.60 Flex Dikey Şarjlı Süpürge",
        "sku": "2211401058",
        "base_code": "RH69",
        "attributes": {
          "integration_is_seo_automatic": "true",
          "teslimat_sureleri": "2",
          "integration_garanti_durumu": "Var, Başlamamış",
          "integration_attributeId_22": "Siyah",
          "erp_grup2kodu": "L",
          "erp_pallet_weight": "0",
          "integration_barkod": "3221616027015",
          "erp_pallet_dimension_height": "0",
          "integration_pallet_weight": "0",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "E04",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "purchase_limit_per_basket": "5",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "E04",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "erp_products_percontainer_hq4": "0",
          "product_calisma_suresi": "45 dk",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3221616027015",
          "erp_range": "RH69",
          "erp_products_percontainer_c40": "0",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_products_percontainer_c20": "0",
          "erp_is_seo_automatic": "true",
          "integration_alt_aile_kodu": "E04162",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "2500",
          "integration_products_percontainer_c40": "0",
          "integration_parcel_dimension_depth": "0",
          "integration_defoluflg": "false",
          "integration_agirlik": "2500",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_pallet_dimension_width": "0",
          "erp_alt_aile_kodu": "E04162",
          "integration_parcel_dimension_height": "0",
          "Outlet": "Evet",
          "erp_parcel_dimension_height": "0",
          "garanti_suresi": "24.0",
          "integration_marka": "01",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "integration_editorial_description_detail": "TY6973 X-Pert 3.60 Flex Dikey Şarjlı Süpürge",
          "erp_products_percontainer_c20": "0",
          "integration_grup2kodu": "L",
          "integration_range": "RH69",
          "erp_marka": "01",
          "erp_parcel_dimension_depth": "0",
          "erp_pallet_dimension_depth": "0",
          "garantisure": "2 Yıl",
          "erp_parcel_volume": "0",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "product_calisma_suresi": {
            "value": "45 dk",
            "data_type": "dropdown",
            "label": "45 dk"
          },
          "Outlet": {
            "value": "Evet",
            "data_type": "dropdown",
            "label": "Evet"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_22": {
            "value": "Siyah",
            "data_type": "dropdown",
            "label": "Siyah"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 9562,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/08/10496/3a94f844-171b-4946-87e1-2a1e6c866ae1.jpg",
            "order": 1,
            "created_date": "2022-09-08T08:25:43.331749Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9563,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/08/10496/b53e8c6f-05a5-4f2a-a59e-caaac69b5e8e.jpg",
            "order": 2,
            "created_date": "2022-09-08T08:25:43.684978Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9565,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/08/10496/94781a71-8277-4d2b-8188-3e7540978e00.jpg",
            "order": 3,
            "created_date": "2022-09-08T08:25:43.791916Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9564,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/08/10496/8dad98c4-a084-41a1-90d7-084eb29c8617.jpg",
            "order": 4,
            "created_date": "2022-09-08T08:25:43.741846Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9566,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/08/10496/54182360-e2d9-40e1-a6a0-384f16dcd4a6.jpg",
            "order": 5,
            "created_date": "2022-09-08T08:25:43.834126Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "5699.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "5699.90",
        "unit_type": "qty",
        "absolute_url": "/ty6973-x-pert-3-60-flex-dikey-sarjli-supurge-2211401058/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          {
            "pk": 5345,
            "label": "Sepette Ek %10 İndirim",
            "listing_kwargs": {
              "discounted_total_price": 5129.91,
              "discount": 569.99,
              "quantity": 1
            },
            "kwargs": {
              "show_benefit_products": true
            }
          }
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 1288,
        "name": "Express Power SV8061 Buhar Kazanlı Ütü",
        "sku": "1830007679",
        "base_code": "SV806",
        "attributes": {
          "erp_alt_aile_kodu": "L02140",
          "integration_pallet_weight": "0",
          "erp_products_percontainer_c40": "0",
          "integration_editorial_description_title": "Express Power Buhar Kazanlı Ütü: Üstün buhar gücü",
          "teslimat_sureleri": "2",
          "ozellik4_aciklama": "Otomatik sıcaklık ayarı teknolojisi ile herhangi bir kumaş üzerinde zahmetsiz, endişesiz ütüleme: yanma riski olmadan% 100 güvenli ütüleme için mükemmel bir buhar ve sıcaklık kombinasyonu.",
          "erp_attributeId_22": "Mor",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/2E5245B8-BDD2-4B79-8467668A848F21D6/?w=147&h=147&crop=false__Benzersiz kayganlık",
          "ozellik5_aciklama": "Kolay dikey buharlama özelliği, ihtiyacınız olduğunda en iyi şekilde görünmenize yardımcı olacak son dakika rötuşları için sadece 30 saniyede yıldırım hızında ısınma süresine sahiptir.",
          "yukseklik": "260 mm",
          "integration_attributeId_693": "130 gr/dk",
          "integration_attributeId_22": "Mor",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_barkod": "3121040076798",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "L02",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "ozellik8_aciklama": "Tabandan ve buhardan gelen ısı kombinasyonu, maksimum hijyen için mikrop ve bakterilerin % 99,9'una kadar öldürmeye yardımcı olur.",
          "erp_pallet_volume": "0",
          "integration_attributeId_50": "Var",
          "integration_aile_kodu": "L02",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "compare_product_slug": "buhar-kazanli-utuler-compare",
          "erp_products_percontainer_hq4": "0",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/FB8E4A72-6F9A-4EC9-A14C626F7C924E21/?w=147&h=147&crop=false__Giysilerinizi sterilize eder",
          "ozellik2_aciklama": "6.7 bar pompa basıncı, en inatçı kırışıklıkları bile düzeltmek için 460 g / dakikalık buhar püskürtme gücü ile hızlı ve verimli sonuçlar için 130 g / dakika sürekli buhar çıkışı ile bir araya gelir.",
          "ozellik9_baslik": "https://tefal.akinoncdn.com/cms/2022/02/04/a717e518-07f3-4498-b0e3-963bad95c47e.jpe__Ürün 15 yıl boyunca onarılabilir",
          "integration_layers_perpallet": "0",
          "integration_model": "SV8061",
          "erp_barkod": "3121040076798",
          "erp_range": "SV806",
          "product_line": "LINEN CARE",
          "agirlik": "4,25 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/9E83A37E-4B1C-4C8F-AA4DC7325C0B8DF7/?w=147&h=147&crop=false__Dikey Ütüleme",
          "integration_gecerli": "true",
          "min_stok": "10",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "downloadable_image_title": "https://tefal.akinoncdn.com/cms/2021/11/03/20da8f02-2000-4afd-829e-5347d4e49667.pdf",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "1,8 L",
          "integration_grup2kodu": "M",
          "erp_is_seo_automatic": "true",
          "genislik": "360 mm",
          "integration_alt_aile_kodu": "L02140",
          "integration_attributeId_49": "460 gr/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/EF709AF4-24AC-45A0-9124C0C0BBA0F08F/?w=147&h=147&crop=false__Çıkarılabilir kireç avcısı",
          "ozellik9_aciklama": "• Kolay onarım için tasarlanmıştır • 15 yıl boyunca düşük maliyetli hızlı yedek parça teslimatı • Dünya çapında 6500 onarım merkezi",
          "erp_agirlik": "4250",
          "ozellik6_aciklama": "Daha keyifli ütü seansları için gelişmiş sessiz pompa teknolojisi ile daha yüksek konfor seviyesini yaşayın.",
          "integration_products_percontainer_c40": "0",
          "integration_attributeId_47": "6,7 bar",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "1,7 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/5DE00FCC-E718-45AC-B5447A9ED9C511B6/?w=147&h=147&crop=false__Ultra Güçlü",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "integration_sirketkodu": "2006_GSEB",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Express Power SV8060 Buhar Kazanlı Ütü, her türlü kumaş için ideal olan üstün buhar gücüyle gelişmiş bakım sistemini bir araya getirir. Uzun süre dayanıklılığı ve yüksek performansı ile hızlı ve kolay sonuçlar sunar. Çıkarılabilir kireç toplayıcı, bakımı zahmetsiz hale getirir ve en yüksek verimlilikle daha uzun ömürlü kullanım sağlar. Daha hızlı ütüleme seansları için 130 g / dakikalık sürekli buhar çıkışı, 6.7 g / dk'lık pompa basıncıyla bir araya gelirken, 460 g / dakikalık şok buhar gücü en inatçı kırışıklıkları bile düzeltir. Durilium AirGlide Autoclean taban olağanüstü kayma ve dayanıklılığını sunar. Huzurlu ütüleme seanslarına izin veren sessiz bir pompa teknolojisi vardır.<br><br>Groupe SEB N.1 Avrupa'nın 1 Numaralı Ütü Üreticisi*<br><br>*Euromonitor International Limited, ütü kategorisi,Groupe SEB’in ütü markalarının 2019 yılındaki toplam hacim bazında perakende satışı (Tefal, Calor,Rowenta, OBH Nortica)",
          "ozellik7_aciklama": "Kolay taşınan kilit sistemi, daha düzgün ütüleme seansları için çıkarılabilir su haznesi ile taşıma ve depolama sırasında tam güvenlik ve rahatlık sağlar.",
          "ozellik1_aciklama": "Gelişmiş kireç önleme teknolojisi, bakımı zahmetsiz hale getiren yeni çıkarılabilir kireç avcısı sistemi ile uzun süreli buhar performansı sağlar. Ayrıca kolay bakım için kullanışlı aksesuarla birlikte gelir",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/D163B363-1FA0-4B7A-89F580975D1C38BA/?w=147&h=147&crop=false__Otomatik Sıcaklık Ayarı Teknolojisi",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "erp_gecerli": "true",
          "short_description": "• AirGlide Autoclean taban teknolojisi <br>\n• Anti kireç sistemi<br>\n• 130 g/dk sürekli buhar çıkışı <br>\n• 460 g/ dk şok buhar<br>",
          "erp_parcel_dimension_height": "0",
          "erp_pallet_dimension_width": "0",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "2800 watt",
          "ozellik3_aciklama": "Durilium AirGlide Tabanı eğlenceli ütü seansları için olağanüstü bir kayma sağlarken, Autoclean kaplama optimum buhar difüzyonu ve sorunsuz bakım ile konforunuza konfor katar",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B77D3092-5F3E-4644-8BA1CF40B90B924E/?w=147&h=147&crop=false__Kolay taşıma için kilit sistemi",
          "downloadable_link": "https://tefal.akinoncdn.com/cms/2021/11/03/a2cc0f9f-b00b-4a4c-b8ea-f61abd60f109.jpe__Kullanım Kılavuzu",
          "integration_products_percontainer_hq4": "0",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "SV806",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E06CF3B9-CB14-4468-9F58A03AFDAA9750/?w=147&h=147&crop=false__Sessiz pompa teknolojisi",
          "erp_pallet_dimension_depth": "0",
          "derinlik": "210 mm",
          "integration_agirlik": "4,25 kg",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_attributeId_227": "Var",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 6,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "460 gr/dk",
            "data_type": "dropdown",
            "label": "460 gr/dk"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_287": {
            "value": "2800 watt",
            "data_type": "dropdown",
            "label": "2800 watt"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_51": {
            "value": "1,8 L",
            "data_type": "dropdown",
            "label": "1,8 L"
          },
          "product_line": {
            "value": "LINEN CARE",
            "data_type": "dropdown",
            "label": "LINEN CARE"
          },
          "erp_attributeId_22": {
            "value": "Mor",
            "data_type": "dropdown",
            "label": "Mor"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_693": {
            "value": "130 gr/dk",
            "data_type": "dropdown",
            "label": "130 gr/dk"
          },
          "integration_attributeId_730": {
            "value": "1,7 m",
            "data_type": "dropdown",
            "label": "1,7 m"
          },
          "integration_attributeId_47": {
            "value": "6,7 bar",
            "data_type": "dropdown",
            "label": "6,7 bar"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_22": {
            "value": "Mor",
            "data_type": "dropdown",
            "label": "Mor"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": true
        },
        "productimage_set": [
          {
            "pk": 8066,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2184/9ac1f1d7-8cee-4097-9576-10253889e7dd.jpg",
            "order": 1,
            "created_date": "2021-10-14T13:13:05.195362Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8068,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2184/efc51415-cbbf-467d-a8fb-28da64230a62.jpg",
            "order": 2,
            "created_date": "2021-10-14T13:13:05.296897Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8071,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2184/511a1c75-05d2-445b-8999-929a50cc0511.jpg",
            "order": 4,
            "created_date": "2021-10-14T13:13:05.492096Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8073,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2184/951d5716-459f-48bb-b612-c8abe7e6f682.jpg",
            "order": 5,
            "created_date": "2021-10-14T13:13:05.597006Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8076,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2184/a0ae6f7c-d5e5-4e8a-bcc0-18840f8daf46.jpg",
            "order": 6,
            "created_date": "2021-10-14T13:13:40.391750Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8075,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2184/fc1282c6-a00e-4fed-b7e5-6469e2ab489e.jpg",
            "order": 8,
            "created_date": "2021-10-14T13:13:05.747545Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "3649.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "3649.90",
        "unit_type": "qty",
        "absolute_url": "/express-power-sv8061-buhar-kazanli-utu-1830007679/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": false,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3237,
        "name": "DT9530 Pure Tex 4in1 Buharlı Düzleştirici",
        "sku": "1830008196",
        "base_code": "DR95",
        "attributes": {
          "integration_is_seo_automatic": "true",
          "teslimat_sureleri": "2",
          "integration_garanti_durumu": "Var, Başlamamış",
          "integration_attributeId_22": "Siyah",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_barkod": "3121040081969",
          "erp_agirlik": "1280",
          "erp_pallet_dimension_height": "0",
          "integration_pallet_weight": "0",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "L05",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "purchase_limit_per_basket": "5",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_attributeId_287": "1700 waat",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "erp_products_percontainer_hq4": "0",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3121040081969",
          "erp_range": "DR95",
          "erp_products_percontainer_c40": "0",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_editorial_description_title": "4'ü 1 arada buharlı düzleştirici ile doğal arındırıcı etki ve etkileyici kırışıklık giderme",
          "integration_products_percontainer_c20": "0",
          "erp_is_seo_automatic": "true",
          "integration_alt_aile_kodu": "L05064",
          "integration_sirketkodu": "2006_GSEB",
          "parca_sayisi": "1",
          "integration_products_percontainer_c40": "0",
          "integration_parcel_dimension_depth": "0",
          "integration_defoluflg": "false",
          "integration_agirlik": "1280",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Tefal PURE TEX muhteşem 4 ’ü 1 arada tasarımıyla kolayca kırışıkları açar, temizler, kıyafetlerinizin güzel kokmasını sağlar. Bu yenilikçi ve türünün ilk örneği buharlı düzleştirici çoklu pad sistemi ile kıyafetlerinizi yorulmadan dezenfekte etmenizi, kırışıklıkları açmanızı, kir, tüy ve tozlardan arındırmanızı sağlar. Üstelik ultra-hızlı ısınma özelliği sayesinde 25 saniye gibi kısa bir sürede hazır hale gelerek hayatınızı kolaylaştırıyor.",
          "erp_alt_aile_kodu": "L05064",
          "integration_parcel_dimension_height": "0",
          "short_description": "•\t   Çoklu pad sistemi ile kıyafetlerinizi yorulmadan dezenfekte eder <br>\n•\t   Kıyafetlerinizin güzel kokmasını sağlar<br>\n•\t   Yenilikçi ve türünün ilk örneği buharlı düzleştirici  <br>\n•\t   Ultra-hızlı ısınma özelliği sayesinde 25 saniyede hazır <br>",
          "erp_parcel_dimension_height": "0",
          "garanti_suresi": "24.0",
          "integration_marka": "01",
          "integration_aile_kodu": "L05",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "integration_products_perparcel": "0",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "DR95",
          "integration_grup2kodu": "M",
          "erp_marka": "01",
          "erp_parcel_dimension_depth": "0",
          "erp_pallet_dimension_depth": "0",
          "garantisure": "2 Yıl",
          "erp_parcel_volume": "0",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_287": {
            "value": "1700 waat",
            "data_type": "dropdown",
            "label": "1700 waat"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_22": {
            "value": "Siyah",
            "data_type": "dropdown",
            "label": "Siyah"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 9258,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10232/e0bd245b-1bd9-47c0-bf7a-00a1cebe977a.jpg",
            "order": 1,
            "created_date": "2022-05-25T11:00:48.355061Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9242,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10232/5251997e-1fcd-4aa7-960a-5feb012f2f99.jpg",
            "order": 2,
            "created_date": "2022-05-25T08:14:56.224109Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9256,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10232/9bd0c4aa-3c7a-4fdd-9ea6-97108778883a.jpg",
            "order": 3,
            "created_date": "2022-05-25T08:52:48.208535Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9243,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10232/98514c5c-36ff-4597-8d42-496897384277.jpg",
            "order": 4,
            "created_date": "2022-05-25T08:14:56.296898Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9245,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10232/bb043f3e-c178-4493-9f7e-1f4b02d961bc.jpg",
            "order": 5,
            "created_date": "2022-05-25T08:14:56.391216Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9244,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10232/d31298bb-b9ea-4cfb-8e37-801c3a059a7f.jpg",
            "order": 6,
            "created_date": "2022-05-25T08:14:56.346303Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9246,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10232/9d43fd99-6de1-455c-badf-6fc1fbb2d325.jpg",
            "order": 7,
            "created_date": "2022-05-25T08:14:56.455942Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "3319.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "3319.90",
        "unit_type": "qty",
        "absolute_url": "/dt9530-pure-tex-4in1-buharli-duzlestirici-1830008196/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 31,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 1148,
        "name": "Ultragliss Plus FV6820 Buharlı Ütü",
        "sku": "1830007810",
        "base_code": "FV682",
        "attributes": {
          "erp_alt_aile_kodu": "L01001",
          "integration_pallet_weight": "0",
          "erp_products_percontainer_c40": "0",
          "integration_editorial_description_title": "Ultragliss Buharlı Ütü: Zahmetsiz ütüleme",
          "erp_attributeId_24": "Durilium Airglide",
          "teslimat_sureleri": "2",
          "ozellik4_aciklama": "260 g / dakikaya kadar güçlü bir buhar püskürtme, daha kalın kumaşlar ve inatçı kırışıklıklar ile başa çıkmak için yeterli ham güç sağlar.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/3D03374D-C82A-4BFE-91EFD27235AA3848/?w=147&h=147&crop=false__Verimli ütüleme sonuçları",
          "ozellik5_aciklama": "Gönül rahatlığı için gelişmiş güvenlik: Ütü gözetimsiz bırakıldığında otomatik olarak bekleme moduna geçer - topukta bırakıldığında 8 dakika sonra ve tabanında veya yanındayken 30 saniye sonra.",
          "yukseklik": "160 mm",
          "integration_attributeId_693": "50 gr/dk",
          "integration_attributeId_24": "Durilium Airglide",
          "integration_picto": "1--Ekstra Güçlü Buhar--Her g&uuml;n g&uuml;venebileceğiniz m&uuml;kemmel sonu&ccedil;lar i&ccedil;in% 25&#39;e kadar daha fazla buhar g&uuml;c&uuml; * sunan y&uuml;ksek performanslı taban ile daha y&uuml;ksek hız ve verimlilik elde edin.|2--Hızlı ısınma için 2800W--G&uuml;nl&uuml;k ihtiya&ccedil;lar i&ccedil;in m&uuml;kemmel buharlı &uuml;t&uuml; sunan 2800W g&uuml;&ccedil;, ihtiya&ccedil; duyduğunuzda yanınızda olan performans i&ccedil;in hızlı ısınma sağlar.|3--Verimli ütüleme sonuçları--50 g / dakikaya kadar s&uuml;rekli buhar &ccedil;ıkışı. Hızlı &uuml;t&uuml;leme seansları i&ccedil;in kolay, anında m&uuml;kemmel sonu&ccedil;lar sunar.|4--Güçlü şok buhar--260 g / dakikaya kadar g&uuml;&ccedil;l&uuml; bir buhar p&uuml;sk&uuml;rtme, daha kalın kumaşlar ve inat&ccedil;ı kırışıklıklar ile başa &ccedil;ıkmak i&ccedil;in yeterli ham g&uuml;&ccedil; sağlar.|5--Güvenli otomatik kapanma--G&ouml;n&uuml;l rahatlığı i&ccedil;in gelişmiş g&uuml;venlik: &Uuml;t&uuml; g&ouml;zetimsiz bırakıldığında otomatik olarak bekleme moduna ge&ccedil;er - topukta bırakıldığında 8 dakika sonra ve tabanında veya yanındayken 30 saniye sonra.|6--Maksimum buhar kapsamı--M&uuml;kemmel sonu&ccedil;lar sağlayan toplam verimlilik i&ccedil;in &ouml;nceki Ultragliss nesillerinden% 30 daha fazla buhar deliği ile maksimum buhar dağıtımı i&ccedil;in% 100 aktif buhar delikleri.|7--Yüksek kaliteli taban--Tefal&#39;ın tabanları arasında kayganlıkta 1. sırada yer alan yeni Durilium Airglide taban, patentli teknolojisi ile dayanıklılık, etkileyici performans ve geniş buhar kapsamı sağlar.|8--Ekonomi modu--&Ccedil;evre dostu performans ve daha d&uuml;ş&uuml;k elektrik faturaları i&ccedil;in% 20&#39;ye kadar daha az enerji gerektiren eko moduyla enerji tasarrufunu yaşayın.|9--Onarılabilir Ürün--<ul><li>Kolay onarılacak şekilde tasarlanmıştır</li><li>10Y+ i&ccedil;in d&uuml;ş&uuml;k bedelli, hızlı yedek par&ccedil;a teslimi </li><li>D&uuml;nya genelinde 6500 onarım merkezi</li></ul>",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_page_description": "Ultragliss Plus FV6820E0",
          "integration_barkod": "3121040078105",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "L01",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "integration_attributeId_105": "Paslanmaz Çelik",
          "integration_products_percontainer_c20": "0",
          "ozellik8_aciklama": "Çevre dostu performans ve daha düşük elektrik faturaları için% 20'ye kadar daha az enerji gerektiren eko moduyla enerji tasarrufunu yaşayın.",
          "integration_detaylar": "{u'eComUrunDetay': [{u'TIPI': u'1', u'HTML_METIN': u'Her g&uuml;n g&uuml;venebilece\\u011finiz m&uuml;kemmel sonu&ccedil;lar i&ccedil;in% 25&#39;e kadar daha fazla buhar g&uuml;c&uuml; * sunan y&uuml;ksek performansl\\u0131 taban ile daha y&uuml;ksek h\\u0131z ve verimlilik elde edin.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto1.jpg', u'BASLIK': u'Ekstra G\\xfc\\xe7l\\xfc Buhar', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'145177'}, {u'TIPI': u'1', u'HTML_METIN': u'G&uuml;nl&uuml;k ihtiya&ccedil;lar i&ccedil;in m&uuml;kemmel buharl\\u0131 &uuml;t&uuml; sunan 2800W g&uuml;&ccedil;, ihtiya&ccedil; duydu\\u011funuzda yan\\u0131n\\u0131zda olan performans i&ccedil;in h\\u0131zl\\u0131 \\u0131s\\u0131nma sa\\u011flar.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto2.jpg', u'BASLIK': u'H\\u0131zl\\u0131 \\u0131s\\u0131nma i\\xe7in 2800W', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'145178'}, {u'TIPI': u'1', u'HTML_METIN': u'50 g / dakikaya kadar s&uuml;rekli buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131. H\\u0131zl\\u0131 &uuml;t&uuml;leme seanslar\\u0131 i&ccedil;in kolay, an\\u0131nda m&uuml;kemmel sonu&ccedil;lar sunar.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto3.jpg', u'BASLIK': u'Verimli \\xfct\\xfcleme sonu\\xe7lar\\u0131', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'145179'}, {u'TIPI': u'1', u'HTML_METIN': u'260 g / dakikaya kadar g&uuml;&ccedil;l&uuml; bir buhar p&uuml;sk&uuml;rtme, daha kal\\u0131n kuma\\u015flar ve inat&ccedil;\\u0131 k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar ile ba\\u015fa &ccedil;\\u0131kmak i&ccedil;in yeterli ham g&uuml;&ccedil; sa\\u011flar.', u'RESIM_URL': None, u'BASLIK': u'G\\xfc\\xe7l\\xfc \\u015fok buhar', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'145180'}, {u'TIPI': u'1', u'HTML_METIN': u'G&ouml;n&uuml;l rahatl\\u0131\\u011f\\u0131 i&ccedil;in geli\\u015fmi\\u015f g&uuml;venlik: &Uuml;t&uuml; g&ouml;zetimsiz b\\u0131rak\\u0131ld\\u0131\\u011f\\u0131nda otomatik olarak bekleme moduna ge&ccedil;er - topukta b\\u0131rak\\u0131ld\\u0131\\u011f\\u0131nda 8 dakika sonra ve taban\\u0131nda veya yan\\u0131ndayken 30 saniye sonra.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto4.jpg', u'BASLIK': u'G\\xfcvenli otomatik kapanma', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'145181'}, {u'TIPI': u'1', u'HTML_METIN': u'M&uuml;kemmel sonu&ccedil;lar sa\\u011flayan toplam verimlilik i&ccedil;in &ouml;nceki Ultragliss nesillerinden% 30 daha fazla buhar deli\\u011fi ile maksimum buhar da\\u011f\\u0131t\\u0131m\\u0131 i&ccedil;in% 100 aktif buhar delikleri.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto5.jpg', u'BASLIK': u'Maksimum buhar kapsam\\u0131', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'145182'}, {u'TIPI': u'1', u'HTML_METIN': u'Tefal&#39;\\u0131n tabanlar\\u0131 aras\\u0131nda kayganl\\u0131kta 1. s\\u0131rada yer alan yeni Durilium Airglide taban, patentli teknolojisi ile dayan\\u0131kl\\u0131l\\u0131k, etkileyici performans ve geni\\u015f buhar kapsam\\u0131 sa\\u011flar.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto6.jpg', u'BASLIK': u'Y\\xfcksek kaliteli taban', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'145183'}, {u'TIPI': u'1', u'HTML_METIN': u'&Ccedil;evre dostu performans ve daha d&uuml;\\u015f&uuml;k elektrik faturalar\\u0131 i&ccedil;in% 20&#39;ye kadar daha az enerji gerektiren eko moduyla enerji tasarrufunu ya\\u015fay\\u0131n.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto7.jpg', u'BASLIK': u'Ekonomi modu', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'145184'}, {u'TIPI': u'1', u'HTML_METIN': u'<ul><li>Kolay onar\\u0131lacak \\u015fekilde tasarlanm\\u0131\\u015ft\\u0131r</li><li>10Y+ i&ccedil;in d&uuml;\\u015f&uuml;k bedelli, h\\u0131zl\\u0131 yedek par&ccedil;a teslimi </li><li>D&uuml;nya genelinde 6500 onar\\u0131m merkezi</li></ul>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto8.jpg', u'BASLIK': u'Onar\\u0131labilir \\xdcr\\xfcn', u'SIRANO': u'9.000000', u'GECERLI': u'true', u'DETAY_ID': u'145185'}]}",
          "erp_pallet_volume": "0",
          "erp_parcel_dimension_depth": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "L01",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "compare_product_slug": "buharli-utuler-compare",
          "erp_products_percontainer_hq4": "0",
          "short_description": "• Maksimum buhar dağılımı<br>\n• Durilium taban teknolojisi<br>\n• Akıllı otomatik kapanma<br>\n• Enerji tasarrufu<br>\n• Hızlı ısınma<br>\n• Eco modu<br>\n• Yüksek buhar gücü<br>",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/8BEA91EE-ECE1-43B8-970A236E37D4E571/?w=147&h=147&crop=false__Ekonomi modu",
          "ozellik2_aciklama": "Günlük ihtiyaçlar için mükemmel buharlı ütü sunan 2800W güç, ihtiyaç duyduğunuzda yanınızda olan performans için hızlı ısınma sağlar.",
          "erp_detaylar": "{u'eComUrunDetay': [{u'TIPI': u'1', u'HTML_METIN': u'Her g&uuml;n g&uuml;venebilece\\u011finiz m&uuml;kemmel sonu&ccedil;lar i&ccedil;in% 25&#39;e kadar daha fazla buhar g&uuml;c&uuml; * sunan y&uuml;ksek performansl\\u0131 taban ile daha y&uuml;ksek h\\u0131z ve verimlilik elde edin.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto1.jpg', u'BASLIK': u'Ekstra G\\xfc\\xe7l\\xfc Buhar', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'145177'}, {u'TIPI': u'1', u'HTML_METIN': u'G&uuml;nl&uuml;k ihtiya&ccedil;lar i&ccedil;in m&uuml;kemmel buharl\\u0131 &uuml;t&uuml; sunan 2800W g&uuml;&ccedil;, ihtiya&ccedil; duydu\\u011funuzda yan\\u0131n\\u0131zda olan performans i&ccedil;in h\\u0131zl\\u0131 \\u0131s\\u0131nma sa\\u011flar.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto2.jpg', u'BASLIK': u'H\\u0131zl\\u0131 \\u0131s\\u0131nma i\\xe7in 2800W', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'145178'}, {u'TIPI': u'1', u'HTML_METIN': u'50 g / dakikaya kadar s&uuml;rekli buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131. H\\u0131zl\\u0131 &uuml;t&uuml;leme seanslar\\u0131 i&ccedil;in kolay, an\\u0131nda m&uuml;kemmel sonu&ccedil;lar sunar.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto3.jpg', u'BASLIK': u'Verimli \\xfct\\xfcleme sonu\\xe7lar\\u0131', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'145179'}, {u'TIPI': u'1', u'HTML_METIN': u'260 g / dakikaya kadar g&uuml;&ccedil;l&uuml; bir buhar p&uuml;sk&uuml;rtme, daha kal\\u0131n kuma\\u015flar ve inat&ccedil;\\u0131 k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar ile ba\\u015fa &ccedil;\\u0131kmak i&ccedil;in yeterli ham g&uuml;&ccedil; sa\\u011flar.', u'RESIM_URL': None, u'BASLIK': u'G\\xfc\\xe7l\\xfc \\u015fok buhar', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'145180'}, {u'TIPI': u'1', u'HTML_METIN': u'G&ouml;n&uuml;l rahatl\\u0131\\u011f\\u0131 i&ccedil;in geli\\u015fmi\\u015f g&uuml;venlik: &Uuml;t&uuml; g&ouml;zetimsiz b\\u0131rak\\u0131ld\\u0131\\u011f\\u0131nda otomatik olarak bekleme moduna ge&ccedil;er - topukta b\\u0131rak\\u0131ld\\u0131\\u011f\\u0131nda 8 dakika sonra ve taban\\u0131nda veya yan\\u0131ndayken 30 saniye sonra.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto4.jpg', u'BASLIK': u'G\\xfcvenli otomatik kapanma', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'145181'}, {u'TIPI': u'1', u'HTML_METIN': u'M&uuml;kemmel sonu&ccedil;lar sa\\u011flayan toplam verimlilik i&ccedil;in &ouml;nceki Ultragliss nesillerinden% 30 daha fazla buhar deli\\u011fi ile maksimum buhar da\\u011f\\u0131t\\u0131m\\u0131 i&ccedil;in% 100 aktif buhar delikleri.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto5.jpg', u'BASLIK': u'Maksimum buhar kapsam\\u0131', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'145182'}, {u'TIPI': u'1', u'HTML_METIN': u'Tefal&#39;\\u0131n tabanlar\\u0131 aras\\u0131nda kayganl\\u0131kta 1. s\\u0131rada yer alan yeni Durilium Airglide taban, patentli teknolojisi ile dayan\\u0131kl\\u0131l\\u0131k, etkileyici performans ve geni\\u015f buhar kapsam\\u0131 sa\\u011flar.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto6.jpg', u'BASLIK': u'Y\\xfcksek kaliteli taban', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'145183'}, {u'TIPI': u'1', u'HTML_METIN': u'&Ccedil;evre dostu performans ve daha d&uuml;\\u015f&uuml;k elektrik faturalar\\u0131 i&ccedil;in% 20&#39;ye kadar daha az enerji gerektiren eko moduyla enerji tasarrufunu ya\\u015fay\\u0131n.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto7.jpg', u'BASLIK': u'Ekonomi modu', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'145184'}, {u'TIPI': u'1', u'HTML_METIN': u'<ul><li>Kolay onar\\u0131lacak \\u015fekilde tasarlanm\\u0131\\u015ft\\u0131r</li><li>10Y+ i&ccedil;in d&uuml;\\u015f&uuml;k bedelli, h\\u0131zl\\u0131 yedek par&ccedil;a teslimi </li><li>D&uuml;nya genelinde 6500 onar\\u0131m merkezi</li></ul>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2849_img1_picto8.jpg', u'BASLIK': u'Onar\\u0131labilir \\xdcr\\xfcn', u'SIRANO': u'9.000000', u'GECERLI': u'true', u'DETAY_ID': u'145185'}]}",
          "ozellik9_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B889EFEC-D020-4113-9C21EADC2B71A4DC/?w=147&h=147&crop=false__Kolay erişilen hassas uç",
          "integration_layers_perpallet": "0",
          "erp_serisonuflg": "false",
          "erp_barkod": "3121040078105",
          "erp_range": "FV682",
          "product_line": "LINEN CARE",
          "agirlik": "1,295 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/465EAF12-FDB8-4701-B37907962AA082B6/?w=147&h=147&crop=false__Güvenli otomatik kapanma",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "min_stok": "10",
          "integration_page_title": "Ultragliss Plus FV6820E0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "downloadable_image_title": "https://tefal.akinoncdn.com/cms/2021/11/03/4e95126c-3dfd-452e-bb73-613d06e8eca5.pdf",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "270 ml",
          "integration_grup2kodu": "M",
          "erp_is_seo_automatic": "true",
          "genislik": "310 mm",
          "integration_alt_aile_kodu": "L01001",
          "integration_attributeId_49": "260 g/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/7DBE57D1-6348-432E-9A0D621C7E2B4C65/?w=147&h=147&crop=false__Ekstra güçlü buhar",
          "ozellik9_aciklama": "Ütünün ucu, düğmelerin etrafındaki ütülemeyi daha kolay hale getiren özel bir şekle sahiptir.",
          "erp_page_description": "Ultragliss Plus FV6820E0",
          "erp_agirlik": "1295",
          "ozellik6_aciklama": "Mükemmel sonuçlar sağlayan toplam verimlilik için önceki Ultragliss nesillerinden% 30 daha fazla buhar deliği ile maksimum buhar dağıtımı için% 100 aktif buhar delikleri.",
          "integration_products_percontainer_c40": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_page_title": "Ultragliss Plus FV6820E0",
          "integration_attributeId_730": "2 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/0B8B477F-F1A5-4820-B98C430BF631E3DF/?w=147&h=147&crop=false__Hızlı ısınma için 2800W",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "integration_sirketkodu": "2006_GSEB",
          "erp_attributeId_49": "260 g/dk",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Olağanüstü kayganlık ve yüksek verimliliği birarada sunan Ultragliss Buharlı Ütü, üstün ütüleme performansını parmağınızın ucuna getirir. Durilium taban teknolojisinin üstün kayganlık performansı ile hızlı ve kolay ütüleme işlemi yapabilirsiniz. Ütünün uç, yan ve taban merkezinde yer alan aktif buhar delikleri olağanüstü kayganlık ve yüksek verimliliği bir arada sunar. Ayrıca çizilmeye karşı ekstra dayanıklıdır. Fransa'da yüksek kalite standartlarına uygun şekilde üretilen ve test edilen Durilium tabanlı ütüler benzersiz bir ütü deneyimi sunar. Çok yönlü tabanla tamamlanan Ultragliss Buharlı Ütü hızlı ve zahmetsiz ütüleme işlemleri yapmanıza yardımcı olur.<br><br>Groupe SEB N.1 Avrupa'nın 1 Numaralı Ütü Üreticisi*<br><br>*Euromonitor International Limited, ütü kategorisi,Groupe SEB’in ütü markalarının 2019 yılındaki toplam hacim bazında perakende satışı (Tefal, Calor,Rowenta, OBH Nortica)",
          "ozellik7_aciklama": "Tefal'ın tabanları arasında kayganlıkta 1. sırada yer alan yeni Durilium Airglide taban, patentli teknolojisi ile dayanıklılık, etkileyici performans ve geniş buhar kapsamı sağlar.",
          "ozellik1_aciklama": "Her gün güvenebileceğiniz mükemmel sonuçlar için% 25'e kadar daha fazla buhar gücü * sunan yüksek performanslı taban ile daha yüksek hız ve verimlilik elde edin.",
          "integration_parcel_dimension_depth": "0",
          "ozellik4_baslik": "Güçlü şok buhar",
          "integration_attributeId_22": "Bordo",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "erp_gecerli": "true",
          "erp_picto": "1--Ekstra Güçlü Buhar--Her g&uuml;n g&uuml;venebileceğiniz m&uuml;kemmel sonu&ccedil;lar i&ccedil;in% 25&#39;e kadar daha fazla buhar g&uuml;c&uuml; * sunan y&uuml;ksek performanslı taban ile daha y&uuml;ksek hız ve verimlilik elde edin.|2--Hızlı ısınma için 2800W--G&uuml;nl&uuml;k ihtiya&ccedil;lar i&ccedil;in m&uuml;kemmel buharlı &uuml;t&uuml; sunan 2800W g&uuml;&ccedil;, ihtiya&ccedil; duyduğunuzda yanınızda olan performans i&ccedil;in hızlı ısınma sağlar.|3--Verimli ütüleme sonuçları--50 g / dakikaya kadar s&uuml;rekli buhar &ccedil;ıkışı. Hızlı &uuml;t&uuml;leme seansları i&ccedil;in kolay, anında m&uuml;kemmel sonu&ccedil;lar sunar.|4--Güçlü şok buhar--260 g / dakikaya kadar g&uuml;&ccedil;l&uuml; bir buhar p&uuml;sk&uuml;rtme, daha kalın kumaşlar ve inat&ccedil;ı kırışıklıklar ile başa &ccedil;ıkmak i&ccedil;in yeterli ham g&uuml;&ccedil; sağlar.|5--Güvenli otomatik kapanma--G&ouml;n&uuml;l rahatlığı i&ccedil;in gelişmiş g&uuml;venlik: &Uuml;t&uuml; g&ouml;zetimsiz bırakıldığında otomatik olarak bekleme moduna ge&ccedil;er - topukta bırakıldığında 8 dakika sonra ve tabanında veya yanındayken 30 saniye sonra.|6--Maksimum buhar kapsamı--M&uuml;kemmel sonu&ccedil;lar sağlayan toplam verimlilik i&ccedil;in &ouml;nceki Ultragliss nesillerinden% 30 daha fazla buhar deliği ile maksimum buhar dağıtımı i&ccedil;in% 100 aktif buhar delikleri.|7--Yüksek kaliteli taban--Tefal&#39;ın tabanları arasında kayganlıkta 1. sırada yer alan yeni Durilium Airglide taban, patentli teknolojisi ile dayanıklılık, etkileyici performans ve geniş buhar kapsamı sağlar.|8--Ekonomi modu--&Ccedil;evre dostu performans ve daha d&uuml;ş&uuml;k elektrik faturaları i&ccedil;in% 20&#39;ye kadar daha az enerji gerektiren eko moduyla enerji tasarrufunu yaşayın.|9--Onarılabilir Ürün--<ul><li>Kolay onarılacak şekilde tasarlanmıştır</li><li>10Y+ i&ccedil;in d&uuml;ş&uuml;k bedelli, hızlı yedek par&ccedil;a teslimi </li><li>D&uuml;nya genelinde 6500 onarım merkezi</li></ul>",
          "erp_parcel_dimension_height": "0",
          "integration_attributeId_50": "Var",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "2800 watt",
          "ozellik3_aciklama": "50 g / dakikaya kadar sürekli buhar çıkışı. Hızlı ütüleme seansları için kolay, anında mükemmel sonuçlar sunar.",
          "integration_model": "FV6820 Bordo",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/FA5356C2-DE31-4EDD-8FD9AEAA8180FBCD/?w=147&h=147&crop=false__Yüksek kaliteli taban",
          "downloadable_link": "https://tefal.akinoncdn.com/cms/2021/11/03/a2cc0f9f-b00b-4a4c-b8ea-f61abd60f109.jpe__Kullanım Kılavuzu",
          "erp_attributeId_51": "270 ml",
          "integration_products_percontainer_hq4": "0",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "FV682",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/0FFEC0FD-B13A-4ADB-8C0B1FF84BA9E80E/?w=147&h=147&crop=false__Maksimum buhar kapsamı",
          "erp_pallet_dimension_depth": "0",
          "derinlik": "135 mm",
          "integration_agirlik": "1,295 kg",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_attributeId_227": "Var",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 6,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "260 g/dk",
            "data_type": "dropdown",
            "label": "260 gr/dk"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_attributeId_24": {
            "value": "Durilium Airglide",
            "data_type": "dropdown",
            "label": "Durilium Airglide"
          },
          "integration_attributeId_693": {
            "value": "50 gr/dk",
            "data_type": "dropdown",
            "label": "50 gr/dk"
          },
          "integration_attributeId_730": {
            "value": "2 m",
            "data_type": "dropdown",
            "label": "2 m"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_24": {
            "value": "Durilium Airglide",
            "data_type": "dropdown",
            "label": "Durilium Airglide"
          },
          "integration_attributeId_22": {
            "value": "Bordo",
            "data_type": "dropdown",
            "label": "Bordo"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_attributeId_49": {
            "value": "260 g/dk",
            "data_type": "dropdown",
            "label": "260 g/dk"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_51": {
            "value": "270 ml",
            "data_type": "dropdown",
            "label": "270 ml"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_287": {
            "value": "2800 watt",
            "data_type": "dropdown",
            "label": "2800 watt"
          },
          "erp_attributeId_51": {
            "value": "270 ml",
            "data_type": "dropdown",
            "label": "270 ml"
          },
          "integration_attributeId_105": {
            "value": "Paslanmaz Çelik",
            "data_type": "dropdown",
            "label": "Paslanmaz Çelik"
          },
          "product_line": {
            "value": "LINEN CARE",
            "data_type": "dropdown",
            "label": "LINEN CARE"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": true
        },
        "productimage_set": [
          {
            "pk": 2781,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/11/03/2161/3b37c8cc-48f5-49e7-b078-b560bcff03df.jpg",
            "order": 0,
            "created_date": "2020-11-03T08:03:43.930881Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 2784,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/11/03/2161/bae6c3b9-fd98-42c4-b392-f017f8c30135.jpg",
            "order": 1,
            "created_date": "2020-11-03T08:03:44.062044Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 2792,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/11/03/2161/ec0fcb21-e044-4d50-888d-90c9e21ef4e2.jpg",
            "order": 2,
            "created_date": "2020-11-03T08:03:44.387513Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 2783,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/11/03/2161/91f2a961-c3aa-46b6-9e54-65a7c1d6346d.jpg",
            "order": 3,
            "created_date": "2020-11-03T08:03:44.020942Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 2786,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/11/03/2161/ec0fcb21-e044-4d50-888d-90c9e21ef4e2.jpg",
            "order": 4,
            "created_date": "2020-11-03T08:03:44.138300Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 2791,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/11/03/2161/1b00699a-f9e1-4e8c-a640-38687f843b72.jpg",
            "order": 5,
            "created_date": "2020-11-03T08:03:44.350220Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 2790,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/11/03/2161/30bbbd0b-ea61-426e-a2b3-7201f062e896.jpg",
            "order": 6,
            "created_date": "2020-11-03T08:03:44.314009Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 2789,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/11/03/2161/20fbc75a-c783-411c-9a5d-a9c8ccddd17c.jpg",
            "order": 7,
            "created_date": "2020-11-03T08:03:44.275243Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "1849.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "1849.90",
        "unit_type": "qty",
        "absolute_url": "/ultragliss-plus-fv6820-buharli-utu-1830007810/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 54,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3565,
        "name": "Pro Express Ultimate II GV9720 Buhar Kazanlı Ütü",
        "sku": "1830008513",
        "base_code": "GV972",
        "attributes": {
          "integration_pallet_weight": "0",
          "integration_editorial_description_title": "Günden güne ultra güçlü",
          "ozellik4_aciklama": "Hassas ve büyük giysilerin ütülenmesi, takım elbise ve diğer askılı giysilerde, hatta perdelerde bile kırışıklıkları gidermek için ideal olan dikey ütüleme özelliği ile kolaylaştırılmıştır.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/C091D644-95E3-4081-B7C2A78E5C6D1CD9/?w=147&h=147&crop=false__Uzun süreli buhar performansı",
          "ozellik5_aciklama": "Kilit sistemi, tam rahatlık için kolay taşımanızı ve saklamanızı sağlar.",
          "integration_attributeId_22": "Siyah",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_barkod": "3121040085134",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "L02",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "L02",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "compare_product_slug": "buhar-kazanli-utuler-compare",
          "erp_products_percontainer_hq4": "0",
          "ozellik2_aciklama": "Tüm giysi bakım ihtiyaçlarınızı karşılamak için basit bir Hassas, Normal veya Maks işlevleri seçimi - kullanım kolaylığı için kontroller parmaklarınızın ucunda.",
          "integration_layers_perpallet": "0",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/47CA48A2-81FC-45F4-9B69BCD116E24CF5/?w=147&h=147&crop=false__Kolay dikey ütüleme",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3121040085134",
          "erp_range": "GV972",
          "agirlik": "5.34 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/FB469040-ED23-4915-9D381C86981A2664/?w=147&h=147&crop=false__Kolay ve güvenli taşıma",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "1,2 L",
          "integration_grup2kodu": "M",
          "erp_is_seo_automatic": "true",
          "integration_alt_aile_kodu": "L02141",
          "integration_attributeId_49": "Yok",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/0212FDCA-476A-4C25-834E411CDC2A7869/?w=147&h=147&crop=false__Ultra güçlü buhar",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "5340",
          "ozellik6_aciklama": "Benzersiz bir gönül rahatlığı için su damlacıklarını buhara dönüştüren özel damlama önleyici sistemimiz sayesinde tüm giysilerinizin lekesiz ve mükemmel durumda kalmasını sağlayın.",
          "integration_products_percontainer_c40": "0",
          "integration_attributeId_47": "8 bar",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "1,6 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/D45F4237-51D8-47A6-AB1818BCA37DF43D/?w=147&h=147&crop=false__Kolay ve çok yönlü kontrol",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Tefal Pro Express Ultimate II, her gün hayatı kolaylaştıran bir buhar kazanlı ütü için ultra güçlü buharı akıllı özellikler ve tasarımla bir araya getiriyor. Olağanüstü buhar gücü—8 bar yüksek basınç, devam. 170 g/dk'ya kadar buhar çıkışı ve ekstra güçlü 590 g/dakika şok buhar—parmaklarınızın ucundaki üç kolay ayar ve giysi bakımını her gün kolaylaştıran eksiksiz bir dizi gelişmiş özellik ile yüksek verimli sonuçlar sağlar.",
          "ozellik7_aciklama": "Dünya çapında 6500'den fazla onarım merkezi sayesinde, 15 yıl ve daha uzun süredir yedek parçaların düşük maliyetli ve hızlı teslimatı ile kolay onarım için tasarlanmıştır.",
          "ozellik1_aciklama": "Tüm ihtiyaçlarınızı karşılamak için olağanüstü buhar gücü: 8 bar yüksek basınç, 170 g/dk sürekli buhar çıkışı ve en inatçı kırışıklıkların bile üstesinden gelmek için ekstra güçlü 590 g/dk şok buhar.",
          "erp_alt_aile_kodu": "L02141",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "short_description": "•\tUltra güçlü buhar : 8 bar, 590gr/dk <br> •\tDikey buharlama <br> •\tKilit sistemi : Kolay ve güvenli taşıma <br> •\t3000 W Güç",
          "erp_parcel_dimension_height": "0",
          "integration_marka": "01",
          "integration_attributeId_287": "3000 watt",
          "ozellik3_aciklama": "Çıkarılabilir kireç toplayıcı sistemimiz birikmeyi önler ve daha uzun ürün ömrü sağlayarak 10 kata kadar daha fazla kireç parçacığı toplar*. *rakiplerin ürünleriyle karşılaştırıldığında.",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "kilit_sistemi": "Var",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/10A632B0-83CA-40B5-924F4F58E25545F4/?w=147&h=147&crop=false__15 yıl tamir edilebilirlik",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "integration_range": "GV972",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/111814FA-B5C4-46C3-92C4E4257ABCC424/?w=147&h=147&crop=false__Özel damlama önleyici koruma",
          "erp_pallet_dimension_depth": "0",
          "erp_products_percontainer_c40": "0",
          "integration_agirlik": "5340",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "Yok",
            "data_type": "dropdown",
            "label": "Yok"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_287": {
            "value": "3000 watt",
            "data_type": "dropdown",
            "label": "3000 watt"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_51": {
            "value": "1,2 L",
            "data_type": "dropdown",
            "label": "1,2 L"
          },
          "integration_attributeId_47": {
            "value": "8 bar",
            "data_type": "dropdown",
            "label": "8 bar"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_730": {
            "value": "1,6 m",
            "data_type": "dropdown",
            "label": "1,6 m"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_22": {
            "value": "Siyah",
            "data_type": "dropdown",
            "label": "Siyah"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 10724,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10696/8d987f71-d460-48ed-b9c4-37fbe8c92da7.jpg",
            "order": 1,
            "created_date": "2023-01-10T06:57:34.727893Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10719,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10696/21ab6b1f-f829-4106-b582-0b336d7b5067.jpg",
            "order": 2,
            "created_date": "2023-01-10T06:57:34.407254Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10720,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10696/3b9dd96f-6e64-405d-88e7-b53cb1aeef65.jpg",
            "order": 3,
            "created_date": "2023-01-10T06:57:34.495049Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10725,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10696/46364d55-3505-46e8-9d27-d86d374cd44e.jpg",
            "order": 4,
            "created_date": "2023-01-10T06:57:34.795276Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10721,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10696/89cb8b72-8fdb-4971-8408-c0149595ef46.jpg",
            "order": 5,
            "created_date": "2023-01-10T06:57:34.538274Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10722,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10696/4883551d-10b5-4f7e-ae01-b566adcfdf88.jpg",
            "order": 6,
            "created_date": "2023-01-10T06:57:34.600775Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10723,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/09/10696/c60c7d26-5cb7-456f-8d6a-d732314d019a.jpg",
            "order": 7,
            "created_date": "2023-01-10T06:57:34.669946Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "6759.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "6759.90",
        "unit_type": "qty",
        "absolute_url": "/pro-express-ultimate-ii-gv9720-buhar-kazanli-utu-1830008513/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 15,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 2213,
        "name": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürge - Mavi",
        "sku": "2211400810",
        "base_code": "TW769",
        "attributes": {
          "erp_alt_aile_kodu": "E01161",
          "integration_pallet_weight": "0",
          "integration_attributeId_67": "POWER AIR Başlık, Maxi Turbo Başlık, Mini Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Entegre Easy Brush",
          "ozellik13_baslik": "https://tefal.akinoncdn.com/cms/2021/03/30/1728cdc4-2c39-4632-8536-91def826af1d.jpe__%100’e Kadar Alerjen Filtrelemesi",
          "integration_editorial_description_title": "Üstün Performansın Sessizlik ile Buluşması",
          "performans_verimliligi": "2100 W",
          "teslimat_sureleri": "2",
          "ozellik4_aciklama": "Mükemmel tasarlanmış kilit sistemi, kolay toz haznesi boşaltma işleminin yanı sıra kazara açılmalarıda azaltır.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B7D86D58-C14E-415F-8D16778119711DB6/?w=147&h=147&crop=false__Özel ve Yenilikçi POWER AIR Başlık",
          "ozellik5_aciklama": "Geliştirilmiş siklonik teknoloji ve yüksek verimli filtreler, tozların %99,98’ini* yakalar.",
          "sss4_cevap": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürge üç aşamalı köpük + siklon + yüksek verimli filtre sistemini kullanır.",
          "integration_attributeId_22": "Mavi",
          "sss4_soru": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgenin filtreleme sistemi nasıldır?",
          "ozellik14_baslik": "https://tefal.akinoncdn.com/cms/2021/03/30/4e6d914c-5800-47f5-a628-89ea3053e9f6.png__2100 Watt Güç Verimliliği",
          "erp_pallet_weight": "0",
          "sss6_cevap": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgede bulunan siklon teknolojisi oluşturduğu hava akışıyla, istenmeyen toz parçacıklarını haznesinde toplar. Oluşturduğu girdap ve filtre sayesinde tozun dışarıya çıkmasını engeller.",
          "integration_barkod": "3221616000254",
          "parca_sayisi": "3",
          "erp_pallet_dimension_height": "0",
          "toz_torbasi": "Yok",
          "integration_is_seo_automatic": "true",
          "toz_kapasitesi": "2,5 L",
          "erp_packed_dimension_depth": "0",
          "ozellik11_aciklama": "Size özel müşteri temsilciniz ile tüm sorularınıza daha hızlı çözüm bulacak, Süpürgenin Uzmanlarından tüm Tefal ürünlerine dair detaylı destek alabilecek ve size özel kampanyalardan anında haberdar olacaksınız. Kampanyadan yararlanmak için ürününüzü, tefalplus.com websitesine fatura tarihinden itibaren 30 gün içerisinde kaydedebilirsiniz.",
          "erp_aile_kodu": "E01",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "sss5_soru": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgenin kullanım yarıçapı kaç metredir?",
          "erp_serisonuflg": "false",
          "ozellik11_baslik": "https://tefal.akinoncdn.com/cms/2021/03/30/e3a1dd84-837c-4469-b77e-014d0e9da450.png__VIP Müşteri Hizmetleri",
          "integration_products_percontainer_c20": "0",
          "ozellik12_aciklama": "Tefal, 10 yıl boyunca ürününüzün olası bakım ve onarımları için yedek parça bulundurmayı garanti etmektedir.",
          "ozellik8_aciklama": "Toz haznesinin daha az boşaltılmasını sağlayan 2,5 L’lik geniş kapasitesi, yüksek otonomi seviyesi ve pratiklik sunar..",
          "erp_pallet_volume": "0",
          "motor_gucu": "750 watt",
          "ozellik13_aciklama": "Alerjenleri %100’e kadar filtreler, temizlik sırasında ve temizlik sonrasında mükemmel bir konfor sunar.",
          "integration_aile_kodu": "E01",
          "integration_products_perplayer": "0",
          "erp_products_percontainer_c20": "0",
          "erp_layers_perpallet": "0",
          "erp_products_percontainer_hq4": "0",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/A0EE7FBC-7E9A-4ECA-B41CF1BEB9506E8D/?w=147&h=147&crop=false__Geniş Toz Hazne Kapasitesi",
          "ozellik2_aciklama": "Air Booster ve ileri Siklon Teknolojileri ile çalışan bu elektrik süpürgesi, her türlü zeminde sınıfının en iyisi toz toplama kabiliyetine sahiptir.",
          "erp_defoluflg": "false",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3221616000254",
          "erp_range": "TW769",
          "product_line": "HOME CLEANING",
          "agirlik": "9,785 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B5125B03-7E8E-4E62-9C620A4FA7DEB93A/?w=147&h=147&crop=false__Geliştirilmiş Temizlik ve Üstün Filtreleme",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "min_stok": "10",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "sss6_soru": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgede bulunan siklon teknolojisi ne işe yarar?",
          "integration_attributeId_51": "Var",
          "integration_grup2kodu": "L",
          "erp_is_seo_automatic": "true",
          "garantisure": "2 Yıl",
          "ozellik12_baslik": "https://tefal.akinoncdn.com/cms/2022/02/04/a717e518-07f3-4498-b0e3-963bad95c47e.jpe__Yedek Parça Güvencesi",
          "integration_alt_aile_kodu": "E01161",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/A096E1A8-11C3-4FEB-A6CFBC25CA254DFB/?w=147&h=147&crop=false__En İyi Performans ve Kusursuz Sessizlik",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "9785",
          "ozellik6_aciklama": "Yalnızca 65 dB (A) düzeyinde benzersiz bir sessizlik derecesi ile çarpıcı performansı yaşayın, bu seviye günlük konuşmalardan sadece biraz daha yüksek bir ses seviyesidir.",
          "sss2_soru": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgenin aksesuarları nelerdir?",
          "kullanim_yaricapi": "11 m",
          "ozellik14_aciklama": "EffiWatts Teknolojisi Sayesinde yalnızca 550W tüketimle 2100 Watt’lık süpürgelerle eşdeğer çekiş gücü sunar.",
          "integration_products_percontainer_c40": "0",
          "toz_haznesi": "2,5 L",
          "sss1_cevap": "POWER AIR Başlık, her türlü temizliğin üstesinden gelmek için tasarlanmış iki pozisyona sahip bir toz fırçasıdır ve her yüzeyde kusursuz kayma hissi ile derinlemesine temizlik sunar.",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "8,4 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/8EABC149-1B47-4FCE-81F0D41ED80A2BC6/?w=147&h=147&crop=false__Yüksek Performanslı Siklon Teknolojisi",
          "integration_agirlik": "9,785 kg",
          "erp_gecerliflg": "true",
          "erp_products_percontainer_c40": "0",
          "erp_gecerli": "true",
          "sss2_cevap": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürge Power Air Başlık, Maxi Turbo Başlık, Mini Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Entegre Easy Brush aksesuarlarını içermektedir.",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Sessizlik ve performansı parmaklarınızın ucuna getiren Silence Force 5 ★ <a href=\"https://www.tefal.com.tr/elektrikli-ev-aletleri/torbasiz-supurgeler/\">Torbasız Süpürge</a> gücün ve konforun mutlak zirvesini temsil eder. Silence Force Cyclonic, sert zeminlerden halıya her yüzeyde mükemmel temizlik sonuçları ve kullanım kolaylığı sağlayan yeni POWER AIR 2 konumlu yüksek verimli emme başlığı ile birlikte tasarlanmıştır Yüksek performans ve gelişmiş ergonomi özel olarak geliştirilmiştir kilit sistemi zahmetsizce tozlardan kurtulmanızı sağlar ve kolay taşınabilen büyük bir Ergo Comfort kolu, taşımanızı ve muhafaza etmenizi son derece kolaylaştırır Gelişmiş siklonik teknoloji, 99 98 tozu hapseder. * Tüm bunlar, günlük konuşmanın çok az üstünde bir ses seviyesinde gerçekleşir.",
          "sss3_cevap": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgede EffiWatts Teknolojisi Sayesinde yalnızca 550W tüketimle 2100 Watt’lık süpürgelerle eşdeğer çekiş gücü sunar.",
          "ozellik7_aciklama": "POWER AIR’in 2 pozisyonlu sistemi, hassas sert zeminlerden standart bir fırçayla süpürmesi daha zor olabilen alçak ve yüksek tüylü halılara kadar her tür zeminde mükemmel kayma hissi sağlar.",
          "ozellik1_aciklama": "Tavizsiz temizlik performansı standartlarıyla daha fazla konfor ve sıradışı sessizlik.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/53A4410F-09D3-4817-9ED6130BC91FD590/?w=147&h=147&crop=false__Geliştirilmiş Ergonomi ile Mükemmel Toz Yönetimi",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "erp_grup2kodu": "L",
          "short_description": "•  65 db(A) ses seviyesi<br>\n•  Tüm zeminlere uygun Power Air başlığı<br>\n•  EffiTech motor<br>\n•  Gelişmiş siklon teknolojisi<br>\n•  Kolay taşıma ve saklama<br>\n•  2,5 litre toz kapasitesi<br>",
          "erp_parcel_dimension_height": "0",
          "erp_pallet_dimension_width": "0",
          "tutma_yeri": "Ergo Comfort sap",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "550 watt",
          "ozellik3_aciklama": "Yenilikçi yeni 2 pozisyonlu yüksek verimli başlık, sert zeminler, alçak ve yüksek tüylü halılar dahil olmak üzere her yüzeyde çok yönlü performans ve mükemmel sonuçlar sunar.",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "genel_bakis_web_gorsel": "https://tefal.akinoncdn.com/cms/2022/04/27/1158cac1-3d46-48fb-9baa-829af285a6dd.jpe",
          "sss1_soru": "Power Air başlık nedir?",
          "sss3_soru": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgede bulunan EffiWatts teknolojisi ne işe yarar?",
          "integration_products_perparcel": "0",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/CEB25341-96BD-41F5-AFAD76256AA623A5/?w=147&h=147&crop=false__Mükemmel Konfor İçin Özel POWER AIR Fırça",
          "integration_attributeId_34": "65 db",
          "integration_pallet_dimension_width": "0",
          "integration_attributeId_21": "Toz Torbasız",
          "iade_kategori": "yurtici",
          "integration_range": "TW769",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/EBF3B3B2-5985-4977-9E2F4810E672BC1C/?w=147&h=147&crop=false__Olağanüstü Konfor İçin Tam Sessizlik",
          "erp_pallet_dimension_depth": "0",
          "integration_attributeId_87": "Köpük + Siklon + Yüksek Verimli Filtre",
          "sss5_cevap": "TW7690 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgenin kullanım yarıçapı 11 metredir.",
          "erp_parcel_volume": "0",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "genel_bakis_mobil_gorsel": "https://tefal.akinoncdn.com/cms/2022/04/27/1158cac1-3d46-48fb-9baa-829af285a6dd.jpe",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 6,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_287": {
            "value": "550 watt",
            "data_type": "dropdown",
            "label": "550 watt"
          },
          "integration_attributeId_67": {
            "value": "POWER AIR Başlık, Maxi Turbo Başlık, Mini Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Entegre Easy Brush",
            "data_type": "dropdown",
            "label": "POWER AIR Başlık, Maxi Turbo Başlık, Mini Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Entegre Easy Brush"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_87": {
            "value": "Köpük + Siklon + Yüksek Verimli Filtre",
            "data_type": "dropdown",
            "label": "Köpük + Siklon + Yüksek Verimli Filtre"
          },
          "integration_attributeId_51": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "product_line": {
            "value": "HOME CLEANING",
            "data_type": "dropdown",
            "label": "HOME CLEANING"
          },
          "integration_attributeId_730": {
            "value": "8,4 m",
            "data_type": "dropdown",
            "label": "8,4 m"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_34": {
            "value": "65 db",
            "data_type": "dropdown",
            "label": "65 db"
          },
          "integration_attributeId_22": {
            "value": "Mavi",
            "data_type": "dropdown",
            "label": "Mavi"
          },
          "integration_attributeId_21": {
            "value": "Toz Torbasız",
            "data_type": "dropdown",
            "label": "Toz Torbasız"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 5050,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4593/d8c8c390-2419-49d6-b510-f6f65a203e31.jpg",
            "order": 1,
            "created_date": "2021-03-24T13:25:39.480564Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5054,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4593/23fdb72d-5b2a-4bd5-919e-39896aeaff8c.jpg",
            "order": 2,
            "created_date": "2021-03-24T13:25:39.822901Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5059,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4593/78830d71-2039-48f6-bbf6-50d195686025.jpg",
            "order": 3,
            "created_date": "2021-03-24T13:25:40.181446Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5063,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/03/4593/56a361f4-41e3-4d8a-9e1b-07f24d06cedc.jpg",
            "order": 4,
            "created_date": "2021-03-24T13:25:40.472006Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5166,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4593/45bf3164-119a-40a4-b583-9f67fec48fad.jpg",
            "order": 5,
            "created_date": "2021-03-24T15:39:13.509091Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5168,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4593/48f8422a-eefc-475d-9861-582e917fba1a.jpg",
            "order": 6,
            "created_date": "2021-03-24T15:39:13.702053Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5172,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4600/4995da4b-50cc-46e4-871a-85a505f195a2.jpg",
            "order": 7,
            "created_date": "2021-03-24T15:39:14.134708Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5174,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4600/372490ad-54df-4b2a-b0c4-0f44c451b7d5.jpg",
            "order": 8,
            "created_date": "2021-03-24T15:39:14.311733Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5175,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4600/28545e90-02e1-4192-bb97-a1989a2825e1.jpg",
            "order": 9,
            "created_date": "2021-03-24T15:39:14.391071Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5177,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4600/32f442bc-66d3-4453-8064-b02d2b36ec64.jpg",
            "order": 10,
            "created_date": "2021-03-24T15:39:14.534149Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "8519.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "8519.90",
        "unit_type": "qty",
        "absolute_url": "/tw7690-5-silence-force-cyclonic-toz-torbasiz-elektrikli-supurge-mavi-2211400810/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 7,
        "data_source": null,
        "basket_offers": [
          {
            "pk": 5355,
            "label": "Sepette Ek 2220 TL İndirim",
            "listing_kwargs": {
              "discounted_total_price": 6299.9,
              "discount": 2220.0,
              "quantity": 1
            },
            "kwargs": {
              "show_benefit_products": true
            }
          }
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3353,
        "name": "Easygliss Plus FV5770 Buharlı Ütü",
        "sku": "1830008461",
        "base_code": "FV577",
        "attributes": {
          "erp_alt_aile_kodu": "L01001",
          "integration_pallet_weight": "0",
          "ozellik13_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/98DEDAF1-E571-4732-8F9E6C001FE32A17/?w=147&h=147&crop=false__Otomatik Kapanma",
          "integration_editorial_description_title": "Easygliss Plus Buharlı Ütü: Yüksek Kayganlık ve Verimlilik",
          "ozellik4_aciklama": "Hassas ve büyük giysilerin ütülenmesi, takım elbiselerdeki ve diğer asılı giysilerdeki, hatta perdelerdeki kırışıklıkları gidermek için ideal olan dikey buhar özelliğiyle kolaylaştırılır.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/1DF2E59B-059E-4C8B-8823AF152EC4B9B3/?w=147&h=147&crop=false__Verimli ütüleme performansı",
          "ozellik5_aciklama": "Olağanüstü kayganlık ve uzun süreli performans sağlayan yüksek kaliteli Durilium Airglide taban, mükemmel dayanıklılık ve günden güne güvenebileceğiniz sonuçlar için tasarlanmıştır.",
          "integration_attributeId_693": "50 gr/dk",
          "integration_attributeId_24": "Durilium Airglide",
          "integration_attributeId_22": "Mavi",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_barkod": "3121040084618",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "ozellik11_aciklama": "Ekstra güçlü 240 g/dakika şok buhar, kalın kumaşlardaki kırışıklıkları yumuşatır ve inatçı kırışıklıkların üstesinden kolaylıkla gelir.",
          "erp_aile_kodu": "L01",
          "erp_products_perparcel": "0",
          "ozellik10_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/436EA42D-383C-490C-A72C6B896E2CA716/?w=147&h=147&crop=false__Damlamaya karşı koruma",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "ozellik11_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/3888A918-C2E4-4A91-9764835D2FE86FE5/?w=147&h=147&crop=false__İnatçı kırışıklıklar için şok buhar",
          "integration_products_percontainer_c20": "0",
          "ozellik8_aciklama": "https://d32iut21qthkdz.cloudfront.net/images/media/93E50F6D-7E40-4564-9F4009475A88ED1C/?w=147&h=147&crop=false__İyi hazırlanmış tasarım, her yerde, hatta dikişler ve yakalar gibi ulaşılması zor alanlarda bile kırışıklıkları düzeltmenize olanak tanır.",
          "erp_pallet_volume": "0",
          "ozellik13_aciklama": "Ütü, gözetimsiz bırakıldığında otomatik olarak bekleme moduna geçer; topuğu üzerinde bırakıldığında 8 dakika ve tabanı üzerinde veya yanında bırakıldığında 30 saniye sonra bu gerçekleşir. Bu, enerji israfını ve yanma riskini önler.",
          "integration_aile_kodu": "L01",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "compare_product_slug": "buharli-utuler-compare",
          "erp_products_percontainer_hq4": "0",
          "ozellik8_baslik": "Kolay erişim için hassas uç",
          "ozellik2_aciklama": "Gündelik ihtiyaçlarınız için mükemmel buharlı ütüyü sunan 2700 W güç, ihtiyacınız olduğunda yanınızda olan performans için hızlı ısınma süresi sağlar.",
          "erp_parcel_dimension_height": "0",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3121040084618",
          "erp_range": "FV577",
          "erp_products_percontainer_c40": "0",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/BD291736-69B6-4AAC-8D5456DA9BF3914C/?w=147&h=147&crop=false__Çizilmeye dayanıklı Durilium Airglide ütü tabanı",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "270 ml",
          "integration_grup2kodu": "M",
          "erp_is_seo_automatic": "true",
          "integration_alt_aile_kodu": "L01001",
          "integration_attributeId_49": "240 gr/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E06640A6-2F95-4ADC-90FC00E4E0C081A3/?w=147&h=147&crop=false__Kayganlıkta #1",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "1295",
          "ozellik6_aciklama": "Bu buharlı ütü, her gün ütülemeyi kolaylaştırmak için tasarlanmış ekstra büyük doldurma deliğine sahip kolay doldurma sistemiyle donatılmıştır.",
          "integration_products_percontainer_c40": "0",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "2 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E4E0D4F9-581F-4530-97E12369F6D68F89/?w=147&h=147&crop=false__Hızlı ısınma için 2700W güç",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Olağanüstü kayganlığı şimdi daha da yüksek buhar gücü ve gelişmiş özelliklerle bir araya getiren EASYGLISS PLUS, ütülemeyi hızlı ve kolay hale getirir. Easygliss Plus, kayganlığı en iyi olan ekstra ince Durilium Airglide Technology tabanımızla donatılmıştır. Hızlı ısınma süresi için 2700 W güç, yüksek verimli ütüleme seansları için 50 g/dk'ya kadar sürekli buhar çıkışı ve her şeyin üstesinden gelmek için ekstra güçlü 240 g/dakika buhar ile ütüleme deneyiminizi bir üst seviyeye çıkarın. Gelişmiş özelliklerle daha yüksek performans sağlayan bu ütüyü keşfedin: Akıllı tasarım yeniden doldurmayı her zamankinden daha kolay hale getirir, damlama önleyici özellik lekelenmeden ütüleme sunar ve %100 aktif buhar delikleri maksimum dağıtım ve kapsama sağlar.",
          "ozellik10_aciklama": "Her gün en iyi şekilde görünmenizi sağlamak için kıyafetlerinizi su lekelerine karşı damlatma koruma sistemiyle korur.",
          "ozellik7_aciklama": "Otomatik Buhar sistemi ile benzersiz kullanım kolaylığı elinizin altında olup, bir düğmeyi çevirerek doğru buhar/sıcaklık kombinasyonunu ayarlamanıza olanak tanır.",
          "ozellik1_aciklama": "Tefal'in en hızlı kayganlığı.* Daha yüksek buhar performansı.* Olağanüstü kayma sağlayan Durilium Airglide teknolojisine sahip Tefal'in 1 numaralı tabanıyla üstün performansı keşfedin.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/CA517E46-F843-49FA-9BA601815A8A836C/?w=147&h=147&crop=false__Zahmetsiz dikey ütüleme",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "short_description": "•\tDURILIUM AIRGLIDE taban: Kusursuz kayganlık <br> •\tHızlı başlatma ve verimli sonuçlar: Hızlı ısınma süresi için 2700 W güç <br> •\tOlağanüstü buhar gücü: Dakikada 240 g'a kadar şok buhar <br> •\tDamlama önleyici koruma",
          "ozellik9_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/AB8A0E69-FA95-4DA1-96F50A7D80CAC2BC/?w=147&h=147&crop=false__Maksimum Buhar Dağılımı",
          "erp_pallet_dimension_width": "0",
          "integration_attributeId_50": "Var",
          "integration_marka": "01",
          "integration_attributeId_287": "2700 watt",
          "ozellik3_aciklama": "Dakikada 50 g'a kadar kesintisiz buhar çıkışı, maksimum verimlilikle daha hızlı ütüleme seansları sağlayarak olağanüstü performansı elinizin altında tutar.",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/948CFC90-D2A4-4335-ACF761F3C57A7563/?w=147&h=147&crop=false__Otomatik Buhar Ayarı",
          "integration_products_percontainer_hq4": "0",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "integration_range": "FV577",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/DF1BC01F-CB26-46AF-B1769D8B4A32BC45/?w=147&h=147&crop=false__Maksimum rahatlık için kolay doldurma sistemi",
          "erp_pallet_dimension_depth": "0",
          "ozellik9_aciklama": "%100 aktif buhar delikleriyle benzersiz verimlilik ve daha kolay ütüleme seansları için mükemmel buhar dağılımını keşfedin.",
          "integration_agirlik": "1295 gr",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_attributeId_227": "Var",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "240 gr/dk",
            "data_type": "dropdown",
            "label": "240 gr/dk"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_287": {
            "value": "2700 watt",
            "data_type": "dropdown",
            "label": "2700 watt"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_51": {
            "value": "270 ml",
            "data_type": "dropdown",
            "label": "270 ml"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_693": {
            "value": "50 gr/dk",
            "data_type": "dropdown",
            "label": "50 gr/dk"
          },
          "integration_attributeId_730": {
            "value": "2 m",
            "data_type": "dropdown",
            "label": "2 m"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_24": {
            "value": "Durilium Airglide",
            "data_type": "dropdown",
            "label": "Durilium Airglide"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_22": {
            "value": "Mavi",
            "data_type": "dropdown",
            "label": "Mavi"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 9649,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10759/2d11a893-d1cb-46c6-82db-9a71b8e452ee.jpg",
            "order": 1,
            "created_date": "2022-09-13T11:19:37.390013Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9652,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10759/51ac763e-8547-4683-bdeb-8caf704fb1f4.jpg",
            "order": 2,
            "created_date": "2022-09-13T11:19:37.567352Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9650,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10759/802c210d-057b-4302-b126-9fae68969f4f.jpg",
            "order": 3,
            "created_date": "2022-09-13T11:19:37.447679Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9653,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10759/0516ca24-6d8a-4d19-b885-5faaf2fcc0a7.jpg",
            "order": 4,
            "created_date": "2022-09-13T11:19:37.617777Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9651,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10759/81b956fc-3ebc-407e-b8f2-61cd731de228.jpg",
            "order": 5,
            "created_date": "2022-09-13T11:19:37.508852Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9647,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10759/d9f1daa6-5972-4a57-bc5a-c3c8a4e0ef94.jpg",
            "order": 6,
            "created_date": "2022-09-13T11:19:37.244827Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9648,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10759/9df11ddf-a2c5-46cc-9a07-b54f26d42008.jpg",
            "order": 7,
            "created_date": "2022-09-13T11:19:37.330302Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "1399.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "1399.90",
        "unit_type": "qty",
        "absolute_url": "/easygliss-plus-fv5770-buharli-utu-1830008461/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 2761,
        "name": "Express Easy SV6140 Buhar Kazanlı Ütü",
        "sku": "1830007909",
        "base_code": "SV61",
        "attributes": {
          "erp_alt_aile_kodu": "L02140",
          "utu_tabani_saglamligi": "***",
          "integration_pallet_weight": "0",
          "erp_products_percontainer_c40": "0",
          "integration_editorial_description_title": "Süper güçlü ve kompakt buhar kazanlı ütü",
          "integration_pallet_dimension_width": "0",
          "teslimat_sureleri": "2",
          "compare_product_slug": "buhar-kazanli-utuler-compare",
          "bos_depo_ikazi": "Yok",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/94FFC719-7910-4D3A-A3AEF2B653EF49E5/?w=147&h=147&crop=false__Kireç Temizleme Teknolojisi",
          "ozellik5_aciklama": "Ütü tabanından gelen ısı ve buhar kombinasyonu, kıyafetlerinizde %99,9'a kadar maksimum hijyen sağlar.",
          "yukseklik": "256 mm",
          "integration_attributeId_693": "120 gr/dk",
          "integration_attributeId_22": "Siyah",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_barkod": "3121040079096",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "damlama_onleyici": "Var",
          "erp_aile_kodu": "L02",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "L02",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "ozellik4_aciklama": "Xpress Glide taban, daha kolay ve daha keyifli buharlama seansları için olağanüstü kayma sağlar.",
          "n11_product_description": "Express Easy SV6140",
          "ozellik2_aciklama": "Zaman kaybetmeden harika sonuçlar elde etmek için 120 gr/dk buhar çıktısının ham gücünü kullanın",
          "isinma_suresi": "2 dk",
          "integration_layers_perpallet": "0",
          "erp_barkod": "3121040079096",
          "erp_range": "SV61",
          "product_line": "LINEN CARE",
          "agirlik": "4,03 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/FB8E4A72-6F9A-4EC9-A14C626F7C924E21/?w=147&h=147&crop=false__Kıyafetlerinizde hijyen sağlayın",
          "integration_gecerli": "true",
          "cikarilabilir_su_tanki": "Var",
          "min_stok": "20",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "downloadable_image_title": "https://tefal.akinoncdn.com/cms/2021/11/03/0177b665-cc5f-4a1f-bc41-0af84a47680c.pdf",
          "isi_buhar_ayari": "Manuel",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_grup2kodu": "M",
          "erp_is_seo_automatic": "true",
          "genislik": "362 mm",
          "integration_alt_aile_kodu": "L02140",
          "integration_attributeId_49": "380 gr/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/7AFDE37E-ACAA-4C5E-BE2923D9595CF85D/?w=147&h=147&crop=false__ Ütüleme zamanınızı %30 azaltın",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "4030",
          "integration_products_percontainer_c40": "0",
          "integration_attributeId_47": "6 bar",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "1,6 m",
          "onarilabilirlik": "Var",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/8AA22D56-A74C-4BAD-B8DD305B240983B5/?w=147&h=147&crop=false__Kusursuz sonuçlar",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Ütüleme seanslarınızı buhar gücünden taviz vermeden geliştirin. Express Easy buhar kazanlı ütü, giysi bakımının zahmetini ortadan kaldıran ,basit ve anlaşılır bir işlemle hızlı sonuçlar için güçlü ütüleme sağlar. 6 bar pompa basıncı, en inatçı kırışıklıkların üstesinden gelmek için ekstra güçlü 380 g / dakikalık şok buhar, ve yine de 120 g / dk'ya kadar sürekli buhar çıkışı ile kırışıklıkları anında düzeltir. Bu yüksek performanslı buhar kazanlı ütü, tamamen güvenli bir şekilde taşımak ve saklamak için kolay taşınabilir kilit sisteminden, herhangi bir kumaş üzerinde pürüzsüz kayma için Xpress Glide tabana kadar ütüleme deneyimini geliştirmek için çeşitli özelliklerle donatılmıştır. Ayrıca, ütüleme seansınız sırasında yeniden doldurabileceğiniz 1,7 L'lik çıkarılabilir su haznesi ile birlikte gelir. Express Easy Buhar Kazanlı Ütü: Harika buhar sonuçlarına tam özgürlükle erişin!",
          "ozellik1_aciklama": "Hızlı ütüleme için 3X kadar daha fazla buhar",
          "dikey_buhar": "Var",
          "utu_kayganligi": "***",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B11546FF-103A-4BDB-BF92DDB828C4C43E/?w=147&h=147&crop=false__Kusursuz Kayganlık",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "short_description": "•\t6 bar pompa basıncı <br> •\t120 gr/dk sürekli buhar çıkışı<br>•\t380 gr/dk şok buhar<br>•\t1,7 L'lik çıkarılabilir su haznesi<br>•\tEkonomik mod<br>•\tXpress Glide taban<br>",
          "erp_parcel_dimension_height": "0",
          "integration_attributeId_50": "Var",
          "n11_product_title": "TEFAL Express Easy SV6140",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "2200 watt",
          "ozellik3_aciklama": "Daha uzun süreli buhar performansı sağlamak için Kireç Temizleme Teknolojisi",
          "sprey": "Yok",
          "integration_pallet_dimension_height": "0",
          "kirec_temizleme": "Yok",
          "erp_parcel_weight": "0",
          "kilit_sistemi": "Var",
          "downloadable_link": "https://tefal.akinoncdn.com/cms/2021/11/03/a2cc0f9f-b00b-4a4c-b8ea-f61abd60f109.jpe__Kullanım Kılavuzu",
          "integration_products_percontainer_hq4": "0",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "eko_mod": "Var",
          "erp_products_percontainer_hq4": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "SV61",
          "erp_marka": "01",
          "erp_parcel_dimension_depth": "0",
          "erp_pallet_dimension_depth": "0",
          "derinlik": "179 mm",
          "kirec_alarmi": "Var",
          "ozellik17_aciklama": "Kolay onarılacak şekilde tasarlanmıştır, 15 yıl boyunca düşük bedelli, hızlı parça teslimi  Dünya genelinde 6500 onarım merkezi.",
          "integration_agirlik": "4,03 kg",
          "integration_parcel_dimension_width": "0",
          "utu_taban_teknolojisi": "Ceramic Xpress Glide",
          "integration_pallet_dimension_depth": "0",
          "integration_attributeId_227": "Var",
          "sessiz_teknoloji": "Yok",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "380 gr/dk",
            "data_type": "dropdown",
            "label": "380 gr/dk"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_287": {
            "value": "2200 watt",
            "data_type": "dropdown",
            "label": "2200 watt"
          },
          "product_line": {
            "value": "LINEN CARE",
            "data_type": "dropdown",
            "label": "LINEN CARE"
          },
          "integration_attributeId_47": {
            "value": "6 bar",
            "data_type": "dropdown",
            "label": "6 bar"
          },
          "integration_attributeId_693": {
            "value": "120 gr/dk",
            "data_type": "dropdown",
            "label": "120 gr/dk"
          },
          "integration_attributeId_730": {
            "value": "1,6 m",
            "data_type": "dropdown",
            "label": "1,6 m"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "onarilabilirlik": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_22": {
            "value": "Siyah",
            "data_type": "dropdown",
            "label": "Siyah"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 7245,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/07/30/4852/14a0eea9-6992-4635-8dac-ef0ce51d9872.jpg",
            "order": 1,
            "created_date": "2021-07-30T14:22:34.617761Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7246,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/07/30/4852/41f731a5-8115-47df-853e-8f6dadc6387a.jpg",
            "order": 2,
            "created_date": "2021-07-30T14:22:34.701034Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7247,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/07/30/4852/cbae692d-3ab7-4e02-91da-147f582e92f1.jpg",
            "order": 3,
            "created_date": "2021-07-30T14:22:34.762320Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7248,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/07/30/4852/f75aeb09-f319-4acc-b79d-82381f9c0479.jpg",
            "order": 4,
            "created_date": "2021-07-30T14:22:34.827796Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7249,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/07/30/4852/ae898a62-4340-4ce2-998b-ebcc3382da93.jpg",
            "order": 5,
            "created_date": "2021-07-30T14:22:34.899078Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7250,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/07/30/4852/8989388b-b357-4157-a015-325dca8841e8.jpg",
            "order": 6,
            "created_date": "2021-07-30T14:22:34.970828Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7251,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/07/30/4852/f4c8d758-3e12-4e3e-933e-d1be0d0744b0.jpg",
            "order": 7,
            "created_date": "2021-07-30T14:22:35.036898Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7252,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/07/30/4852/2d8e2896-8d9e-4214-a624-7006c1b79a86.jpg",
            "order": 8,
            "created_date": "2021-07-30T14:22:35.109595Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 7253,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/07/30/4852/1c4a0f86-f0f5-4982-a23f-06239c8b548f.jpg",
            "order": 9,
            "created_date": "2021-07-30T14:22:35.198606Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "3469.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "3469.90",
        "unit_type": "qty",
        "absolute_url": "/express-easy-sv6140-buhar-kazanli-utu-1830007909/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          {
            "pk": 5346,
            "label": "Sepette Ek %15 İndirim",
            "listing_kwargs": {
              "discounted_total_price": 2949.42,
              "discount": 520.48,
              "quantity": 1
            },
            "kwargs": {
              "show_benefit_products": true
            }
          }
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 584,
        "name": "Pro Express Ultimate Care GV9570 Buhar Kazanlı Ütü",
        "sku": "1830006374",
        "base_code": "GV95",
        "attributes": {
          "erp_alt_aile_kodu": "L02141",
          "integration_pallet_weight": "0",
          "erp_products_percontainer_c40": "0",
          "integration_editorial_description_title": "Profesyonel kalitede sonuçlar için üstün teknoloji",
          "ozellik4_aciklama": "Üstün buhar teknolojisi, her seferinde mükemmel sonuçlar ve kolay kırışıklık giderme sağlayan 180g/dakika gücünde olağanüstü bir sürekli buhar çıkışı için su alımını optimize eder.",
          "erp_attributeId_22": "Mavi",
          "integration_garanti_durumu": "Var, Başlamamış",
          "ozellik5_aciklama": "Özel ikili koruma ile mükemmel huzur: Protect System su damlalarını ve sızıntıları buhara dönüştürerek lekeleri önler, kireç toplayıcı ise kireçten kolaylıkla kurtulmanızı sağlar.",
          "yukseklik": "289 mm",
          "integration_attributeId_693": "150 g/dk - 550 g/dk",
          "integration_picto": "1--Profesyonel Verim--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;M&uuml;kemmel sonu&ccedil;lar i&ccedil;in en iyi buhar g&uuml;c&uuml;. Yeni y&uuml;ksek basın&ccedil;lı kazan teknolojisi profesyonel standartta kusursuz sonu&ccedil;lar sunar.</span>|2--Zaman Tasarrufu--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Y&uuml;ksek basın&ccedil;lı buhar, profesyonel verim i&ccedil;in kumaşa n&uuml;fus eder ve &uuml;t&uuml;leme s&uuml;resini kısaltır.</span>|3--Güçlü Buhar Püskürtme--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;En inat&ccedil;ı kırışıklıkları dahi gideren ve kalın kumaşlar i&ccedil;in ideal olan yoğun buhar p&uuml;sk&uuml;rtme &ouml;zelliği.</span>|4--Mükemmel Sonuçlar--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Uuml;st&uuml;n buhar teknolojisi, her seferinde m&uuml;kemmel sonu&ccedil;lar ve kolay kırışıklık giderme sağlayan 160g/dakika g&uuml;c&uuml;nde olağan&uuml;st&uuml; bir s&uuml;rekli buhar &ccedil;ıkışı i&ccedil;in su alımını optimize eder..</span>|5--Kumaşlarınıza Hak Ettikleri İlgiyi Gösterir--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Ouml;zel ikili koruma ile m&uuml;kemmel huzur: Protect System su damlalarını ve sızıntıları buhara d&ouml;n&uuml;şt&uuml;rerek lekeleri &ouml;nler, kire&ccedil; toplayıcı ise kire&ccedil;ten kolaylıkla kurtulmanızı sağlar..</span>|6--Kolay Kullanımlı Kontrol Paneli Parmaklarınızın Ucunda--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Kumaş t&uuml;rleri arasında rahat ge&ccedil;iş yapabilmeniz i&ccedil;in sapa yerleştirilmiş olan yeni ve şık Direct Panel ile ayarları tek bir d&uuml;ğmeyle değiştirebilirsiniz. D&ouml;rt adet elektronik &ouml;n ayarlı hafıza, her kumaş i&ccedil;in m&uuml;kemmel buhar ve sıcaklık kombinasyonunu garanti altına alır..</span>|7--Durilium AirGlide Autoclean Ekstra İnce Taban--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Yeni Durilium AirGlide Technology %33 daha kaygan y&uuml;zeyiyle Tefal&rsquo;in şimdiye kadar yarattığı en iyi kayganlığı sağlar, uzun &ouml;m&uuml;rl&uuml; performans sunar.</span>|8--Kolay Çıkarılabilir Su Haznesi--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Ccedil;ıkarılabilir su haznesi &uuml;t&uuml;leme esnasında dilenen anda yeniden doldurulabilir.</span>|9--Kolay ve Güvenli Taşıma--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;G&uuml;venli kilit sistemi kolay ve g&uuml;venli taşıma ve saklama sağlar.</span>|10--Sterilizasyon--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Bakterilerin %99.99&rsquo;unu &ouml;ld&uuml;r&uuml;r : y&uuml;ksek basın&ccedil;lı buhar jenerat&ouml;rl&uuml; &uuml;t&uuml;n&uuml;z, sıcaklık ve buhar g&uuml;c&uuml; kombinasyonu sayesinde &uuml;t&uuml;lenebilir kumaşlardaki bakterileri %99.99&rsquo;a varan oranda &ouml;ld&uuml;r&uuml;r.</span>",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_page_description": "Pro Express Ultimate GV9570",
          "integration_barkod": "3121040063743",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "L02",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "erp_grup1kodu": "KM",
          "gg_new_catalog_id": "19720",
          "integration_detaylar": "{u'eComUrunDetay': [{u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;M&uuml;kemmel sonu&ccedil;lar i&ccedil;in en iyi buhar g&uuml;c&uuml;. Yeni y&uuml;ksek bas\\u0131n&ccedil;l\\u0131 kazan teknolojisi profesyonel standartta kusursuz sonu&ccedil;lar sunar.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto31.jpg', u'BASLIK': u'Profesyonel Verim', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'14324'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Y&uuml;ksek bas\\u0131n&ccedil;l\\u0131 buhar, profesyonel verim i&ccedil;in kuma\\u015fa n&uuml;fus eder ve &uuml;t&uuml;leme s&uuml;resini k\\u0131salt\\u0131r.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto52.jpg', u'BASLIK': u'Zaman Tasarrufu', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'14325'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;En inat&ccedil;\\u0131 k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 dahi gideren ve kal\\u0131n kuma\\u015flar i&ccedil;in ideal olan yo\\u011fun buhar p&uuml;sk&uuml;rtme &ouml;zelli\\u011fi.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto53.jpg', u'BASLIK': u'G\\xfc\\xe7l\\xfc Buhar P\\xfcsk\\xfcrtme', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'14326'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Uuml;st&uuml;n buhar teknolojisi, her seferinde m&uuml;kemmel sonu&ccedil;lar ve kolay k\\u0131r\\u0131\\u015f\\u0131kl\\u0131k giderme sa\\u011flayan 160g/dakika g&uuml;c&uuml;nde ola\\u011fan&uuml;st&uuml; bir s&uuml;rekli buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131 i&ccedil;in su al\\u0131m\\u0131n\\u0131 optimize eder..</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto54.jpg', u'BASLIK': u'M\\xfckemmel Sonu\\xe7lar', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'14327'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Ouml;zel ikili koruma ile m&uuml;kemmel huzur: Protect System su damlalar\\u0131n\\u0131 ve s\\u0131z\\u0131nt\\u0131lar\\u0131 buhara d&ouml;n&uuml;\\u015ft&uuml;rerek lekeleri &ouml;nler, kire&ccedil; toplay\\u0131c\\u0131 ise kire&ccedil;ten kolayl\\u0131kla kurtulman\\u0131z\\u0131 sa\\u011flar..</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto46.jpg', u'BASLIK': u'Kuma\\u015flar\\u0131n\\u0131za Hak Ettikleri \\u0130lgiyi G\\xf6sterir', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'14328'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Kuma\\u015f t&uuml;rleri aras\\u0131nda rahat ge&ccedil;i\\u015f yapabilmeniz i&ccedil;in sapa yerle\\u015ftirilmi\\u015f olan yeni ve \\u015f\\u0131k Direct Panel ile ayarlar\\u0131 tek bir d&uuml;\\u011fmeyle de\\u011fi\\u015ftirebilirsiniz. D&ouml;rt adet elektronik &ouml;n ayarl\\u0131 haf\\u0131za, her kuma\\u015f i&ccedil;in m&uuml;kemmel buhar ve s\\u0131cakl\\u0131k kombinasyonunu garanti alt\\u0131na al\\u0131r..</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto55.jpg', u'BASLIK': u'Kolay Kullan\\u0131ml\\u0131 Kontrol Paneli Parmaklar\\u0131n\\u0131z\\u0131n Ucunda', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'14329'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Yeni Durilium AirGlide Technology %33 daha kaygan y&uuml;zeyiyle Tefal&rsquo;in \\u015fimdiye kadar yaratt\\u0131\\u011f\\u0131 en iyi kayganl\\u0131\\u011f\\u0131 sa\\u011flar, uzun &ouml;m&uuml;rl&uuml; performans sunar.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto56.jpg', u'BASLIK': u'Durilium AirGlide Autoclean Ekstra \\u0130nce Taban', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'14330'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Ccedil;\\u0131kar\\u0131labilir su haznesi &uuml;t&uuml;leme esnas\\u0131nda dilenen anda yeniden doldurulabilir.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto47.jpg', u'BASLIK': u'Kolay \\xc7\\u0131kar\\u0131labilir Su Haznesi', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'14331'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;G&uuml;venli kilit sistemi kolay ve g&uuml;venli ta\\u015f\\u0131ma ve saklama sa\\u011flar.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto39.jpg', u'BASLIK': u'Kolay ve G\\xfcvenli Ta\\u015f\\u0131ma', u'SIRANO': u'9.000000', u'GECERLI': u'true', u'DETAY_ID': u'14332'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Bakterilerin %99.99&rsquo;unu &ouml;ld&uuml;r&uuml;r : y&uuml;ksek bas\\u0131n&ccedil;l\\u0131 buhar jenerat&ouml;rl&uuml; &uuml;t&uuml;n&uuml;z, s\\u0131cakl\\u0131k ve buhar g&uuml;c&uuml; kombinasyonu sayesinde &uuml;t&uuml;lenebilir kuma\\u015flardaki bakterileri %99.99&rsquo;a varan oranda &ouml;ld&uuml;r&uuml;r.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto25.jpg', u'BASLIK': u'Sterilizasyon', u'SIRANO': u'10.000000', u'GECERLI': u'true', u'DETAY_ID': u'14333'}, {u'TIPI': u'2', u'HTML_METIN': u'2600 W G&uuml;&ccedil;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_900_w_guc.jpg', u'BASLIK': u'Teknik \\xd6zellik 1', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'14334'}, {u'TIPI': u'2', u'HTML_METIN': u'7,8 Bar Buhar Bas\\u0131nc\\u0131', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_5.2-Bar-Buhar-Bas\\u0131nc\\u0131.jpg', u'BASLIK': u'Teknik \\xd6zellik 2', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'14335'}, {u'TIPI': u'2', u'HTML_METIN': u'550 gr/dk Turbo Buhar G&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_\\u015eok-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 3', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'14336'}, {u'TIPI': u'2', u'HTML_METIN': u'160 gr/dk S&uuml;rekli Buhar G&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_Sabit-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 4', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'14337'}, {u'TIPI': u'2', u'HTML_METIN': u'G&uuml;venli Ta\\u015f\\u0131ma i&ccedil;in Kilit Sistemi', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_G\\xfcvenli-Ta\\u015f\\u0131ma-i\\xe7in-Kilit-Sistemi.jpg', u'BASLIK': u'Teknik \\xd6zellik 5', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'14338'}, {u'TIPI': u'2', u'HTML_METIN': u'2 dakikaya kadar h\\u0131zl\\u0131 \\u0131s\\u0131nma', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_h\\u0131zl\\u0131-\\u0131s\\u0131nma.jpg', u'BASLIK': u'Teknik \\xd6zellik 6', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'14339'}, {u'TIPI': u'2', u'HTML_METIN': u'Durilium Airglade Autoclean Taban', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_Autoclean- Taban.jpg', u'BASLIK': u'Teknik \\xd6zellik 7', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'14340'}, {u'TIPI': u'2', u'HTML_METIN': u'1,9 litre su tank\\u0131 kapasitesi', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_Su-kapasitesi.jpg', u'BASLIK': u'Teknik \\xd6zellik 8', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'14341'}]}",
          "erp_pallet_volume": "0",
          "erp_parcel_dimension_depth": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "L02",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "compare_product_slug": "buhar-kazanli-utuler-compare",
          "erp_products_percontainer_hq4": "0",
          "ozellik8_aciklama": "Çıkarılabilir su haznesi ütüleme esnasında dilenen anda yeniden doldurulabilir.",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/FC36B648-059B-4CCA-846FD7D6CC614001/?w=147&h=147&crop=true__Kolay Çıkarılabilir Su Haznesi",
          "ozellik2_aciklama": "Yüksek basınçlı buhar, profesyonel verim için kumaşa nüfus eder ve ütüleme süresini kısaltır.",
          "erp_detaylar": "{u'eComUrunDetay': [{u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;M&uuml;kemmel sonu&ccedil;lar i&ccedil;in en iyi buhar g&uuml;c&uuml;. Yeni y&uuml;ksek bas\\u0131n&ccedil;l\\u0131 kazan teknolojisi profesyonel standartta kusursuz sonu&ccedil;lar sunar.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto31.jpg', u'BASLIK': u'Profesyonel Verim', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'14324'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Y&uuml;ksek bas\\u0131n&ccedil;l\\u0131 buhar, profesyonel verim i&ccedil;in kuma\\u015fa n&uuml;fus eder ve &uuml;t&uuml;leme s&uuml;resini k\\u0131salt\\u0131r.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto52.jpg', u'BASLIK': u'Zaman Tasarrufu', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'14325'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;En inat&ccedil;\\u0131 k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 dahi gideren ve kal\\u0131n kuma\\u015flar i&ccedil;in ideal olan yo\\u011fun buhar p&uuml;sk&uuml;rtme &ouml;zelli\\u011fi.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto53.jpg', u'BASLIK': u'G\\xfc\\xe7l\\xfc Buhar P\\xfcsk\\xfcrtme', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'14326'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Uuml;st&uuml;n buhar teknolojisi, her seferinde m&uuml;kemmel sonu&ccedil;lar ve kolay k\\u0131r\\u0131\\u015f\\u0131kl\\u0131k giderme sa\\u011flayan 160g/dakika g&uuml;c&uuml;nde ola\\u011fan&uuml;st&uuml; bir s&uuml;rekli buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131 i&ccedil;in su al\\u0131m\\u0131n\\u0131 optimize eder..</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto54.jpg', u'BASLIK': u'M\\xfckemmel Sonu\\xe7lar', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'14327'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Ouml;zel ikili koruma ile m&uuml;kemmel huzur: Protect System su damlalar\\u0131n\\u0131 ve s\\u0131z\\u0131nt\\u0131lar\\u0131 buhara d&ouml;n&uuml;\\u015ft&uuml;rerek lekeleri &ouml;nler, kire&ccedil; toplay\\u0131c\\u0131 ise kire&ccedil;ten kolayl\\u0131kla kurtulman\\u0131z\\u0131 sa\\u011flar..</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto46.jpg', u'BASLIK': u'Kuma\\u015flar\\u0131n\\u0131za Hak Ettikleri \\u0130lgiyi G\\xf6sterir', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'14328'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Kuma\\u015f t&uuml;rleri aras\\u0131nda rahat ge&ccedil;i\\u015f yapabilmeniz i&ccedil;in sapa yerle\\u015ftirilmi\\u015f olan yeni ve \\u015f\\u0131k Direct Panel ile ayarlar\\u0131 tek bir d&uuml;\\u011fmeyle de\\u011fi\\u015ftirebilirsiniz. D&ouml;rt adet elektronik &ouml;n ayarl\\u0131 haf\\u0131za, her kuma\\u015f i&ccedil;in m&uuml;kemmel buhar ve s\\u0131cakl\\u0131k kombinasyonunu garanti alt\\u0131na al\\u0131r..</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto55.jpg', u'BASLIK': u'Kolay Kullan\\u0131ml\\u0131 Kontrol Paneli Parmaklar\\u0131n\\u0131z\\u0131n Ucunda', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'14329'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Yeni Durilium AirGlide Technology %33 daha kaygan y&uuml;zeyiyle Tefal&rsquo;in \\u015fimdiye kadar yaratt\\u0131\\u011f\\u0131 en iyi kayganl\\u0131\\u011f\\u0131 sa\\u011flar, uzun &ouml;m&uuml;rl&uuml; performans sunar.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto56.jpg', u'BASLIK': u'Durilium AirGlide Autoclean Ekstra \\u0130nce Taban', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'14330'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Ccedil;\\u0131kar\\u0131labilir su haznesi &uuml;t&uuml;leme esnas\\u0131nda dilenen anda yeniden doldurulabilir.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto47.jpg', u'BASLIK': u'Kolay \\xc7\\u0131kar\\u0131labilir Su Haznesi', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'14331'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;G&uuml;venli kilit sistemi kolay ve g&uuml;venli ta\\u015f\\u0131ma ve saklama sa\\u011flar.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto39.jpg', u'BASLIK': u'Kolay ve G\\xfcvenli Ta\\u015f\\u0131ma', u'SIRANO': u'9.000000', u'GECERLI': u'true', u'DETAY_ID': u'14332'}, {u'TIPI': u'1', u'HTML_METIN': u'<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Bakterilerin %99.99&rsquo;unu &ouml;ld&uuml;r&uuml;r : y&uuml;ksek bas\\u0131n&ccedil;l\\u0131 buhar jenerat&ouml;rl&uuml; &uuml;t&uuml;n&uuml;z, s\\u0131cakl\\u0131k ve buhar g&uuml;c&uuml; kombinasyonu sayesinde &uuml;t&uuml;lenebilir kuma\\u015flardaki bakterileri %99.99&rsquo;a varan oranda &ouml;ld&uuml;r&uuml;r.</span>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_picto25.jpg', u'BASLIK': u'Sterilizasyon', u'SIRANO': u'10.000000', u'GECERLI': u'true', u'DETAY_ID': u'14333'}, {u'TIPI': u'2', u'HTML_METIN': u'2600 W G&uuml;&ccedil;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_900_w_guc.jpg', u'BASLIK': u'Teknik \\xd6zellik 1', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'14334'}, {u'TIPI': u'2', u'HTML_METIN': u'7,8 Bar Buhar Bas\\u0131nc\\u0131', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_5.2-Bar-Buhar-Bas\\u0131nc\\u0131.jpg', u'BASLIK': u'Teknik \\xd6zellik 2', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'14335'}, {u'TIPI': u'2', u'HTML_METIN': u'550 gr/dk Turbo Buhar G&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_\\u015eok-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 3', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'14336'}, {u'TIPI': u'2', u'HTML_METIN': u'160 gr/dk S&uuml;rekli Buhar G&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_Sabit-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 4', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'14337'}, {u'TIPI': u'2', u'HTML_METIN': u'G&uuml;venli Ta\\u015f\\u0131ma i&ccedil;in Kilit Sistemi', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_G\\xfcvenli-Ta\\u015f\\u0131ma-i\\xe7in-Kilit-Sistemi.jpg', u'BASLIK': u'Teknik \\xd6zellik 5', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'14338'}, {u'TIPI': u'2', u'HTML_METIN': u'2 dakikaya kadar h\\u0131zl\\u0131 \\u0131s\\u0131nma', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_h\\u0131zl\\u0131-\\u0131s\\u0131nma.jpg', u'BASLIK': u'Teknik \\xd6zellik 6', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'14339'}, {u'TIPI': u'2', u'HTML_METIN': u'Durilium Airglade Autoclean Taban', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_Autoclean- Taban.jpg', u'BASLIK': u'Teknik \\xd6zellik 7', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'14340'}, {u'TIPI': u'2', u'HTML_METIN': u'1,9 litre su tank\\u0131 kapasitesi', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/1975_img1_Su-kapasitesi.jpg', u'BASLIK': u'Teknik \\xd6zellik 8', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'14341'}]}",
          "ozellik9_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/3562D80A-2651-49D1-8E425EE30BD004A7/?w=147&h=147&crop=true__Kolay ve güvenli taşıma",
          "integration_layers_perpallet": "0",
          "integration_model": "GV9570",
          "erp_barkod": "3121040063743",
          "erp_range": "GV95",
          "product_line": "LINEN CARE",
          "agirlik": "5,1",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/AEE8C282-E8CA-4FF3-B8E8BA4BB3B38B88/?w=147&h=147&crop=true__Kumaşlarınıza hak ettikleri ilgiyi gösterir",
          "integration_gecerli": "true",
          "short_description": "• Direct Control paneli<br>\n• Anti kireç sistemi<br>\n• Damlama önleyici koruma sistemi<br>\n• Yüksek basınçlı kazan<br>",
          "erp_grup6kodu": "EY",
          "erp_attributeId_693": "150 g/dk - 550 g/dk",
          "integration_page_title": "Pro Express Ultimate GV9570",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "1,9 lt",
          "integration_grup2kodu": "M",
          "erp_is_seo_automatic": "true",
          "genislik": "423 mm",
          "integration_alt_aile_kodu": "L02141",
          "integration_attributeId_49": "550 g/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/2545E119-8104-409A-BE9A195BB5DA0B9F/?w=147&h=147&crop=true__Profesyonel verim",
          "ozellik9_aciklama": "Güvenli kilit sistemi kolay ve güvenli taşıma ve saklama sağlar",
          "erp_page_description": "Pro Express Ultimate GV9570",
          "erp_agirlik": "5100",
          "ozellik6_aciklama": "Kumaş türleri arasında rahat geçiş yapabilmeniz için sapa yerleştirilmiş olan yeni ve şık Direct Panel ile ayarları tek bir düğmeyle değiştirebilirsiniz. Dört adet elektronik ön ayarlı hafıza, her kumaş için mükemmel buhar ve sıcaklık kombinasyonunu garanti altına alır.",
          "integration_grup1kodu": "KM",
          "integration_products_percontainer_c40": "0",
          "integration_attributeId_47": "7,8 bar",
          "erp_attributeId_47": "7,8 bar",
          "erp_page_title": "Pro Express Ultimate GV9570",
          "integration_attributeId_730": "1,7 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/557B06EB-1D91-4DAB-8B5658CE311BE54D/?w=147&h=147&crop=true__Zaman tasarrufu",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "integration_sirketkodu": "2006_GSEB",
          "erp_attributeId_49": "550 g/dk",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_durum": "Sıfır",
          "integration_editorial_description_detail": "En zorlu kumaş çeşitlerinde bile olağanüstü sonuçlar sunan Pro Express Ultimate [+] Buhar Kazanlı Ütü ile verimli bir şekilde ütüleme yapmak artık çok kolay! Akıllı buhar teknolojisi, ütünüzün sahip olduğu sensör sayesinde hareketiniz doğrultusunda optimum buhar çıkışı sağlayarak size benzersiz bir ütüleme deneyimi yaşatır. Bu kolay kullanımlı yüksek basınçlı buhar kazanlı ütü, yüksek basınçlı kazanı ile 160gr/dk sürekli buhar çıkışı ve 550 gr/dk gücünde şok buhar özelliklerini bir araya getirerek en inatçı kırışıklıkları dahi giderir, ütüleme süresini kısaltır ve verimliliği maksimuma taşır. Konforunuz için ütünün sapına yerleştirilmiş olan kolay kullanımlı yeni Direct Control paneli, farklı kumaş türleri arasında geçiş ayarlarını yaparken zaman kazanmanızı sağlar. Kumaşlarınızı lekesiz tutan damlama önleyici Protect System ve uzun ömürlü performansı garanti altına alan Anti-Kireç sistemini bir araya getiren özel iki yönlü koruma sağlar. Pro Express Ultimate Buhar Kazanlı Ütü, yüksek basınçlı buharın verdiği güçle mükemmel verim sağlar.<br><br>Groupe SEB N.1 Avrupa'nın 1 Numaralı Ütü Üreticisi*<br><br>*Euromonitor International Limited, ütü kategorisi,Groupe SEB’in ütü markalarının 2019 yılındaki toplam hacim bazında perakende satışı (Tefal, Calor,Rowenta, OBH Nortica)",
          "ozellik7_aciklama": "Yeni Durilium AirGlide Technology %33 daha kaygan yüzeyiyle Tefal’in şimdiye kadar yarattığı en iyi kayganlığı sağlar, uzun ömürlü performans sunar.",
          "ozellik1_aciklama": "Mükemmel sonuçlar için en iyi buhar gücü. Yeni yüksek basınçlı kazan teknolojisi profesyonel standartta kusursuz sonuçlar sunar.",
          "integration_parcel_dimension_depth": "0",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/8C8D6EAE-E2CD-4282-AB28E61C9E812BD9/?w=147&h=147&crop=true__Mükemmel sonuçlar",
          "marketplace_product_name": "Tefal GV9570E0 Pro Express Ultimate 7.8 Bar Buhar Kazanlı Ütü - 1830006374",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "integration_attributeId_22": "Beyaz - Mavi",
          "erp_gecerli": "true",
          "erp_picto": "1--Profesyonel Verim--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;M&uuml;kemmel sonu&ccedil;lar i&ccedil;in en iyi buhar g&uuml;c&uuml;. Yeni y&uuml;ksek basın&ccedil;lı kazan teknolojisi profesyonel standartta kusursuz sonu&ccedil;lar sunar.</span>|2--Zaman Tasarrufu--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Y&uuml;ksek basın&ccedil;lı buhar, profesyonel verim i&ccedil;in kumaşa n&uuml;fus eder ve &uuml;t&uuml;leme s&uuml;resini kısaltır.</span>|3--Güçlü Buhar Püskürtme--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;En inat&ccedil;ı kırışıklıkları dahi gideren ve kalın kumaşlar i&ccedil;in ideal olan yoğun buhar p&uuml;sk&uuml;rtme &ouml;zelliği.</span>|4--Mükemmel Sonuçlar--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Uuml;st&uuml;n buhar teknolojisi, her seferinde m&uuml;kemmel sonu&ccedil;lar ve kolay kırışıklık giderme sağlayan 160g/dakika g&uuml;c&uuml;nde olağan&uuml;st&uuml; bir s&uuml;rekli buhar &ccedil;ıkışı i&ccedil;in su alımını optimize eder..</span>|5--Kumaşlarınıza Hak Ettikleri İlgiyi Gösterir--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Ouml;zel ikili koruma ile m&uuml;kemmel huzur: Protect System su damlalarını ve sızıntıları buhara d&ouml;n&uuml;şt&uuml;rerek lekeleri &ouml;nler, kire&ccedil; toplayıcı ise kire&ccedil;ten kolaylıkla kurtulmanızı sağlar..</span>|6--Kolay Kullanımlı Kontrol Paneli Parmaklarınızın Ucunda--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Kumaş t&uuml;rleri arasında rahat ge&ccedil;iş yapabilmeniz i&ccedil;in sapa yerleştirilmiş olan yeni ve şık Direct Panel ile ayarları tek bir d&uuml;ğmeyle değiştirebilirsiniz. D&ouml;rt adet elektronik &ouml;n ayarlı hafıza, her kumaş i&ccedil;in m&uuml;kemmel buhar ve sıcaklık kombinasyonunu garanti altına alır..</span>|7--Durilium AirGlide Autoclean Ekstra İnce Taban--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Yeni Durilium AirGlide Technology %33 daha kaygan y&uuml;zeyiyle Tefal&rsquo;in şimdiye kadar yarattığı en iyi kayganlığı sağlar, uzun &ouml;m&uuml;rl&uuml; performans sunar.</span>|8--Kolay Çıkarılabilir Su Haznesi--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;&Ccedil;ıkarılabilir su haznesi &uuml;t&uuml;leme esnasında dilenen anda yeniden doldurulabilir.</span>|9--Kolay ve Güvenli Taşıma--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;G&uuml;venli kilit sistemi kolay ve g&uuml;venli taşıma ve saklama sağlar.</span>|10--Sterilizasyon--<span><h3>Pro Express Ultimate GV9570</h3>&nbsp;Bakterilerin %99.99&rsquo;unu &ouml;ld&uuml;r&uuml;r : y&uuml;ksek basın&ccedil;lı buhar jenerat&ouml;rl&uuml; &uuml;t&uuml;n&uuml;z, sıcaklık ve buhar g&uuml;c&uuml; kombinasyonu sayesinde &uuml;t&uuml;lenebilir kumaşlardaki bakterileri %99.99&rsquo;a varan oranda &ouml;ld&uuml;r&uuml;r.</span>",
          "erp_parcel_dimension_height": "0",
          "integration_attributeId_50": "Var",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "2600 watt",
          "ozellik3_aciklama": "En inatçı kırışıklıkları dahi gideren ve kalın kumaşlar için ideal olan yoğun buhar püskürtme özelliği.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/7DA45566-23F4-4E7E-9A1C0ECDAE9877C5/?w=147&h=147&crop=true__Güçlü Buhar Püskürtme",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/9A8F4D21-3BB9-4086-85E218833EF3C012/?w=147&h=147&crop=true__Durilium AirGlide Autoclean ekstra ince taban",
          "erp_attributeId_51": "1,9 lt",
          "erp_attributeId_50": "Var",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "ozelllik1_aciklama": "Mükemmel sonuçlar için en iyi buhar gücü. Yeni yüksek basınçlı kazan teknolojisi profesyonel standartta kusursuz sonuçlar sunar.",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "GV95",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/100E4F26-AC63-4C03-95A770EAF922278C/?w=147&h=147&crop=true__Kolay kullanımlı kontrol paneli parmaklarınızın ucunda",
          "erp_pallet_dimension_depth": "0",
          "turu": "Buhar İstasyonlu",
          "integration_attributeId_86": "7,8 bar",
          "derinlik": "250 mm",
          "integration_agirlik": "5100",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_attributeId_227": "Var",
          "integration_grup6kodu": "EY",
          "integration_packed_dimension_depth": "0",
          "integration_products_percontainer_hq4": "0"
        },
        "attribute_set": 8,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "550 g/dk",
            "data_type": "dropdown",
            "label": "550 g/dk"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_attributeId_22": {
            "value": "Mavi",
            "data_type": "dropdown",
            "label": "Mavi"
          },
          "erp_attributeId_47": {
            "value": "7,8 bar",
            "data_type": "dropdown",
            "label": "7,8 bar"
          },
          "integration_attributeId_730": {
            "value": "1,7 m",
            "data_type": "dropdown",
            "label": "1,7 m"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_22": {
            "value": "Beyaz - Mavi",
            "data_type": "dropdown",
            "label": "Beyaz - Mavi"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_attributeId_49": {
            "value": "550 g/dk",
            "data_type": "dropdown",
            "label": "550 g/dk"
          },
          "integration_attributeId_693": {
            "value": "150 g/dk - 550 g/dk",
            "data_type": "dropdown",
            "label": "150 g/dk - 550 g/dk"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_51": {
            "value": "1,9 lt",
            "data_type": "dropdown",
            "label": "1,9 L"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_287": {
            "value": "2600 watt",
            "data_type": "dropdown",
            "label": "2600 watt"
          },
          "erp_attributeId_51": {
            "value": "1,9 lt",
            "data_type": "dropdown",
            "label": "1,9 lt"
          },
          "integration_attributeId_47": {
            "value": "7,8 bar",
            "data_type": "dropdown",
            "label": "7,8 bar"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "product_line": {
            "value": "LINEN CARE",
            "data_type": "dropdown",
            "label": "LINEN CARE"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_attributeId_693": {
            "value": "150 g/dk - 550 g/dk",
            "data_type": "dropdown",
            "label": "150 g/dk - 550 g/dk"
          },
          "integration_attributeId_86": {
            "value": "7,8 bar",
            "data_type": "dropdown",
            "label": "7,8 bar"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 3664,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/01/11/1032/bce387db-c467-47e6-aabc-df5046a0e27e.jpg",
            "order": 1,
            "created_date": "2021-01-11T06:35:25.578948Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 1390,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/07/03/1032/a4b5345b-f055-4792-a97b-b946afbdd70e.jpg",
            "order": 2,
            "created_date": "2020-09-02T15:30:24.277823Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 1433,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/07/03/1032/6930f5c5-0b57-4654-a34a-0b0be1b61e23.jpg",
            "order": 3,
            "created_date": "2020-09-02T15:30:27.745802Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 1475,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/07/03/1032/7673d0d7-3d25-43db-bebf-c0e66d6c7709.jpg",
            "order": 4,
            "created_date": "2020-09-02T15:30:29.725645Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 1512,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2020/07/03/1032/2d8de87b-9fbc-41cc-bfd6-2adee426f8cd.jpg",
            "order": 5,
            "created_date": "2020-09-02T15:30:31.830940Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "6759.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "6759.90",
        "unit_type": "qty",
        "absolute_url": "/pro-express-ultimate-care-gv9570-buhar-kazanli-utu-1830006374/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": false,
        "stock": 3,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3633,
        "name": "RG9075 X-Plorer Serie 130 AI Mop Özellikli Akıllı Robot Süpürge - Evcil Hayvan Dostu",
        "sku": "2211401083",
        "base_code": "RG907",
        "attributes": {
          "erp_alt_aile_kodu": "E05071",
          "integration_pallet_weight": "0",
          "integration_editorial_description_title": "Şimdiye kadarki en ince lazer robot elektrikli süpürgeyle zahmetsiz temizlik*",
          "integration_pallet_dimension_width": "0",
          "temizlik_metodlari": "4'ü Bir Arada Temizlik Fonksiyonu",
          "ozellik4_aciklama": "Temizlik seanslarınızı başlatmak hiç bu kadar kolay olmamıştı: sadece sesli asistanlarınızı (Amazon Alexa veya Google Home) etkinleştirin ve robot elektrik süpürgesinin gerisini halletmesine izin verin.",
          "cekis_gucu": "2700 pa",
          "ozellik5_aciklama": "İki yan fırça köşeleri ve ulaşılması zor alanları kaplar, büyük toz ve birikintiler için merkezi bir fırça, güvenilir emiş için güçlü bir motor ve yüzeyleri paspaslamak için Aqua Power System.",
          "yukseklik": "8 cm",
          "integration_attributeId_22": "Siyah",
          "erp_grup2kodu": "L",
          "erp_pallet_weight": "0",
          "integration_barkod": "3221616042629",
          "parca_sayisi": "3",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "toz_kapasitesi": "0.5 L",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "E05",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "engel_yonetimi": "İyi",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "oda_secimi": "Var",
          "integration_products_percontainer_c20": "0",
          "ozellik8_aciklama": "Robot süpürgenizi Sessiz Modda çalıştırırken tüm aile için konforlu bir temizlik deneyimiyle, günlük konuşmalardan daha sessiz olan ve 60 dB(A) kadar düşük bir seviyede sessiz temizliği deneyimleyin.",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "E05",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "compare_product_slug": "robot-supurge-compare",
          "erp_products_percontainer_hq4": "0",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/C215F96A-F852-463E-80641AC267FBEE45/?w=147&h=147&crop=false__Sessiz temizlik",
          "ozellik2_aciklama": "Ücretsiz uygulama, odaya göre temizlik, girilemeyen bölgeler, paspas kullanılmayan alanlar, yoğun bölgeler ve daha fazlası gibi gelişmiş özelleştirme için kalıcı haritalama sunar. Robot, istediğiniz her yeri temizler ve daha fazlasını yapmaz!",
          "product_calisma_suresi": "120 dk",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3221616042629",
          "erp_range": "RG907",
          "haritalama": "Var",
          "agirlik": "3,65 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/0716EA78-1D14-49A3-9876A69E38A9466D/?w=147&h=147&crop=false__4'ü 1 arada temizleme işlemi",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "mottoaciklama": "*Avrupa'da (23 ülkede) en çok satan ilk 15 lazer robot ile karşılaştırıldığında, bağımsız panel 2021 verileri, değer ve hacim satışlarına göre",
          "odalara_gore_temizlik_programlama": "Var",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "downloadable_image_title": "https://64ee49.cdn.akinoncloud.com/cms/2023/05/18/ada0ca51-82c3-4c18-80b7-57c514f26ac0.pdf",
          "integration_attributeId_659": "3 saat",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_grup2kodu": "L",
          "erp_is_seo_automatic": "true",
          "integration_alt_aile_kodu": "E05071",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/88281ECE-A029-4AC0-AF46318CA6238D31/?w=147&h=147&crop=false__Optimum yüzey kapsama",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "3650",
          "ozellik6_aciklama": "Normal kullanım için standart paspasla birleştirilmiş Animal Turbo fırça, evcil hayvan lekelerini çıkarmak için özel paspas ve ince alerjen parçacıkları yakalamak içini için özel elektrostatik paspas ile üstün bir temizlik performansı sağlar. Dahası, yüksek performanslı filtre toz alerjenlerini %99,9'a kadar yakalayarak alerjenlerden korumanızı sağlar.",
          "integration_products_percontainer_c40": "0",
          "integration_parcel_dimension_depth": "0",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/8B2650CC-6A23-41EB-980F865BE67C8306/?w=147&h=147&crop=false__Kişiye özel temizleme ve silme",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "yasakli_bolge": "Var",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Ultra ince çerçevesi sayesinde optimum yüzey kaplaması sunan Tefal X-PLORER Serie 130 AI Hayvan ve Alerji Robot Süpürgesi, en son teknolojiyle desteklenen, oyunun kurallarını değiştiren bir temizlik çözümüdür. Bu kolayca her yere ulaşabilen robot süpürge, son teknolojisiyle temizliği kolaylaştırır: lazer navigasyonu, kalıcı haritalaması, özelleştirilebilir olmasıyla benzersiz temizlik deneyimi için kendi kendine öğrenen Yapay Zeka ve çok daha fazlası. Tüm bunlar, temiz, alerjen ve evcil hayvan tüyü içermeyen bir ev için 4'ü 1 arada temizlik, aralarından seçim yapabileceğiniz 3 paspas özelliği ve yüksek performanslı bir filtre ile.",
          "ozellik7_aciklama": "Lityum-iyon pil, otomatik şarj ve temizlik seansının devamı için Charge&Go özelliği ile tek bir şarjla 120 dakikaya kadar (120 metrekareye kadar alanda) kesintisiz temizlik sağlar",
          "hali_algilama": "Var",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/8ACB3D5D-F4D4-47E7-BAA03754DAC744C3/?w=147&h=147&crop=false__Sesli asistan uyumluluğu",
          "integration_parcel_dimension_height": "0",
          "uygulama_kullanim": "Var",
          "short_description": "•\tTek bir şarjla 120 dakika çalışma süresiyle uzun ömürlü pil ömrüne sahiptir. <br> •\tSessiz modda günlük konuşmalardan daha sessiz bir ses seviyesinde (60 dB) temizlik sunar. <br> •\t4'ü 1 arada temizlik ile süpürür, fırçalar, vakumlar ve paspas yapar. <br> •\tSesli asistan uyumluluğu ile temizlik planlamalarını kolaylaştırır. <br> •\t120 metrekareye kadar kapsama alanına sahiptir.",
          "erp_parcel_dimension_height": "0",
          "integration_marka": "01",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/445D5551-E619-4E3C-8980746501423628/?w=147&h=147&crop=false__Akıllı Keşif Yapay Zekası",
          "ozellik3_aciklama": "Alışkanlıklara dayalı temizlik veya planlama önerileri, önceki oturumlardan otomatik yasak bölgeler ve daha fazlası ile yapay zeka aracılığıyla daha fazla özerkliğe ulaşan kendi kendine öğrenen bir cihaz.",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "cok_oda_yon": "Var",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/BA2A92AE-A4F1-4CAF-ADF5234AC4FCAF88/?w=147&h=147&crop=false__Uzun pil dayanım performansı",
          "downloadable_link": "https://tefal.akinoncdn.com/cms/2021/04/26/925fa363-a26d-4686-8dd7-07454e111ec6.jpe__Kullanım Kılavuzu",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "integration_attributeId_34": "60 dBA",
          "haritalandirma_teknolojisi": "Lazer (LIDAR + SLAM)",
          "erp_products_percontainer_c20": "0",
          "uzaktan_kumanda": "Yok",
          "integration_range": "RG907",
          "mop_ozelligi": "Var, 3 adet mop dahildir",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/F079F58F-A8B2-4B86-A66F97EF1FBFD0F6/?w=147&h=147&crop=false__Evcil Hayvan Sahiplerine ve Alerjik Kişislere Özel Temizlik",
          "erp_pallet_dimension_depth": "0",
          "erp_products_percontainer_c40": "0",
          "wmf_motto": "Gelmiş geçmiş en ince lazer robot*",
          "integration_agirlik": "3650 gr",
          "integration_parcel_dimension_width": "0",
          "new_product": "Yeni",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "integration_packed_dimension_depth": "0",
          "ozellik1_aciklama": "Metodik temizlik için akıllı lazer navigasyonu, yalnızca 8 cm yüksekliğinde (en alçak mobilyaların altına bile sığacak kadar) ultra ince dizaynıyla, temizlik deneyiminiz artık ultra teknolojik!"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_34": {
            "value": "60 dBA",
            "data_type": "dropdown",
            "label": "60 dBA"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "haritalama": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_22": {
            "value": "Siyah",
            "data_type": "dropdown",
            "label": "Siyah"
          },
          "product_calisma_suresi": {
            "value": "120 dk",
            "data_type": "dropdown",
            "label": "120 dk"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_659": {
            "value": "3 saat",
            "data_type": "dropdown",
            "label": "3 saat"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "oda_secimi": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 10811,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/03/07/11947/04077710-4664-4b21-8bf7-3094d1f8ebd9.jpg",
            "order": 1,
            "created_date": "2023-03-09T05:01:45.643573Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10806,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/03/07/11947/017a7a3a-d401-41ea-babd-55701a5419a8.jpg",
            "order": 2,
            "created_date": "2023-03-09T05:01:45.370530Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10807,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/03/07/11947/b14b2a01-4baf-4974-9872-db28832653e4.jpg",
            "order": 3,
            "created_date": "2023-03-09T05:01:45.454025Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10809,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/03/07/11947/74a46b42-09e5-4b60-bbf1-5e8f23b37c58.jpg",
            "order": 4,
            "created_date": "2023-03-09T05:01:45.545991Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10808,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/03/07/11947/8d515a6c-bdd2-4d5c-853b-0111a553d6d8.jpg",
            "order": 5,
            "created_date": "2023-03-09T05:01:45.501137Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10810,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/03/07/11947/af0667b2-9334-4725-9465-c35c601a061e.jpg",
            "order": 6,
            "created_date": "2023-03-09T05:01:45.591982Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "15299.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "15299.90",
        "unit_type": "qty",
        "absolute_url": "/rg9075-x-plorer-serie-130-ai-mop-ozellikli-akilli-robot-supurge-evcil-hayvan-dostu-2211401083/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 97,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3603,
        "name": "Express Steam FV2844 Buharlı Ütü",
        "sku": "4300007576",
        "base_code": "FV283",
        "attributes": {
          "integration_pallet_weight": "0",
          "integration_editorial_description_title": "Ekspres Buhar: Daha hızlı ve daha dayanıklı*",
          "compare_product_slug": "buharli-utuler-compare",
          "integration_garanti_durumu": "Var, Başlamamış",
          "integration_layers_perpallet": "0",
          "integration_attributeId_693": "40 gr/dk",
          "integration_attributeId_24": "Seramik",
          "marketplace_product_name": "Express Steam FV2844 Buharlı Ütü",
          "erp_pallet_weight": "0",
          "integration_page_description": "Express Steam FV2844",
          "integration_barkod": "6224008208495",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "L01",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "product_agirlik": "1.1 kg",
          "integration_products_percontainer_c20": "0",
          "erp_pallet_volume": "0",
          "integration_attributeId_50": "Var",
          "integration_aile_kodu": "L01",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "n11_product_description": "Express Steam FV2844 Buharlı Ütü",
          "ozellik2_aciklama": "Su haznesi, uzun ütü seansları, kolay doldurma ve gözle görülür bir su seviyesi sağlayarak nihai rahatlık için tasarlanmıştır.",
          "yukseklik": "17 cm",
          "erp_spare_parts_avaibility": "False",
          "erp_range": "FV283",
          "product_line": "LINEN CARE",
          "erp_products_percontainer_c40": "0",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "integration_page_title": "Express Steam FV2844",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "270 ml",
          "purchase_limit_per_basket": "5",
          "erp_is_seo_automatic": "true",
          "garantisure": "2 Yıl",
          "integration_alt_aile_kodu": "L01001",
          "integration_attributeId_49": "130 gr/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/F9CE4487-9297-4CAA-AA280D1B492E574B/?w=147&h=147&crop=false__Hızlı ısınma ve ütüleme için 2400 Watt",
          "integration_sirketkodu": "2006_GSEB",
          "erp_pallet_dimension_depth": "0",
          "erp_agirlik": "1300",
          "integration_products_percontainer_c40": "0",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "2 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/40EB6DDA-B0B1-4798-BC808EBC947248C3/?w=147&h=147&crop=false__Görünür seviyeye sahip yüksek kapasiteli kolay doldurma su deposu",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Daha yüksek buhar performansını* ve gelişmiş özellikleri buluşturan EXPRESS STEAM, ütülemeyi hızlı ve kolay hale getirir. Kolay ütüleme için dayanıklı seramik tabana sahip olan Express Steam ayrıca hızlı ısınma süresi için 2400 W güç ve en inatçı kırışıklıkların bile üstesinden gelmek için ekstra güçlü 130 g/dk şok buhar ile birlikte gelir. Express Steam damlama önleme özelliğiyle kumaşı lekesiz ve korumalı tutargünlük ütüleme için kolayca doldurulabilen büyük bir su haznesine sahiptir.",
          "ozellik1_aciklama": "2400 Watt gücü ile hızlı ısınma sağlar ve ihtiyaç duyduğunuz anda kusursuz sonuçlar sunar.",
          "erp_alt_aile_kodu": "L01001",
          "damlama_onizleme": "Var",
          "integration_parcel_dimension_height": "0",
          "integration_attributeId_22": "Bordo",
          "short_description": "•\tGÜÇLÜ: Hızlı ısınma ve verimli ütüleme için 2400 W güç <br> •\tHIZLI: Hızlı ve rahat kayma için dayanıklı seramik tabanla donatılmıştır. <br> •\tKIRIŞIKLIKLARI GİDERİN: Zorlu kırışıklıklar için 130 gr/dk'ya kadar şok buhar gücüne sahiptir <br> •\tDAMLAMA ÖNLEME SİSTEMİ: Damlama önleyici sistem, suyun çarşaflarınızı lekelemesini önler",
          "erp_parcel_dimension_height": "0",
          "erp_pallet_dimension_width": "0",
          "n11_product_title": "Express Steam FV2844 Buharlı Ütü",
          "integration_agirlik": "1300 gr",
          "garanti_suresi": "2 yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "2400 watt",
          "ozellik3_aciklama": "Damlama önleme özelliği, düşük sıcaklıklarda ütü yaparken bile lekesiz sonuçlar için su lekelerini önler ve kumaşı korur.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B0355C36-3D65-4329-B32167E5C9FECD11/?w=147&h=147&crop=false__Lekesiz çamaşırlar için damlama önleyici koruma",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "integration_products_percontainer_hq4": "0",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_hq4": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "FV283",
          "erp_marka": "1",
          "erp_parcel_dimension_depth": "0",
          "integration_durum": "Sıfır",
          "turu": "Buharlı",
          "integration_attributeId_86": "7,5 bar",
          "derinlik": "12 cm",
          "erp_barkod": "6224008208495",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_attributeId_227": "Yok",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "130 gr/dk",
            "data_type": "dropdown",
            "label": "130 gr/dk"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_287": {
            "value": "2400 watt",
            "data_type": "dropdown",
            "label": "2400 watt"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_51": {
            "value": "270 ml",
            "data_type": "dropdown",
            "label": "270 ml"
          },
          "product_line": {
            "value": "LINEN CARE",
            "data_type": "dropdown",
            "label": "LINEN CARE"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_693": {
            "value": "40 gr/dk",
            "data_type": "dropdown",
            "label": "40 gr/dk"
          },
          "integration_attributeId_730": {
            "value": "2 m",
            "data_type": "dropdown",
            "label": "2 m"
          },
          "integration_attributeId_227": {
            "value": "Yok",
            "data_type": "dropdown",
            "label": "Yok"
          },
          "integration_attributeId_86": {
            "value": "7,5 bar",
            "data_type": "dropdown",
            "label": "7,5 bar"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_marka": {
            "value": "1",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_24": {
            "value": "Seramik",
            "data_type": "dropdown",
            "label": "Seramik"
          },
          "product_agirlik": {
            "value": "1.1 kg",
            "data_type": "dropdown",
            "label": "1.1 kg"
          },
          "integration_attributeId_22": {
            "value": "Bordo",
            "data_type": "dropdown",
            "label": "Bordo"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 10770,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/01/23/11551/4374e278-6bdf-4fbb-a199-390340364d04.jpg",
            "order": 1,
            "created_date": "2023-02-07T13:49:18.281749Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10771,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/01/23/11551/e2add6c5-dfe1-4c6a-b0ed-f088e108ef66.jpg",
            "order": 2,
            "created_date": "2023-02-07T13:49:18.517453Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10772,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/01/23/11551/6a47b71a-68a2-47cd-ac7f-2ddc84be6fac.jpg",
            "order": 3,
            "created_date": "2023-02-07T13:49:18.567018Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10773,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/01/23/11551/11d9e0fe-8d84-4dba-bcf8-bbcd97419012.jpg",
            "order": 4,
            "created_date": "2023-02-07T13:49:18.615737Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "789.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "789.90",
        "unit_type": "qty",
        "absolute_url": "/express-steam-fv2844-buharli-utu-4300007576/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 1139,
        "name": "Express Protect SV9201 Buhar Kazanlı Ütü",
        "sku": "1830007763",
        "base_code": "SV920",
        "attributes": {
          "erp_alt_aile_kodu": "L02140",
          "integration_pallet_weight": "0",
          "erp_products_percontainer_c40": "0",
          "integration_editorial_description_title": "Express Protect SV9201 Buhar Kazanlı Ütü",
          "teslimat_sureleri": "2",
          "ozellik4_aciklama": "530 g / dakikalık bir buhar püskürtme gücünün ham gücü, en inatçı kırışıklıkları bile düzeltebilir.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/BE2AB3C5-F17F-41DF-918A6BD26AE57399/?w=147&h=147&crop=false__Mükemmel Sonuçlar",
          "ozellik5_aciklama": "Herhangi bir kumaş üzerinde zahmetsiz, endişesiz ütüleme: Mükemmel buhar ve sıcaklık kombinasyonu ile ütülenebilir kumaşları yakma riski olmadan ütüler.",
          "yukseklik": "294 mm",
          "integration_attributeId_693": "130 gr/dk",
          "integration_attributeId_22": "Mor",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_barkod": "3121040077634",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "L02",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "integration_attributeId_105": "Paslanmaz Çelik",
          "integration_products_percontainer_c20": "0",
          "ozellik8_aciklama": "Kolay dikey ütüleme özelliği, ihtiyacınız olduğunda en iyi şekilde görünmenize yardımcı olacak son dakika rötuşları için sadece 30 saniyede yıldırım hızında ısınma süresine sahiptir.",
          "erp_pallet_volume": "0",
          "integration_attributeId_50": "Var",
          "integration_aile_kodu": "L02",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "compare_product_slug": "buhar-kazanli-utuler-compare",
          "erp_products_percontainer_hq4": "0",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/3562D80A-2651-49D1-8E425EE30BD004A7/?w=147&h=147&crop=false__Dikey ütüleme",
          "ozellik2_aciklama": "The 7,5 bar pompa basıncı kısa ütüleme seanslarında bile mükemmel sonuçlar sağlar",
          "ozellik9_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E06CF3B9-CB14-4468-9F58A03AFDAA9750/?w=147&h=147&crop=false__Sessiz pompa teknolojisi",
          "integration_layers_perpallet": "0",
          "erp_serisonuflg": "false",
          "erp_barkod": "3121040077634",
          "erp_range": "SV920",
          "product_line": "LINEN CARE",
          "agirlik": "4,25 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E0BA570D-FF8D-417C-ACE298382DA99BB0/?w=147&h=147&crop=false__100% Güvenli",
          "integration_gecerli": "true",
          "min_stok": "10",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "downloadable_image_title": "https://tefal.akinoncdn.com/cms/2021/11/03/8adcfa73-0714-492e-8602-2108f950db74.pdf",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "1,8 L",
          "integration_grup2kodu": "M",
          "erp_is_seo_automatic": "true",
          "genislik": "398 mm",
          "integration_alt_aile_kodu": "L02140",
          "integration_attributeId_49": "530 gr/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/45D75067-8867-4779-866197598886A45E/?w=147&h=147&crop=false__Ultra güçlü",
          "ozellik9_aciklama": "Daha keyifli ütü seansları için gelişmiş sessiz pompa teknolojisi ile daha yüksek konfor seviyesini yaşayın.",
          "erp_agirlik": "4250",
          "ozellik6_aciklama": "Tabandan ve buhardan gelen ısı kombinasyonu, maksimum hijyen için mikrop bakterilerin % 99,9'una kadar öldürmeye yardımcı olur.",
          "ozellik12_aciklama": "• Kolay onarım için tasarlandı • 10 yıl boyunca düşük maliyetli hızlı yedek parça teslimatı • Dünya çapında 6500 onarım merkezi",
          "integration_products_percontainer_c40": "0",
          "integration_attributeId_47": "7,5 bar",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "1,6 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/27717876-D8F1-4D46-85B4F5F8422D555B/?w=147&h=147&crop=false__Yüksek Verimlilik",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "integration_sirketkodu": "2006_GSEB",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Express Protect SV9201 Buhar Kazanlı Ütü, en zorlu ütüleme ihtiyaçları için bile olağanüstü sonuçlar verir. 7.5 bar basınç ve 130 g / dakikaya kadar sürekli buhar çıkışı ile kısa sürede ütüleme imkanı ve yüksek verimlilik sağlar. 530 g / dakikalık şok buharının yoğun gücü, en inatçı kırışıklıkları bile giderir. Patentli anti kireç sistemi ile uzun süreli performans sağlar. Giysilerinizi % 100 güvende tutan, ayar gerektirmeyen teknoloji ile ütülenebilir kumaşları yakma riskiniz de yoktur.<br><br>Groupe SEB N.1 Avrupa'nın 1 Numaralı Ütü Üreticisi*<br><br>*Euromonitor International Limited, ütü kategorisi,Groupe SEB’in ütü markalarının 2019 yılındaki toplam hacim bazında perakende satışı (Tefal, Calor,Rowenta, OBH Nortica)",
          "ozellik7_aciklama": "Durilium AirGlide Tabanı, optimum buhar difüzyonu ile zahmetsiz ve eğlenceli ütü seansları, Auto-clean kaplama ile sorunsuz bakım ve olağanüstü kayma sağlar.",
          "ozellik1_aciklama": "Daha kısa ütüleme seanslarında olağanüstü sonuçlar elde etmek için 7,5 bar ile maksimum verimlilik.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/F9B0AD94-8993-4E00-892E6E9359ACE830/?w=147&h=147&crop=false__Güçlü şok buhar",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "erp_gecerli": "true",
          "short_description": "• 530 g/ dk şok buhar<br>\n• 130 g/dk sürekli buhar çıkışı<br>\n• Anti kireç sistemi<br>\n• Ayar gerektirmeyen teknoloji<br>",
          "erp_parcel_dimension_height": "0",
          "erp_pallet_dimension_width": "0",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "2800 watt",
          "ozellik3_aciklama": "130 g / dk'lık sürekli buhar çıkışı, kırışıkların kolayca giderilmesi için her seferinde olağanüstü sonuçlar üretir.",
          "integration_model": "Express Airglide SV8020",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B426CBC3-2C7B-4EA7-B28D89E10DA6303E/?w=147&h=147&crop=false__Kusursuz kayganlık",
          "downloadable_link": "https://tefal.akinoncdn.com/cms/2021/11/03/a2cc0f9f-b00b-4a4c-b8ea-f61abd60f109.jpe__Kullanım Kılavuzu",
          "integration_products_percontainer_hq4": "0",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "SV920",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/FB8E4A72-6F9A-4EC9-A14C626F7C924E21/?w=147&h=147&crop=false__Giysilerinizi sterilize eder",
          "erp_pallet_dimension_depth": "0",
          "derinlik": "243 mm",
          "integration_agirlik": "4250",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_attributeId_227": "Var",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 6,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "530 gr/dk",
            "data_type": "dropdown",
            "label": "530 gr/dk"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_287": {
            "value": "2800 watt",
            "data_type": "dropdown",
            "label": "2800 watt"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_51": {
            "value": "1,8 L",
            "data_type": "dropdown",
            "label": "1,8 L"
          },
          "product_line": {
            "value": "LINEN CARE",
            "data_type": "dropdown",
            "label": "LINEN CARE"
          },
          "integration_attributeId_47": {
            "value": "7,5 bar",
            "data_type": "dropdown",
            "label": "7,5 bar"
          },
          "integration_attributeId_105": {
            "value": "Paslanmaz Çelik",
            "data_type": "dropdown",
            "label": "Paslanmaz Çelik"
          },
          "integration_attributeId_693": {
            "value": "130 gr/dk",
            "data_type": "dropdown",
            "label": "130 gr/dk"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_730": {
            "value": "1,6 m",
            "data_type": "dropdown",
            "label": "1,6 m"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_22": {
            "value": "Mor",
            "data_type": "dropdown",
            "label": "Mor"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": true
        },
        "productimage_set": [
          {
            "pk": 8087,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/b0f3ccfb-8a72-4f6b-9946-a91b60d4f070.jpg",
            "order": 1,
            "created_date": "2021-10-14T15:25:58.354515Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8105,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/4943f420-e8fc-4ac6-b7d8-81a8cf6a7638.jpg",
            "order": 2,
            "created_date": "2021-10-14T15:35:22.296990Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8090,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/b260ca45-b629-4da8-9aaf-63b67dc46863.jpg",
            "order": 3,
            "created_date": "2021-10-14T15:25:58.493322Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8091,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/70c883d9-2bd5-4f51-b13e-adf6cbfcb084.jpg",
            "order": 4,
            "created_date": "2021-10-14T15:25:58.536683Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8106,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/da363bc9-7365-4894-bc22-7a62e6a0f4a5.jpg",
            "order": 6,
            "created_date": "2021-10-14T15:35:22.351547Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8095,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/8208c11f-67c2-412c-a30c-afc3a7632f0a.jpg",
            "order": 7,
            "created_date": "2021-10-14T15:25:58.703115Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8097,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/40349bbe-2d7f-40b2-9c4c-bec3603fb9ca.jpg",
            "order": 8,
            "created_date": "2021-10-14T15:25:58.792007Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8098,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/46eff202-e36e-482e-909d-120ffab762d9.jpg",
            "order": 9,
            "created_date": "2021-10-14T15:25:58.836304Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8100,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/912937a8-77d8-4aca-87dd-4c624ecda58b.jpg",
            "order": 10,
            "created_date": "2021-10-14T15:25:58.925000Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8102,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/79cbb161-fd8b-49ef-9c5a-263ff56a9f7e.jpg",
            "order": 11,
            "created_date": "2021-10-14T15:25:59.027324Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8104,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/2233/cf32ef10-675c-4ad7-b49b-c2219ad796be.jpg",
            "order": 12,
            "created_date": "2021-10-14T15:25:59.127344Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "5269.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "5269.90",
        "unit_type": "qty",
        "absolute_url": "/express-protect-sv9201-buhar-kazanli-utu-1830007763/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": false,
        "stock": 1,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3351,
        "name": "Aqua Head Mop Başlık",
        "sku": "2211400878",
        "base_code": "ZR0096",
        "attributes": {
          "erp_alt_aile_kodu": "E01082",
          "integration_pallet_weight": "0",
          "integration_en": "0",
          "integration_editorial_description_title": "Temizlik sürenizi iki kat düşürün!",
          "ozellik4_aciklama": "Kullanışlı ayak pedalı, sezgisel, kullanımı kolay bir aksesuardır ve yüksek hassasiyetli temizlik için ayağınızla su akışını düzenlemenize izin verir. Aynı zamanda kolay ve kullanışlı saklama seçenekleri sunar.",
          "erp_boy": "0",
          "ozellik5_aciklama": "Maksimum rahatlık için çıkarılabilir su haznesi ile yeniden doldurma işlemi çok kolay.",
          "integration_attributeId_22": "Siyah",
          "erp_grup2kodu": "L",
          "erp_pallet_weight": "0",
          "integration_barkod": "3221616000865",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "E01",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "erp_pallet_volume": "0",
          "integration_yukselik": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "E01",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "dahili_aksesuarlar": "2 Mop",
          "ozellik2_aciklama": "Köşelerde bile ileri ve geri çift aksiyonlu temizlik yapmanızı sağlayan yenilikçi, yüksek teknoloji dizaynı ile kolay temizliği deneyimleyin.",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_yukselik": "0",
          "erp_range": "ZR0096",
          "erp_products_percontainer_c40": "0",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/81A9CB86-A0B5-42CA-B266A6870D669CEC/?w=147&h=147&crop=false__Çıkarılabilir Su Haznesi",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "erp_en": "0",
          "integration_grup2kodu": "L",
          "erp_is_seo_automatic": "true",
          "integration_alt_aile_kodu": "E01082",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/DB143715-A1E2-460D-9E46617C129E25CF/?w=147&h=147&crop=false__Zahmetsiz performans",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "1040",
          "ozellik6_aciklama": "Paspas aparatı kolayca parçalarına ayrılır ve günlük kullanım için ideal bir tasarımla  beraber hızlıca temizlenebilmesi için çamaşır makinesinde bile yıkanabilir.",
          "integration_products_percontainer_c40": "0",
          "erp_barkod": "3221616000865",
          "integration_parcel_dimension_depth": "0",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/3216692A-2176-43B4-BD38B9A59FB49C54/?w=147&h=147&crop=false__İz Bırakmaksızın İleri Ve Geri Yönlü Temizlik",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Güçlü Eco pozisyonunda kullanılırken 7 hücreli 25,2V çıkarılabilir kaydırmalı bataryasıyla 45 dakikaya kadar kesintisiz yüksek güç sunar. Yeniden şarj etmeye ihtiyaç duymaksızın bütün evinizi süpürmek için mükemmel.",
          "ozellik1_aciklama": "Normalin yarısı kadar sürede süpürme ve paspas yapmanıza olanak tanıyan ve temizlik deneyimini yükselten bu zahmetsiz çözüm ile temizlik rutininizde zaman tasarrufu sağlayın.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/39D0FE1C-249E-4A2C-9DAF089D9D7696A3/?w=147&h=147&crop=false__Kolay Kontrol",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "Outlet": "Evet",
          "integration_boy": "0",
          "short_description": "•\tKullanışlı ayak pedalı : Su akışını düzenleyin <br> •\tÇıkarılabilir su haznesi <br> •\tİleri ve geri hareket kabiliyeti <br> •\tKolay temizlenme : Çamaşır makinesinde yıkanabilir mop <br>•\tUyumlu olduğu modeller: TY9688 ve TY9679",
          "erp_parcel_dimension_height": "0",
          "integration_marka": "02",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/FB1060D1-6554-4BAC-8ADED44AF6CC7517/?w=147&h=147&crop=false__Zorlu Kirler İçin İdeal",
          "ozellik3_aciklama": "Mısır gevreği veya yer fıstığı gibi daha büyük parçalar dahil olmak üzere her türlü kirle baş edebilecek şekilde tek seferde kolay temizlik için tasarlanmıştır.",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_hq4": "0",
          "erp_products_percontainer_c20": "0",
          "integration_range": "ZR0096",
          "erp_marka": "02",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/C0E6D106-8EBB-4DA6-9D5D5B827B2E84D5/?w=147&h=147&crop=false__Kolay Bakım",
          "erp_pallet_dimension_depth": "0",
          "integration_agirlik": "1040 gr",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "02",
            "data_type": "dropdown",
            "label": "ROWENTA"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_marka": {
            "value": "02",
            "data_type": "dropdown",
            "label": "ROWENTA"
          },
          "Outlet": {
            "value": "Evet",
            "data_type": "dropdown",
            "label": "Evet"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_22": {
            "value": "Siyah",
            "data_type": "dropdown",
            "label": "Siyah"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 9637,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10727/dc423393-8d4d-4d91-b52d-2b79a3711cdc.jpg",
            "order": 1,
            "created_date": "2022-09-13T10:24:53.241567Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9641,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10727/c18475df-f914-4554-b782-fbd8d9ef1d8d.jpg",
            "order": 2,
            "created_date": "2022-09-13T10:24:53.457707Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9638,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10727/c7fe4770-2513-48c3-ad20-0831eaf0cf95.jpg",
            "order": 3,
            "created_date": "2022-09-13T10:24:53.322525Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9642,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10727/55d8296e-5935-4d79-98fc-dd789247cf47.jpg",
            "order": 4,
            "created_date": "2022-09-13T10:24:53.504295Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9643,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10727/30792165-c3ca-4b5c-ae5d-dc46926bb4c9.jpg",
            "order": 5,
            "created_date": "2022-09-13T10:24:53.554190Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9639,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10727/09dd8a2d-8769-40ec-8b74-5dce0631948e.jpg",
            "order": 6,
            "created_date": "2022-09-13T10:24:53.368347Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9644,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10727/6d384127-7126-4a7f-bf20-fc9433c3dd32.jpg",
            "order": 7,
            "created_date": "2022-09-13T10:24:53.611758Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9640,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/09/13/10727/4cde1d8c-2184-4c09-b1a1-3b3806b912e2.jpg",
            "order": 8,
            "created_date": "2022-09-13T10:24:53.409952Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "1329.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "1329.90",
        "unit_type": "qty",
        "absolute_url": "/aqua-head-mop-baslik-2211400878/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 11,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 2225,
        "name": "TW7289 5★ Silence Force Cyclonic Kahverengi Toz Torbasız Elektrikli Süpürge",
        "sku": "2211400975",
        "base_code": "TW72",
        "attributes": {
          "erp_alt_aile_kodu": "E01161",
          "integration_pallet_weight": "0",
          "integration_attributeId_67": "POWER AIR Başlık, Maxi Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Radyatör Başlığı, Entegre Easy Brush",
          "ozellik13_baslik": "https://tefal.akinoncdn.com/cms/2021/03/30/1728cdc4-2c39-4632-8536-91def826af1d.jpe__%100’e Kadar Alerjen Filtrelemesi",
          "integration_editorial_description_title": "Temizliğin Şekli Değişiyor",
          "performans_verimliligi": "2100 W",
          "teslimat_sureleri": "2",
          "ozellik4_aciklama": "Güçlü, yüksek verimli POWER AIR emiş başlığı, güvenebileceğiniz derin temizleme performansıyla hem halılar hem de sert zeminler için ihtiyacınız olan her yerde mükemmel sonuçlar sağlar.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/8DD0FB3B-DFB4-447D-9161CA4EEB0F65F4/?w=147&h=147&crop=false__Geliştirilmiş Ergonomiye Sahip Şık Tasarım",
          "ozellik5_aciklama": "Yüksek verimli siklonik filtreleme, mükemmel sonuçlar sunar. %99,98'lik bir toz / hava ayırma oranıyla olağanüstü toz filtreleme performansına sahiptir.",
          "sss4_cevap": "TW7289 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürge üç aşamalı köpük + siklon + yüksek verimli filtre sistemini kullanır.",
          "integration_attributeId_22": "Koyu Kahverengi",
          "sss4_soru": "TW7289 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgenin filtreleme sistemi nasıldır?",
          "ozellik14_baslik": "https://tefal.akinoncdn.com/cms/2021/03/30/4e6d914c-5800-47f5-a628-89ea3053e9f6.png__2100 Watt Güç Verimliliği",
          "erp_pallet_weight": "0",
          "sss6_cevap": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürgede bulunan siklon teknolojisi oluşturduğu hava akışıyla, istenmeyen toz parçacıklarını haznesinde toplar. Oluşturduğu girdap ve filtre sayesinde tozun dışarıya çıkmasını engeller.",
          "integration_barkod": "3221616009004",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "toz_kapasitesi": "2,5 L",
          "erp_packed_dimension_depth": "0",
          "ozellik11_aciklama": "Size özel müşteri temsilciniz ile tüm sorularınıza daha hızlı çözüm bulacak, Süpürgenin Uzmanlarından tüm Tefal ürünlerine dair detaylı destek alabilecek ve size özel kampanyalardan anında haberdar olacaksınız. Kampanyadan yararlanmak için ürününüzü, tefalplus.com websitesine fatura tarihinden itibaren 30 gün içerisinde kaydedebilirsiniz.",
          "erp_aile_kodu": "E01",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "sss5_soru": "TW7289 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgenin kullanım yarıçapı kaç metredir?",
          "erp_serisonuflg": "false",
          "ozellik11_baslik": "https://tefal.akinoncdn.com/cms/2021/03/30/e3a1dd84-837c-4469-b77e-014d0e9da450.png__VIP Müşteri Hizmetleri",
          "integration_products_percontainer_c20": "0",
          "ozellik12_aciklama": "Tefal, 10 yıl boyunca ürününüzün olası bakım ve onarımları için yedek parça bulundurmayı garanti etmektedir.",
          "ozellik8_aciklama": "Yanlızca 67 dB (A) düzeyinde benzersiz bir sessizlik derecesi ile çarpıcı performansın birleşimini deneyimleyin.",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "E01",
          "integration_products_perplayer": "0",
          "erp_products_percontainer_c20": "0",
          "erp_layers_perpallet": "0",
          "erp_products_percontainer_hq4": "0",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E06CF3B9-CB14-4468-9F58A03AFDAA9750/?w=147&h=147&crop=false__Mükemmel konfor için mutlak sessizlik",
          "ozellik2_aciklama": "POWER AIR Toz Başlığı, zorlu temizliklerin üstesinden gelmek için tasarlanmış iki konumlu toz fırçası ile donatılmıştır, bu özelliği sayesinde her yüzeyde kusursuz kayma ile derinlemesine temizlik sağlar.",
          "erp_defoluflg": "false",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3221616009004",
          "erp_range": "TW72",
          "product_line": "HOME CLEANING",
          "agirlik": "8,585 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/2EDD7C62-0D14-4E13-BCB54A7A532AFB31/?w=147&h=147&crop=false__Filtrelemede mükemmel performans",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "min_stok": "10",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "sss6_soru": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürgede bulunan siklon teknolojisi ne işe yarar?",
          "integration_grup2kodu": "L",
          "erp_is_seo_automatic": "true",
          "garantisure": "2 Yıl",
          "ozellik12_baslik": "https://tefal.akinoncdn.com/cms/2022/02/04/a717e518-07f3-4498-b0e3-963bad95c47e.jpe__Yedek Parça Güvencesi",
          "integration_alt_aile_kodu": "E01161",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/9A94B562-99A8-44EA-81C3B2FAD6EE3591/?w=147&h=147&crop=false__Yüksek Enerji Tasarrufu",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "8585",
          "ozellik6_aciklama": "Etkileyici 2,5 L kapasite, sıradışı kullanım performansıyla sorunsuz temizliğe olanak tanır.",
          "sss2_soru": "TW7289 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürgenin aksesuarları nelerdir?",
          "kullanim_yaricapi": "8,8 m",
          "integration_products_percontainer_c40": "0",
          "toz_haznesi": "2,5 L",
          "sss1_cevap": "POWER AIR Başlık, her türlü temizliğin üstesinden gelmek için tasarlanmış iki pozisyona sahip bir toz fırçasıdır ve her yüzeyde kusursuz kayma hissi ile derinlemesine temizlik sunar.",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "6,2 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/49AE69DA-3BBC-4EB9-A6F2173186747190/?w=147&h=147&crop=false__Bütün yüzeyleri temizlemek için POWER AIR başlık",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_products_percontainer_c40": "0",
          "erp_gecerli": "true",
          "sss2_cevap": "TW7289 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürge Power Air Başlık, Maxi Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Radyatör Başlığı, Entegre Easy Brush aksesuarlarını içermektedir",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Silence Force Cyclonic torbasız elektrikli süpürge, şık tasarımı ve gelişmiş özelliklere sahip yapısı ile  sınıfının üstün çekiş gücünü temsil eder. Tüm yüzeylerde zahmetsiz kullanım sağlayan iki pozisyonlu POWER AIR başlığı ile sınıfında iyi toz toplama performansına sahiptir. Silence Force Cyclonic derinlemesine temizlik için güvenebileceğiniz gizli silahınızdır. Gelişmiş siklonik filtreleme, daha rahat bir deneyim için geliştirilmiş ve kullanım rahatlığı için yeniden tasarlanmış 2,5 L'lik toz haznesi ile olağanüstü toz/hava ayrımı sağlar. Çarpıcı estetik tasarımı, evcil hayvan sahipleri için geliştirilmiş aksesuarları ve geliştirilmiş özellikleri ile her ev için mükemmel sonuçlar ortaya çıkaran torbasız elektrikli süpürgeyi oluşturur.",
          "sss3_cevap": "TW7289 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürge yalnızca 67 dB (A) düzeyinde benzersiz bir sessizlik derecesi ile çarpıcı performansı birleştirir.",
          "ozellik7_aciklama": "Daha az enerji tüketimiyle daha fazla temizlik için geliştirilen yeni EffiTech Motor sistemi, son teknolojisi ile üstün enerji verimliliği sağlar",
          "ozellik1_aciklama": "Optimize edilmiş hava akışı ve iki konumlu başlığı, olağanüstü temizleme performansı ve verimliliği sunar.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/91AB50F7-F3D1-4C34-A34531540F52DACA/?w=147&h=147&crop=false__Tüm Zeminlerde Mükemmel Performans",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "erp_grup2kodu": "L",
          "short_description": "•  67 db(A) ses seviyesi<br>\n•  Tüm zeminlere uygun Power Air başlığı<br>\n•  EffiTech motor<br>\n•  Gelişmiş siklon teknolojisi<br>\n•  Kolay taşıma ve saklama<br>\n•  2,5 litre toz kapasitesi<br>",
          "erp_parcel_dimension_height": "0",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "550 watt",
          "ozellik3_aciklama": "Derinlemesine temizleme gücüne sahip Silence Force Cyclonic , her ev için ideal şık bir estetiğe sahiptir. Büyük tekerlekler ve kolay taşınmasını sağlayan gelişmiş ergonomik tasarımla baştan aşağı yenilendi.",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "sss1_soru": "Power Air başlık nedir?",
          "sss3_soru": "TW7289 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürge kaç dB'dir?",
          "integration_products_perparcel": "0",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/435503EA-91C8-4F4C-83664BBBF6F4B494/?w=147&h=147&crop=false__EffiTech Motor Teknolojisi",
          "integration_attributeId_34": "67 db",
          "integration_pallet_dimension_width": "0",
          "integration_attributeId_21": "Toz Torbasız",
          "iade_kategori": "yurtici",
          "integration_range": "TW72",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/676AD46B-588F-400D-A4EC664B5734D89C/?w=147&h=147&crop=false__Mükemmel kullanım kolaylığı için geniş toz haznesi",
          "erp_pallet_dimension_depth": "0",
          "integration_attributeId_87": "Köpük + Siklon + Yüksek Verimli Filtre",
          "sss5_cevap": "TW7289 5★ Silence Force Cyclonic Toz Torbasız Elektrikli Süpürge kullanım yarıçapı 8,4 metredir.",
          "integration_agirlik": "8,585 kg",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 6,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_67": {
            "value": "POWER AIR Başlık, Maxi Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Radyatör Başlığı, Entegre Easy Brush",
            "data_type": "dropdown",
            "label": "POWER AIR Başlık, Maxi Turbo Başlık, Parke Başlığı, Döşeme Başlığı, Dar Uçlu Başlık, Radyatör Başlığı, Entegre Easy Brush"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_87": {
            "value": "Köpük + Siklon + Yüksek Verimli Filtre",
            "data_type": "dropdown",
            "label": "Köpük + Siklon + Yüksek Verimli Filtre"
          },
          "integration_attributeId_287": {
            "value": "550 watt",
            "data_type": "dropdown",
            "label": "550 watt"
          },
          "product_line": {
            "value": "HOME CLEANING",
            "data_type": "dropdown",
            "label": "HOME CLEANING"
          },
          "integration_attributeId_730": {
            "value": "6,2 m",
            "data_type": "dropdown",
            "label": "6,2 m"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_34": {
            "value": "67 db",
            "data_type": "dropdown",
            "label": "67 db"
          },
          "integration_attributeId_22": {
            "value": "Koyu Kahverengi",
            "data_type": "dropdown",
            "label": "Koyu Kahverengi"
          },
          "integration_attributeId_21": {
            "value": "Toz Torbasız",
            "data_type": "dropdown",
            "label": "Toz Torbasız"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 5089,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4754/30125694-8b8e-4e6d-939d-b07e458651b2.jpg",
            "order": 1,
            "created_date": "2021-03-24T13:26:12.004504Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5146,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4754/8e3cf076-3c14-41aa-b338-2eacca6e1583.jpg",
            "order": 2,
            "created_date": "2021-03-24T15:30:40.041453Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5147,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4754/b387b717-5ef1-4b70-b466-8f220f5845e2.jpg",
            "order": 3,
            "created_date": "2021-03-24T15:30:40.096485Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5148,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4754/e8f0aa0e-8e7a-4eb3-911f-4a6dbc3e2d84.jpg",
            "order": 4,
            "created_date": "2021-03-24T15:30:40.143597Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5149,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4754/d8d3d6b9-ab2b-4bd9-be67-3d0cd235dd4d.jpg",
            "order": 5,
            "created_date": "2021-03-24T15:30:40.199794Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5150,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4754/d0f46d7f-f8bc-4947-95e4-5f2e0ed9c1e7.jpg",
            "order": 6,
            "created_date": "2021-03-24T15:30:40.255126Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5151,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4754/893787f3-5a0c-4572-b176-339ec7ade130.jpg",
            "order": 7,
            "created_date": "2021-03-24T15:30:40.382600Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5152,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4754/5b17d2d1-e912-47c4-923a-a406baef4950.jpg",
            "order": 8,
            "created_date": "2021-03-24T15:30:40.456004Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "6679.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "6679.90",
        "unit_type": "qty",
        "absolute_url": "/tw7289-5-silence-force-cyclonic-kahverengi-toz-torbasiz-elektrikli-supurge-2211400975/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": false,
        "stock": 7,
        "data_source": null,
        "basket_offers": [
          {
            "pk": 5356,
            "label": "Sepette Ek 1980 TL İndirim",
            "listing_kwargs": {
              "discounted_total_price": 4699.9,
              "discount": 1980.0,
              "quantity": 1
            },
            "kwargs": {
              "show_benefit_products": true
            }
          }
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 2214,
        "name": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürge",
        "sku": "2211400621",
        "base_code": "TW775",
        "attributes": {
          "erp_alt_aile_kodu": "E01160",
          "integration_pallet_weight": "0",
          "integration_attributeId_67": "Power Air",
          "integration_editorial_description_title": "The Silence Force sessiz elektrikli süpürge",
          "teslimat_sureleri": "2",
          "ozellik4_aciklama": "Tam konfor ve kullanım kolaylığı için 4,5 L XL kapasite, daha kolay temizliğin anahtarıdır.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E42DFFFA-28F1-4A7F-AD4B73A6C59C16DC/?w=147&h=147&crop=false__Optimum Enerji Verimliliği için EffiTech Teknolojisi",
          "ozellik5_aciklama": "Daha fazla hareket kabiliyeti ve kullanım özgürlüğü için dört adet 360° çok yönlü tekerlek sayesinde istenen her yönde sorunsuzca hareket edin.",
          "sss4_cevap": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürgede bulunan ergonomik sap, kullanmayı olabildiğince kolay ve zahmetsiz kılmayı amaçlayan bir tasarımdır. Bu tasarım hortumu sıkıca tutmanızı ve rahat kavramanıza yardımcı olur.",
          "integration_attributeId_22": "Mavi",
          "sss4_soru": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürgede bulunan ergonomik sap ne işe yarar?",
          "erp_pallet_weight": "0",
          "sss6_cevap": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürgede bulunan Hygiene+ torbası, özellikle alerjisi olan kişiler için, toz bulutlarını ve tozla teması önleyen mükemmel filtreleme sayesinde sıradışı hijyen sağlayan bir parçadır.",
          "integration_barkod": "3221614006210",
          "parca_sayisi": "3",
          "erp_pallet_dimension_height": "0",
          "toz_torbasi": "Var",
          "integration_is_seo_automatic": "true",
          "toz_kapasitesi": "4,5 L",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "E01",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "sss5_soru": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürge'nin kullanım yarıçapı kaç metredir?",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "ozellik8_aciklama": "Hygiene+ torbası, özellikle alerjisi olan kişiler için, toz bulutlarını ve tozla teması önleyen mükemmel filtreleme sayesinde sıradışı hijyen sağlayan gizli bir silahtır.",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "E01",
          "integration_products_perplayer": "0",
          "erp_products_percontainer_c20": "0",
          "erp_layers_perpallet": "0",
          "n11_product_description": "The Silence Force sessiz elektrikli süpürge",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/3AE8F1DA-AA54-4B16-9EDACC8EB494358F/?w=147&h=147&crop=false__Bundan Sonra Torba Değiştirirken Veya Boşaltırken Toz Yok",
          "ozellik2_aciklama": "POWER AIR Başlık, her türlü temizliğin üstesinden gelmek için tasarlanmış iki pozisyona sahip bir toz fırçasıdır ve her yüzeyde kusursuz kayma hissi ile derinlemesine temizlik sunar.",
          "erp_defoluflg": "false",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3221614006210",
          "erp_range": "TW775",
          "product_line": "HOME CLEANING",
          "agirlik": "8,294 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/CFAF17B2-6F63-4671-96BFA020D9912AEC/?w=147&h=147&crop=false__Kusursuz Manevra Kabiliyeti",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "min_stok": "10",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "sss6_soru": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürgede bulunan Hygiene+ torba ne işe yarar?",
          "integration_grup2kodu": "L",
          "erp_is_seo_automatic": "true",
          "integration_attributeId_87": "Yüksek verimli filtre + Köpük + Hygiene+ Torba",
          "integration_alt_aile_kodu": "E01160",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/AB40F940-9021-42F8-AB3BF29F519CB7C7/?w=147&h=147&crop=false__Sıradışı Sessiz Temizlik Gücü",
          "integration_sirketkodu": "2006_GSEB",
          "erp_agirlik": "8294",
          "ozellik6_aciklama": "Estetik ve kullanıcı dostu tasarım arasında mükemmel dengeyi yakalayan yeniden tasarlanmış format, temizlik deneyiminizi iyileştirmek için dokulu ve ergonomik bir tutma sapı içerir.",
          "sss5_cevap": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürge'nin kullanım yarıçapı 11 metredir.",
          "integration_products_percontainer_c40": "0",
          "sss1_cevap": "POWER AIR Başlık, her türlü temizliğin üstesinden gelmek için tasarlanmış iki pozisyona sahip bir toz fırçasıdır ve her yüzeyde kusursuz kayma hissi ile derinlemesine temizlik sunar.",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "8,4 m",
          "onarilabilirlik": "Var",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/D07CFDB4-DA72-40D8-BEEBFE033E6A1C66/?w=147&h=147&crop=false__Tüm Yüzeyler İçin POWER AIR Başlık",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_products_percontainer_c40": "0",
          "erp_gecerli": "true",
          "sss2_cevap": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürge 4 farklı güç ayarına sahiptir.",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Sessiz bir elektrikli süpürgenin tüm konforu ve rahatlığından ödün vermeksizin, Silence Force, POWER AIR başlığı sayesinde her yüzeyde derinlemesine temizlik performansı ve kusursuz kayma hissi sağlar. Bu yüksek performanslı torbalı elektrikli süpürge, toz toplayan sert zeminlerde ve halılarda gelişmiş toz filtrelemesiyle beraber olağanüstü sonuçlar elde etmenizi ve temizlik deneyiminizin farklı boyutlara çıkmasını sağlar. Dört farklı güç ayarı, tam güçte günlük konuşmadan daha sessiz bir gürültü seviyesi olan sadece 64 dB (A) düzeyinde olağanüstü bir konforla tüm temizlik ihtiyaçlarınızı karşılar. Ekstra geniş 4,5 L kapasite, dört adet büyük 360° çok yönlü tekerlek ve geliştirilmiş kullanım kolaylığı için dokulu ergonomik tutma sapı ile rahatlık sağlar. Evcil hayvan sahiplerinin ihtiyaçlarını karşılamak için özel olarak tasarlanmış aksesuarlar sunan bu özel Animal Care modeli ile Silence Force, yepyeni ve modern bir tasarımda sessiz temizlik performansının zirvesidir.",
          "sss3_cevap": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürge tam güçte bile günlük konuşmadan daha sessiz bir gürültü seviyesi olan sadece 64 dB (A) düzeyinde olağanüstü bir konforla tüm temizlik ihtiyaçlarınızı karşılar.",
          "ozellik7_aciklama": "Bu elektrikli süpürge, daha az bakımla uzun süreli performans sağlayan kalıcı filtrelerle uzun süre dayanacak şekilde üretilmiştir.",
          "garantisure": "2 Yıl",
          "ozellik1_aciklama": "Silence Force, tam güçle çalışırken yalnızca 64 dB (A), yani günlük konuşmanın altında bir ses seviyesinde temizlikten ödün vermeden yüksek çekiş performansı sağlar.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/CAB69B9B-96B8-47DF-B01F9E5505126796/?w=147&h=147&crop=false__XL Kapasite",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "Outlet": "Evet",
          "short_description": "•  64 db(A) ses seviyesi<br>\n•  Tüm zeminlere uygun Power Air başlığı<br>\n•  EffiTech motor<br>\n•  HEPA filtreleme<br>\n•  Kolay taşıma ve saklama<br>\n•  4,5 litre toz hazne kapasitesi<br>",
          "erp_parcel_dimension_height": "0",
          "n11_product_title": "TEFAL TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürge",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "450 watt",
          "ozellik3_aciklama": "Daha az enerji tüketimiyle daha fazla toz toplamak için, yeni EffiTech Motor sisteminin en son teknolojisi mükemmel enerji verimliliğine giden yolu açıyor.",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "sss1_soru": "Power Air başlık nedir?",
          "sss3_soru": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürge kaç dB'dir?",
          "integration_products_perparcel": "0",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/BE829238-C5E6-4E40-994438DC89802937/?w=147&h=147&crop=false__Daha Az Bakımla Daha Uzun Ömürlü Performans",
          "integration_attributeId_34": "64 db",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_hq4": "0",
          "integration_attributeId_21": "Toz Torbalı",
          "iade_kategori": "yurtici",
          "integration_range": "TW775",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/2BF86BEE-513F-45A8-ADDED73356E348F9/?w=147&h=147&crop=false__Yepyeni, Modern Tasarım",
          "erp_pallet_dimension_depth": "0",
          "erp_grup2kodu": "L",
          "sss2_soru": "TW7752 5★ Silence Force Cyclonic Toz Torbalı Elektrikli Süpürge kaç adet güç ayarına sahiptir?",
          "ozellik17_aciklama": "Kolay onarılacak şekilde tasarlanmıştır, 15 yıl boyunca düşük bedelli, hızlı parça teslimi  Dünya genelinde 6500 onarım merkezi.",
          "integration_agirlik": "8294",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_67": {
            "value": "Power Air",
            "data_type": "dropdown",
            "label": "Power Air"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_87": {
            "value": "Yüksek verimli filtre + Köpük + Hygiene+ Torba",
            "data_type": "dropdown",
            "label": "Yüksek verimli filtre + Köpük + Hygiene+ Torba"
          },
          "integration_attributeId_287": {
            "value": "450 watt",
            "data_type": "dropdown",
            "label": "450 watt"
          },
          "product_line": {
            "value": "HOME CLEANING",
            "data_type": "dropdown",
            "label": "HOME CLEANING"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_730": {
            "value": "8,4 m",
            "data_type": "dropdown",
            "label": "8,4 m"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "onarilabilirlik": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_34": {
            "value": "64 db",
            "data_type": "dropdown",
            "label": "64 db"
          },
          "integration_attributeId_22": {
            "value": "Mavi",
            "data_type": "dropdown",
            "label": "Mavi"
          },
          "integration_attributeId_21": {
            "value": "Toz Torbalı",
            "data_type": "dropdown",
            "label": "Toz Torbalı"
          },
          "Outlet": {
            "value": "Evet",
            "data_type": "dropdown",
            "label": "Evet"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 5153,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4599/cb254c74-3920-4058-91ea-1886e3ce0d3a.jpg",
            "order": 1,
            "created_date": "2021-03-24T15:39:11.303391Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5157,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4599/cddad6ec-b352-4711-97ed-80fdce7cb81d.jpg",
            "order": 2,
            "created_date": "2021-03-24T15:39:12.296772Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5142,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4599/fc30ff10-fbd5-4aee-99a9-45d4544a4d0e.jpg",
            "order": 3,
            "created_date": "2021-03-24T15:22:47.012150Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5061,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4599/bd470e40-e8e4-4109-aa71-3fbb41b3da0a.jpg",
            "order": 4,
            "created_date": "2021-03-24T13:25:40.332523Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5064,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/02/28/4599/2a47a455-7e6e-4f15-b473-1cbdc6686b2c.jpg",
            "order": 5,
            "created_date": "2021-03-24T13:25:40.552910Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5144,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4599/3b80da8e-9cbb-4721-8ee5-3a3cf858ba39.jpg",
            "order": 6,
            "created_date": "2021-03-24T15:22:47.530380Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 5145,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/03/24/4599/1caa6f37-bcc1-43bc-a107-8c1767e42373.jpg",
            "order": 7,
            "created_date": "2021-03-24T15:22:47.596072Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "7169.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "7169.90",
        "unit_type": "qty",
        "absolute_url": "/tw7752-5-silence-force-cyclonic-toz-torbali-elektrikli-supurge-2211400621/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          {
            "pk": 5348,
            "label": "Sepette Ek %25 İndirim",
            "listing_kwargs": {
              "discounted_total_price": 5377.43,
              "discount": 1792.47,
              "quantity": 1
            },
            "kwargs": {
              "show_benefit_products": true
            }
          }
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3240,
        "name": "TY99F1 X-Force Flex 15.60 Animal Kablosuz Şarjlı Dikey Elektrikli Süpürge",
        "sku": "2211401074",
        "base_code": "RH99",
        "attributes": {
          "erp_alt_aile_kodu": "E04162",
          "integration_pallet_weight": "0",
          "integration_editorial_description_title": "Tefal'in en güçlü kablosuz dikey elektrikli süpürgesi: En son teknolojiyle temizlik ve üstün esneklik",
          "teslimat_sureleri": "2",
          "ozellik4_aciklama": "Güç seviyesini ihtiyaçlarınızı karşılayacak şekilde ayarlamak için otomatik hız ayarı, kalan çalışma süresinin dakika dakika görüntülenme imkanı ve filtre temizleme uyarısı dahil olmak üzere 5 adet ayar ile tam kontrol sağlayın.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/2A8CD467-34AB-430C-8DDC3FA414501889/?w=147&h=147&crop=false__Geliştirilmiş batarya ömrü",
          "ozellik5_aciklama": "Duvar delme gerektirmeyen ayaklı şarj istasyonu elektrikli süpürgenizi şarjda; tavana erişen temizlik için uzatma aparatı haline gelme imkanı dahil olmak üzere tüm aksesuarlarınızı elinizin altında tutar.",
          "integration_attributeId_22": "Siyah",
          "erp_grup2kodu": "L",
          "erp_pallet_weight": "0",
          "integration_barkod": "3221616034938",
          "erp_agirlik": "6180",
          "erp_pallet_dimension_height": "0",
          "tava_capi": "26 cm-30 cm",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "E04",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "integration_ozellik": "Dik Süpürge",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "ozellik8_aciklama": "8 adet aksesuar evcil hayvan sahipleri için ideal temizlik sunar: Bir hayvan dostu turbo fırça, aralık temizleme aracı, bir kanepe fırçası, bir mini flex, özel şarj istasyonu, ekstra bir filtre ve iki adet gömme yumuşak fırça.",
          "erp_pallet_volume": "0",
          "motor_gucu": "230",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "E04",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "erp_products_percontainer_hq4": "0",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/76777A27-69BF-4FB4-ADCA354101720AC6/?w=147&h=147&crop=false__Hayvan Dostu aksesuarlar",
          "ozellik2_aciklama": "Sadece 230 AW Digital Force motorla donatılmakla kalmayıp mısır gevreği veya yer fıstığı gibi daha büyük parçaları bile süpürmek için ideal benzersiz başlığımız sayesinde her türlü zeminde tam verimi deneyimleyin!",
          "product_calisma_suresi": "80 dk",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3221616034938",
          "erp_range": "RH99",
          "erp_products_percontainer_c40": "0",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/24ECA18F-CE44-4746-A707EFC962C32C26/?w=147&h=147&crop=false__Ayaklı şarj istasyonu",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "product_dayanim_cycle": "8000",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "downloadable_image_title": "https://64ee49.cdn.akinoncloud.com/cms/2023/05/18/09dbec04-8c7e-4284-b5a1-766b084464ab.pdf",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "Yok",
          "integration_grup2kodu": "L",
          "erp_is_seo_automatic": "true",
          "integration_alt_aile_kodu": "E04162",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/1EBD651B-7987-4327-B4BCC45A2244CAE7/?w=147&h=147&crop=false__Sınırsız çözümler",
          "integration_sirketkodu": "2006_GSEB",
          "hepa_filtre": "Var",
          "parca_sayisi": "3",
          "ozellik6_aciklama": "Boşaltılması son derece kolay, %100 yıkanabilir ayırıcı ve filtre ile birlikte 0,9 L toz haznesinin sağladığı ultra uzun temizlik seanslarının keyfini çıkarın.​",
          "integration_products_percontainer_c40": "0",
          "integration_parcel_dimension_depth": "0",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E117A219-F44A-458C-8C2BA809C7CA3741/?w=147&h=147&crop=false__Ultra güçlü ve tüm zeminlerde etkili",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "kullanim_sekli": "Dikeys",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "En üst düzeyde esneklik ve güçlü toz toplama performansı sunan Tefal X-Force Flex 15.60 Pro, benzersiz bir modern temizlik deneyimi sunar! Bu elektrikli süpürge 230 Air Watt'a* varan yüksek emiş gücü, güvenilir çıkarılabilir pil ile 1 saat 20 dakika çalışma süresi**, ideal sonuçlar için zemin tipine göre otomatik hız/güç ayarı, eğilmeden ultra esnek temizlik için Flex Tube sistemi, 5 adet güç seviyesi için de şarj göstergesi ve çok daha fazlasıyla eksiksiz bir hizmet sağlar:",
          "ozellik7_aciklama": "Arabanız da dahil sınırsız süpürmenin keyfini çıkarın: Gücü ve farklı aksesuarlarıyla evcil hayvan tüylerini ve inatçı tozları derinlemesine temizleyin!​",
          "ozellik1_aciklama": "Sadece zeminleri değil, evin her yerini kolayca temizlemek için sorunsuz çözüm: her köşeye erişim ile güçlü derinlemesine temizlik ve çok yönlü kapsama.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/9EDD2D87-E075-4F5D-AD8E8BAFFE88B966/?w=147&h=147&crop=false__Dijital Kontrol Ekranı",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "siklon_filtre": "Var",
          "Outlet": "Evet",
          "short_description": "•\t   Sınıfının en iyisi kablosuz dikey elektrikli süpürgesi <br>\n•\t   230 Hava Watt'a* kadar emiş gücü için Digital Force motoru ve 1 saat 20 dakikaya kadar batarya ömrü<br>\n•\t   Olağanüstü 32,4 V pil<br>\n•\t   Zemin tipine göre otomatik hız ve güç ayarı <br>\n•\t    Dijital Kontrol ekranı<br>",
          "erp_parcel_dimension_height": "0",
          "garanti_suresi": "24.0",
          "integration_attributeId_287": "2200 W",
          "virtual_view": "true",
          "ozellik3_aciklama": "9 hücreli/32,4V pil, 3 saatlik hızlı şarj döngüsüyle tüm evinizi tek bir şarjla temizlemek için 1 saat 20 dakikaya kadar* zayıflamayan emiş sunar. *Süpürge güçlü Eco konumunda kullanılırken",
          "integration_pallet_dimension_height": "0",
          "integration_marka": "01",
          "erp_parcel_weight": "0",
          "dahili_hazne_kapasitesi": "0,9 L",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/89AD568D-9EFD-4795-9FDD98704E8EC955/?w=147&h=147&crop=false__Arabanızı temizlemek için mükemmel",
          "downloadable_link": "https://tefal.akinoncdn.com/cms/2021/04/26/925fa363-a26d-4686-8dd7-07454e111ec6.jpe__Kullanım Kılavuzu",
          "integration_products_percontainer_hq4": "0",
          "integration_attributeId_656": "Kuru",
          "integration_parcel_weight": "0",
          "integration_attributeId_34": "86 db",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "RH99",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/1EC42534-8D62-4C1D-9C324986927F7F7D/?w=147&h=147&crop=false__XL toz haznesi",
          "erp_pallet_dimension_depth": "0",
          "garantisure": "2 Yıl",
          "integration_agirlik": "6180 gr",
          "integration_parcel_dimension_width": "0",
          "integration_attributeId_137": "32.4 V",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_287": {
            "value": "2200 W",
            "data_type": "dropdown",
            "label": "2200 W"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "tava_capi": {
            "value": "26 cm-30 cm",
            "data_type": "dropdown",
            "label": "26 cm-30 cm"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_51": {
            "value": "Yok",
            "data_type": "dropdown",
            "label": "Yok"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "product_calisma_suresi": {
            "value": "80 dk",
            "data_type": "dropdown",
            "label": "80 dk"
          },
          "integration_attributeId_137": {
            "value": "32.4 V",
            "data_type": "dropdown",
            "label": "32.4 V"
          },
          "product_dayanim_cycle": {
            "value": "8000",
            "data_type": "dropdown",
            "label": "8000"
          },
          "siklon_filtre": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "Outlet": {
            "value": "Evet",
            "data_type": "dropdown",
            "label": "Evet"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_656": {
            "value": "Kuru",
            "data_type": "dropdown",
            "label": "Kuru"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_34": {
            "value": "86 db",
            "data_type": "dropdown",
            "label": "86 db"
          },
          "integration_attributeId_22": {
            "value": "Siyah",
            "data_type": "dropdown",
            "label": "Siyah"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 9298,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/01/31/9512/fa329bc8-3da1-4d1a-8a44-4ac482540c2f.jpg",
            "order": 1,
            "created_date": "2022-05-27T17:27:46.992748Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9297,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10231/ae7c7db9-4830-4d31-b780-dcba1d816417.jpg",
            "order": 2,
            "created_date": "2022-05-27T17:27:46.947079Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9301,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10231/b930e7e0-ef1b-4c96-a10c-6950337202d2.jpg",
            "order": 3,
            "created_date": "2022-05-27T17:27:47.128160Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9303,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10231/edd7bde1-8aa2-47a4-a840-ee7e61f4ebb0.jpg",
            "order": 4,
            "created_date": "2022-05-27T17:27:47.223484Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9295,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10231/30fa925f-ad20-4347-85b9-52f08282a683.jpg",
            "order": 5,
            "created_date": "2022-05-27T17:27:46.815986Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9302,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10231/b930e7e0-ef1b-4c96-a10c-6950337202d2.jpg",
            "order": 6,
            "created_date": "2022-05-27T17:27:47.176956Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9296,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10231/66da2298-fb3b-4324-b29d-9831033edd76.jpg",
            "order": 7,
            "created_date": "2022-05-27T17:27:46.902332Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9299,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10231/c8830e48-93f0-445e-aba7-c4299fb9cd25.jpg",
            "order": 8,
            "created_date": "2022-05-27T17:27:47.036820Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 9300,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/05/25/10231/f167dac4-0c47-4c66-8e7f-8803ac6308c5.jpg",
            "order": 9,
            "created_date": "2022-05-27T17:27:47.085277Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "14649.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "14649.90",
        "unit_type": "qty",
        "absolute_url": "/ty99f1-x-force-flex-15-60-animal-kablosuz-sarjli-dikey-elektrikli-supurge-2211401074/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 3664,
        "name": "RG8577 X-Plorer Serie 75 S Max Mop Özellikli Akıllı Robot Süpürge - Evcil Hayvan Dostu",
        "sku": "2211401092",
        "base_code": "RR75",
        "attributes": {
          "erp_alt_aile_kodu": "E05071",
          "integration_pallet_weight": "0",
          "integration_editorial_description_title": "X-plorer Serie 75 S Max Robot Süpürge",
          "compare_product_slug": "robot-supurge-compare",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/83570F61-6989-4575-A2C43D59C7EFC245/?w=147&h=147&crop=false__Zemin tipine göre akıllı mop",
          "ozellik5_aciklama": "18 mm'ye kadar yükseklikteki engellerin üzerinden tırmanabilme özelliğiyle, ihtiyaç duyduğunuz her yere giden yüksek performanslı temizliği keşfedin.",
          "erp_grup2kodu": "L",
          "erp_pallet_weight": "0",
          "integration_barkod": "3221616043282",
          "erp_agirlik": "3510",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "E05",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "engel_yonetimi": "Standart : Engel Tespiti >10cm",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "E05",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "ozellik4_aciklama": "İhtiyaçlarınıza göre yönetilebilir ayarlarla girilmesi yasak bölgeler oluşturun, akıllı nokta temizliğini etkinleştirin, temizliği odaya göre yönetin, kalıcı haritaları kaydedin.",
          "erp_products_percontainer_hq4": "0",
          "ozellik2_aciklama": "Yan fırça köşeleri ve ulaşılması zor alanları kaplar, Turbo Fırça saç, tüy ve tüyleri çeker, BLDC motor güvenilir emiş sağlar ve Smart Aqua Power System yüzeyleri derinlemesine temizler.",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "3221616043282",
          "erp_range": "RR75",
          "erp_products_percontainer_c40": "0",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B55211F7-992D-4BB6-846056A52E1B1285/?w=147&h=147&crop=false__Yüksek tırmanma kapasitesi",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "downloadable_image_title": "https://64ee49.cdn.akinoncloud.com/cms/2023/05/18/38e16800-857d-49b1-ba20-6d162648273f.pdf",
          "integration_attributeId_659": "4 saat",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_grup2kodu": "L",
          "erp_is_seo_automatic": "true",
          "integration_alt_aile_kodu": "E05071",
          "integration_sirketkodu": "2006_GSEB",
          "parca_sayisi": "3",
          "ozellik6_aciklama": "Sessiz mod ile tüm aile için daha rahat bir temizlik deneyimi keşfedin.",
          "integration_products_percontainer_c40": "0",
          "toz_haznesi": "0.3 L",
          "integration_parcel_dimension_depth": "0",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/C8AEB99F-2474-4E27-B26175CE1506C106/?w=147&h=147&crop=false__4'ü 1 arada temizlik",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Tefal X-plorer Serie 75S Robot Süpürge, son teknolojinin sunduğu kolay ve modern temizlik deneyimiyle temizlenmeyen hiçbir nokta bırakmayan olağanüstü bir temizlik çözümüdür. Evinizde ihtiyaç duyduğunuz her noktaya gidebilen, zorlu alanları kolayca tırmanarak aşabilen ultra yüksek teknolojili robot süpürgeyi keşfedin: elektronik kontrol edilebilen mopu, geniş su tankıyla büyük alanlarda hijyen sağlayan Tefal X-plorer Serie 75 S, yüksek doğruluğa sahip navigasyona, gelişmiş lazer teknolojisine ve özelleştirilebilir temizlik deneyimi oluşturmanıza olanak sağlayan akıllı telefon uygulamasına sahiptir.",
          "ozellik7_aciklama": "Tek bir şarjla 120 metrekareye kadar alanı kapsayarak tüm eviniz için kesintisiz 120 dakika temizlik imkanı sunar.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/5CDF24BF-A726-42DB-9565AD00A13FDCC8/?w=147&h=147&crop=false__Kişiselleştirilmiş ayarlar",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "short_description": "•\tYÜKSEK DOĞRULUĞA SAHİP NAVİGASYON: Kusursuz bir temizlik deneyimi için yüksek doğruluğa sahip lazer navigasyon <br> •\tGENİŞ SU TANKI İLE DAHA BÜYÜK ALANLARDA HİJYEN: Genişletilmiş su tankı haznesi ile temizliğiniz kesintiye uğramasın <br> •\tELEKTRONİK MOP İLE KONTROL SİZDE: Ayarlanabilir ıslaklık seviyesiyle ihtiyaç duyduğunuz temizlik seviyesine göre temizliğinizi programlayın <br> •\tÇOKLU ODA YÖNETİMİ: İhtiyaçlarınıza göre kişiselleştirilebilen ayarlarla beraber çoklu oda temizliği sayesinde belirli odalar için özel temizlik modelleri belirleyin <br> •\tEVCİL HAYVAN DOSTU: Animal Turbo Fırça ve Evcil Hayvan Dostu özel paspas ile evcil hayvan sahipleri için mükemmel bir temizlik deneyimi <br> •\tUZUN ÇALIŞMA SÜRESİ: Tek şarjda bütün temizlik ihtiyaçlarınız için Eco Mod'da 120 dakikaya kadar çalışma süresi <br> •\tDÜŞÜK SES SEVİYESİ: Daha rahat ve konforlu bir temizlik deneyimi için gelişmiş Sessizlik Teknolojisi (65dB)",
          "erp_parcel_dimension_height": "0",
          "integration_marka": "01",
          "integration_attributeId_51": "300 ml",
          "ozellik3_aciklama": "Zemin tipine göre ayarlanabilen 4 kademeli su kapasitesine sahip S75S, Smart Aqua Power sistemi sayesinde mükemmel hassasiyet ve verimlilikle paspas performansı sunar.",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "cok_oda_yon": "Var",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/486FEF80-6C29-46E8-8E9039B46D5E6DDB/?w=147&h=147&crop=false__Uzun ömürlü batarya performansı",
          "downloadable_link": "https://tefal.akinoncdn.com/cms/2021/04/26/925fa363-a26d-4686-8dd7-07454e111ec6.jpe__Kullanım Kılavuzu",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "integration_attributeId_34": "65 dBA",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "integration_range": "RR75",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/9B9532E4-D8F6-4EF6-B56EBCD53E388D59/?w=147&h=147&crop=false__Sessiz temizlik",
          "erp_pallet_dimension_depth": "0",
          "integration_agirlik": "3510 gr",
          "integration_parcel_dimension_width": "0",
          "new_product": "Yeni",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_34": {
            "value": "65 dBA",
            "data_type": "dropdown",
            "label": "65 dBA"
          },
          "integration_attributeId_51": {
            "value": "300 ml",
            "data_type": "dropdown",
            "label": "300 ml"
          },
          "integration_attributeId_659": {
            "value": "4 saat",
            "data_type": "dropdown",
            "label": "4 saat"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 10824,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/02/22/11518/6cbea2ef-b074-4cee-992a-4a8e9b2948a4.jpg",
            "order": 1,
            "created_date": "2023-03-16T07:48:26.032316Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10825,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/02/22/11518/2c9740d9-8d6e-4c1f-9978-85c31da61b12.jpg",
            "order": 2,
            "created_date": "2023-03-16T07:48:26.120639Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10827,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/02/22/11518/0fa2ef46-b057-41a2-9f6a-637b4ebc2279.jpg",
            "order": 3,
            "created_date": "2023-03-16T07:48:26.255237Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10826,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2023/02/22/11518/894d6fa0-c1d8-4feb-a85a-31783741efb9.jpg",
            "order": 4,
            "created_date": "2023-03-16T07:48:26.188332Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "14299.90",
        "in_stock": true,
        "currency_type": "try",
        "retail_price": "14299.90",
        "unit_type": "qty",
        "absolute_url": "/rg8577-x-plorer-serie-75-s-max-mop-ozellikli-akilli-robot-supurge-evcil-hayvan-dostu-2211401092/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 28,
        "data_source": null,
        "basket_offers": [
          {
            "pk": 5353,
            "label": "Sepette Ek 1800 TL İndirim",
            "listing_kwargs": {
              "discounted_total_price": 12499.9,
              "discount": 1800.0,
              "quantity": 1
            },
            "kwargs": {
              "show_benefit_products": true
            }
          }
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 2216,
        "name": "UY5118 Air Force Dual Power 2in1 Kablolu Dikey Süpürge ve Entegre El Süpürgesi - Beyaz",
        "sku": "9100044381",
        "base_code": "UY51",
        "attributes": {
          "erp_alt_aile_kodu": "E04074",
          "integration_pallet_weight": "0",
          "integration_attributeId_67": "Delta başlık",
          "integration_editorial_description_title": "Tefal Air Force Dual Power 2in1 dikey süpürge ve entegre el süpürgesi : Performans elinizin altında",
          "teslimat_sureleri": "2",
          "ozellik4_aciklama": "Ergonomik tutma kolu, temizlik esnasında süpürgenizi kolayca yönlendirmenizi sağlar.",
          "integration_garanti_durumu": "Var",
          "ozellik5_aciklama": "Kolay taşıma için özel dizayn edilmiş tutma kolu, süpürgenizi rahatlıkla taşımanızı sağlar.",
          "integration_attributeId_22": "Beyaz",
          "integration_attributeId_21": "Dikey",
          "erp_pallet_weight": "0",
          "integration_barkod": "8697975601183",
          "erp_agirlik": "2590",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "toz_kapasitesi": "1,2 L",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "E04",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "integration_ozellik": "Dikey",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "ozellik8_aciklama": "Siklonik teknolojiyle geliştirilmiş Air Force Dual Power 2in1, optimum hava ve toz ayrımı sağlar.",
          "gg_new_catalog_id": "21674",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "E04",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "n11_product_description": "UY5118 Air Force Dual Power 2in1",
          "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/C20A861C-AF62-426C-86B417CAE39B53AF/?w=147&h=147&crop=false__Siklonik teknoloji",
          "ozellik2_aciklama": "A sınıfı performanslı ergonomik delta başlığı sayesinde ulaşılması en zor köşeleri bile kolayca temizleyin.",
          "integration_layers_perpallet": "0",
          "erp_spare_parts_avaibility": "False",
          "erp_barkod": "8697975601183",
          "erp_range": "UY51",
          "product_line": "HOME CLEANING",
          "agirlik": "2,59 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/AC71A1DB-9BBA-4512-AF92651B2D6F8217/?w=147&h=147&crop=false__Kolay taşıma",
          "integration_gecerli": "true",
          "integration_spare_parts_avaibility": "False",
          "min_stok": "0",
          "erp_parcel_dimension_depth": "0",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "purchase_limit_per_basket": "5",
          "erp_is_seo_automatic": "true",
          "turu": "Dikey",
          "integration_alt_aile_kodu": "E04074",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/283E3251-2F4A-44DA-AC9DFA6773D69192/?w=147&h=147&crop=false__2si1 Arada Entegre El Süpürgesi",
          "integration_sirketkodu": "2006_GSEB",
          "erp_pallet_dimension_depth": "0",
          "parca_sayisi": "1",
          "ozellik6_aciklama": "1,2 litrelik geniş toz haznesi uzun süreli temizlik yapmanızı sağlar.",
          "integration_products_percontainer_c40": "0",
          "toz_haznesi": "1,2 L",
          "integration_parcel_dimension_depth": "0",
          "integration_attributeId_730": "6 m",
          "onarilabilirlik": "Var",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/7818E614-2A9B-448F-967C190A9A007042/?w=147&h=147&crop=false__Delta başlık",
          "integration_agirlik": "2590",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_editorial_description_detail": "Maksimum performans için özel olarak tasarlanan Air Force Dual Power 2in1, 750W ile 2000 W’a eşit performans sağlar.Tüm zeminlerde mükemmel manevra kabiliyetine sahip delta başlığı, ulaşılması en zor köşeleri bile temizleme imkanı sunar. Ayarlanabilir güç seviyesi sayesinde, emiş gücünü kontrol etmenizi sağlarken, minimum eforla temizlik yapmanıza yardımcı olur. 6 metre kablosu evinizin içinde kolayca hareket etmenizi sağlar ve geniş toz haznesi, ayrılabilir filtresi sayesinde kolayca temizlenir.",
          "ozellik7_aciklama": "Ayrılabilir filtresi, süpürgenizi temizlemeyi kolaylaştırır.",
          "ozellik1_aciklama": "Yüksek performanslı entegre el süpürgesi sayesinde Air Force Dual Power’ın pratikliğini yaşayın: İstediğiniz zaman hafif ve çabasız temizlik.",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/134285E9-ADB6-43A4-98AB32B5C4497BAE/?w=147&h=147&crop=false__Ergonomik tutma kolu",
          "integration_parcel_dimension_height": "0",
          "short_description": "•  2'si 1 arada: Dikey süpürge ve el süpürgesi<br>\n•  Delta başlık<br>\n•  Ayarlanabilir güç seviyesi <br>\n•  Ergonomik tutma kolu<br>\n•  Siklonik teknoloji<br>\n•  1,2 litre toz hazne kapasitesi<br>",
          "erp_parcel_dimension_height": "0",
          "n11_product_title": "TEFAL UY5118 Air Force Dual Power 2in1 Kablolu Dikey Süpürge ve Entegre El Süpürgesi - Beyaz",
          "tutma_yeri": "Ergonomik tutma yeri",
          "garanti_suresi": "2 yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "750 watt",
          "ozellik3_aciklama": "Ayarlanabilir güç seviyesi, tüm yüzeylerde yorulmadan temizlik yapmanızı sağlar.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/D891C08C-FA34-4FD4-BC612E71A43B5A76/?w=147&h=147&crop=false__Ayarlanabilir güç seviyesi",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/BB4DCEFE-B1FF-4234-93CA76339ED7BA46/?w=147&h=147&crop=false__Pratik temizleme",
          "garantisure": "2 Yıl",
          "integration_products_percontainer_hq4": "0",
          "integration_parcel_weight": "0",
          "integration_attributeId_34": "78 db",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_hq4": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "UY51",
          "erp_marka": "1",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E846D7A1-3034-47AE-B8B0755580BF9B2A/?w=147&h=147&crop=false__Geniş kapasite",
          "integration_durum": "Sıfır",
          "integration_attributeId_87": "Yıkanabilir Yüksek Verimli Filtre",
          "erp_products_percontainer_c40": "0",
          "ozellik17_aciklama": "Kolay onarılacak şekilde tasarlanmıştır, 15 yıl boyunca düşük bedelli, hızlı parça teslimi  Dünya genelinde 6500 onarım merkezi.",
          "erp_parcel_volume": "0",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "integration_pallet_volume": "0",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 1,
        "attributes_kwargs": {
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_67": {
            "value": "Delta başlık",
            "data_type": "dropdown",
            "label": "Delta başlık"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "integration_attributeId_87": {
            "value": "Yıkanabilir Yüksek Verimli Filtre",
            "data_type": "dropdown",
            "label": "Yıkanabilir Yüksek Verimli Filtre"
          },
          "integration_attributeId_287": {
            "value": "750 watt",
            "data_type": "dropdown",
            "label": "750 watt"
          },
          "product_line": {
            "value": "HOME CLEANING",
            "data_type": "dropdown",
            "label": "HOME CLEANING"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_730": {
            "value": "6 m",
            "data_type": "dropdown",
            "label": "6 m"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_marka": {
            "value": "1",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "onarilabilirlik": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_34": {
            "value": "78 db",
            "data_type": "dropdown",
            "label": "78 db"
          },
          "integration_attributeId_22": {
            "value": "Beyaz",
            "data_type": "dropdown",
            "label": "Beyaz"
          },
          "integration_attributeId_21": {
            "value": "Dikey",
            "data_type": "dropdown",
            "label": "Dikey"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 10714,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/06/15/4590/7aade8d9-d55a-4974-9925-13b866d4408e.jpg",
            "order": 1,
            "created_date": "2023-01-10T06:57:34.048102Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10716,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/06/15/4590/26786cb1-a3c2-41bb-abf4-49df490638e7.jpg",
            "order": 2,
            "created_date": "2023-01-10T06:57:34.214417Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10715,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/06/15/4590/5a691032-143d-4edf-a350-95af12d94a13.jpg",
            "order": 3,
            "created_date": "2023-01-10T06:57:34.108938Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10718,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/06/15/4590/81597ea9-3371-4217-9025-11d77134aff7.jpg",
            "order": 4,
            "created_date": "2023-01-10T06:57:34.340265Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 10717,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2022/06/15/4590/15370b97-32a7-4601-bfa0-47a803b3fa16.jpg",
            "order": 5,
            "created_date": "2023-01-10T06:57:34.281035Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "799.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "799.90",
        "unit_type": "qty",
        "absolute_url": "/uy5118-air-force-dual-power-2in1-kablolu-dikey-supurge-ve-entegre-el-supurgesi-beyaz-9100044381/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": true,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      },
      {
        "pk": 559,
        "name": "Express SV8054 Anti-Calc Buhar Kazanlı Ütü",
        "sku": "1830006950",
        "base_code": "SV80",
        "attributes": {
          "erp_alt_aile_kodu": "L02140",
          "integration_pallet_weight": "0",
          "erp_products_percontainer_c40": "0",
          "integration_editorial_description_title": "Express Anti-calc Buhar Kazanlı Ütü: Güçlü ve kolay kullanımlı buhar kazanlı ütü",
          "erp_attributeId_24": "Durilium Airglide Autoclean",
          "gg_new_catalog_id": "30808",
          "ozellik4_aciklama": "No-Setting teknolojisi ile kolay ve sıkıntısız ütüleme: yakma riski olmadan %100 güvenli sonuçlar için buhar ve sıcaklığın mükemmel birleşimi.",
          "erp_attributeId_22": "Mor",
          "integration_garanti_durumu": "Var, Başlamamış",
          "ozellik5_aciklama": "Kolay dikey buharlama özelliği ve sadece 30 saniyede süper hızlı ısınma süresine sahiptir, böylece ihtiyacınız olduğunda son anda yapacağınız rötuşlarla harika görünürsünüz.",
          "yukseklik": "249 mm",
          "integration_attributeId_693": "120 g/dk - 420 g/dk",
          "integration_attributeId_24": "Durilium Airglide Autoclean",
          "integration_picto": "1--Uzun Süreli Performans İçin Çıkarılabilir Kireç Toplayıcı--Gelişmiş kire&ccedil; &ouml;nleme teknolojisi, kolay bakım sağlayan yeni &ccedil;ıkarılabilir kire&ccedil; toplayıcı ile, uzun s&uuml;re kalıcı buhar performansı sağlar. Ayrıca kolay bakım i&ccedil;in pratik bir aksesuarı da ek olarak i&ccedil;indedir|2--Tefal'in Ekstra Güçlü Buhar Jeneratörlü Ütüsü--Hızlı ve etkili sonu&ccedil;lar i&ccedil;in, 120 g/dk s&uuml;rekli buhar &ccedil;ıkışı 6,5 bar buhar basıncı ile bir araya gelirken, 420 g/dk şok buhar g&uuml;c&uuml; en zorlu kırışıklıkları bile a&ccedil;ar.|3--Olağanüstü Taban Plakası İle Kusursuz Kayganlık--Durilium AirGlide Taban Plakası, kolay ve keyifli &uuml;t&uuml;leme i&ccedil;in optimum buhar dağılımı ile, m&uuml;kemmel kayma sağlar.|4--Tam Güvenlik İçin No-Setting Sistemi--No-Setting teknolojisi ile kolay ve sıkıntısız &uuml;t&uuml;leme: yakma riski olmadan %100 g&uuml;venli sonu&ccedil;lar i&ccedil;in buhar ve sıcaklığın m&uuml;kemmel birleşimi.|5--Son Dakika Rötuşları İçin Mükemmeldir--Kolay dikey buharlama &ouml;zelliği ve sadece 30 saniyede s&uuml;per hızlı ısınma s&uuml;resine sahiptir, b&ouml;ylece ihtiyacınız olduğunda son anda yapacağınız r&ouml;tuşlarla harika g&ouml;r&uuml;n&uuml;rs&uuml;n&uuml;z.|6--Kolay Taşıma Ve Üstün Rahatlık--Kolay taşıma kilit sistemine sahiptir, saklarken tam rahatlık ve g&uuml;venlik sağlar, &ccedil;ıkarılabilir su haznesi &uuml;t&uuml; yapmayı keyifli hale getirir.|7--Onarılabilir Ürün--<ul><li>Kolay onarılacak şekilde tasarlanmıştır</li><li>10Y+ i&ccedil;in d&uuml;ş&uuml;k bedelli, hızlı yedek par&ccedil;a teslimi </li><li>D&uuml;nya genelinde 6500 onarım merkezi</li></ul>",
          "erp_grup2kodu": "M",
          "erp_pallet_weight": "0",
          "integration_page_description": "Express AntiCalc SV8054",
          "integration_barkod": "3121040069509",
          "erp_pallet_dimension_height": "0",
          "integration_is_seo_automatic": "true",
          "erp_packed_dimension_depth": "0",
          "erp_aile_kodu": "L02",
          "erp_products_perparcel": "0",
          "integration_gecerliflg": "true",
          "erp_defoluflg": "false",
          "erp_serisonuflg": "false",
          "integration_products_percontainer_c20": "0",
          "erp_grup1kodu": "KM",
          "integration_grup3kodu": "0",
          "integration_detaylar": "{u'eComUrunDetay': [{u'TIPI': u'1', u'HTML_METIN': u'Geli\\u015fmi\\u015f kire&ccedil; &ouml;nleme teknolojisi, kolay bak\\u0131m sa\\u011flayan yeni &ccedil;\\u0131kar\\u0131labilir kire&ccedil; toplay\\u0131c\\u0131 ile, uzun s&uuml;re kal\\u0131c\\u0131 buhar performans\\u0131 sa\\u011flar. Ayr\\u0131ca kolay bak\\u0131m i&ccedil;in pratik bir aksesuar\\u0131 da ek olarak i&ccedil;indedir', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto26.jpg', u'BASLIK': u'Uzun S\\xfcreli Performans \\u0130\\xe7in \\xc7\\u0131kar\\u0131labilir Kire\\xe7 Toplay\\u0131c\\u0131', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'15692'}, {u'TIPI': u'1', u'HTML_METIN': u'H\\u0131zl\\u0131 ve etkili sonu&ccedil;lar i&ccedil;in, 120 g/dk s&uuml;rekli buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131 6,5 bar buhar bas\\u0131nc\\u0131 ile bir araya gelirken, 420 g/dk \\u015fok buhar g&uuml;c&uuml; en zorlu k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 bile a&ccedil;ar.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto55.jpg', u'BASLIK': u\"Tefal'in Ekstra G\\xfc\\xe7l\\xfc Buhar Jenerat\\xf6rl\\xfc \\xdct\\xfcs\\xfc\", u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'15693'}, {u'TIPI': u'1', u'HTML_METIN': u'Durilium AirGlide Taban Plakas\\u0131, kolay ve keyifli &uuml;t&uuml;leme i&ccedil;in optimum buhar da\\u011f\\u0131l\\u0131m\\u0131 ile, m&uuml;kemmel kayma sa\\u011flar.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto31.jpg', u'BASLIK': u'Ola\\u011fan\\xfcst\\xfc Taban Plakas\\u0131 \\u0130le Kusursuz Kayganl\\u0131k', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'15694'}, {u'TIPI': u'1', u'HTML_METIN': u'No-Setting teknolojisi ile kolay ve s\\u0131k\\u0131nt\\u0131s\\u0131z &uuml;t&uuml;leme: yakma riski olmadan %100 g&uuml;venli sonu&ccedil;lar i&ccedil;in buhar ve s\\u0131cakl\\u0131\\u011f\\u0131n m&uuml;kemmel birle\\u015fimi.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto28.jpg', u'BASLIK': u'Tam G\\xfcvenlik \\u0130\\xe7in No-Setting Sistemi', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'15695'}, {u'TIPI': u'1', u'HTML_METIN': u'Kolay dikey buharlama &ouml;zelli\\u011fi ve sadece 30 saniyede s&uuml;per h\\u0131zl\\u0131 \\u0131s\\u0131nma s&uuml;resine sahiptir, b&ouml;ylece ihtiyac\\u0131n\\u0131z oldu\\u011funda son anda yapaca\\u011f\\u0131n\\u0131z r&ouml;tu\\u015flarla harika g&ouml;r&uuml;n&uuml;rs&uuml;n&uuml;z.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto29.jpg', u'BASLIK': u'Son Dakika R\\xf6tu\\u015flar\\u0131 \\u0130\\xe7in M\\xfckemmeldir', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'15696'}, {u'TIPI': u'1', u'HTML_METIN': u'Kolay ta\\u015f\\u0131ma kilit sistemine sahiptir, saklarken tam rahatl\\u0131k ve g&uuml;venlik sa\\u011flar, &ccedil;\\u0131kar\\u0131labilir su haznesi &uuml;t&uuml; yapmay\\u0131 keyifli hale getirir.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto30.jpg', u'BASLIK': u'Kolay Ta\\u015f\\u0131ma Ve \\xdcst\\xfcn Rahatl\\u0131k', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'15697'}, {u'TIPI': u'1', u'HTML_METIN': u'<ul><li>Kolay onar\\u0131lacak \\u015fekilde tasarlanm\\u0131\\u015ft\\u0131r</li><li>10Y+ i&ccedil;in d&uuml;\\u015f&uuml;k bedelli, h\\u0131zl\\u0131 yedek par&ccedil;a teslimi </li><li>D&uuml;nya genelinde 6500 onar\\u0131m merkezi</li></ul>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto32.jpg', u'BASLIK': u'Onar\\u0131labilir \\xdcr\\xfcn', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'15698'}, {u'TIPI': u'2', u'HTML_METIN': u'2800 Watt G&uuml;&ccedil;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_900_w_guc.jpg', u'BASLIK': u'Teknik \\xd6zellik 1', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'15699'}, {u'TIPI': u'2', u'HTML_METIN': u'120 g/min Sabit Buhar G&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_Sabit-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 2', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'15700'}, {u'TIPI': u'2', u'HTML_METIN': u'420 g/min \\u015eok Buhar G&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_\\u015eok-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 3', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'15701'}, {u'TIPI': u'2', u'HTML_METIN': u'1.8 l &Ccedil;\\u0131kar\\u0131labilir Su Haznesi', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_\\xc7\\u0131kar\\u0131labilir-su-haznesi.jpg', u'BASLIK': u'Teknik \\xd6zellik 4', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'15702'}, {u'TIPI': u'2', u'HTML_METIN': u'Eko Mod', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_Eko-Modu.jpg', u'BASLIK': u'Teknik \\xd6zellik 5', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'15703'}, {u'TIPI': u'2', u'HTML_METIN': u'Otomatik Kapanma', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_Otomatik-Kapanma.jpg', u'BASLIK': u'Teknik \\xd6zellik 6', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'15704'}, {u'TIPI': u'2', u'HTML_METIN': u'Kire&ccedil; Toplay\\u0131c\\u0131', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_Kirec-Avcisi.jpg', u'BASLIK': u'Teknik \\xd6zellik 7', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'15705'}, {u'TIPI': u'2', u'HTML_METIN': u'1.6 m Kordon Uzunlu\\u011fu', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_8,2-m.-Kordon-Uzunlu\\u011fu.jpg', u'BASLIK': u'Teknik \\xd6zellik 8', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'15706'}]}",
          "erp_pallet_volume": "0",
          "erp_pallet_dimension_width": "0",
          "integration_aile_kodu": "L02",
          "integration_products_perplayer": "0",
          "erp_layers_perpallet": "0",
          "compare_product_slug": "buhar-kazanli-utuler-compare",
          "erp_products_percontainer_hq4": "0",
          "short_description": "• Durilium AirGlide taban teknolojisi <br>\n• Hızlı ütüleme performansı <br>\n• Pratik ve kolay ütüleme<br>\n• Kireç toplama özelliği<br>\n• Buhar kazanlı ütü<br>",
          "ozellik2_aciklama": "Hızlı ve etkili sonuçlar için, 120 g/dk sürekli buhar çıkışı 6,5 bar buhar basıncı ile bir araya gelirken, 420 g/dk şok buhar gücü en zorlu kırışıklıkları bile açar.",
          "erp_detaylar": "{u'eComUrunDetay': [{u'TIPI': u'1', u'HTML_METIN': u'Geli\\u015fmi\\u015f kire&ccedil; &ouml;nleme teknolojisi, kolay bak\\u0131m sa\\u011flayan yeni &ccedil;\\u0131kar\\u0131labilir kire&ccedil; toplay\\u0131c\\u0131 ile, uzun s&uuml;re kal\\u0131c\\u0131 buhar performans\\u0131 sa\\u011flar. Ayr\\u0131ca kolay bak\\u0131m i&ccedil;in pratik bir aksesuar\\u0131 da ek olarak i&ccedil;indedir', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto26.jpg', u'BASLIK': u'Uzun S\\xfcreli Performans \\u0130\\xe7in \\xc7\\u0131kar\\u0131labilir Kire\\xe7 Toplay\\u0131c\\u0131', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'15692'}, {u'TIPI': u'1', u'HTML_METIN': u'H\\u0131zl\\u0131 ve etkili sonu&ccedil;lar i&ccedil;in, 120 g/dk s&uuml;rekli buhar &ccedil;\\u0131k\\u0131\\u015f\\u0131 6,5 bar buhar bas\\u0131nc\\u0131 ile bir araya gelirken, 420 g/dk \\u015fok buhar g&uuml;c&uuml; en zorlu k\\u0131r\\u0131\\u015f\\u0131kl\\u0131klar\\u0131 bile a&ccedil;ar.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto55.jpg', u'BASLIK': u\"Tefal'in Ekstra G\\xfc\\xe7l\\xfc Buhar Jenerat\\xf6rl\\xfc \\xdct\\xfcs\\xfc\", u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'15693'}, {u'TIPI': u'1', u'HTML_METIN': u'Durilium AirGlide Taban Plakas\\u0131, kolay ve keyifli &uuml;t&uuml;leme i&ccedil;in optimum buhar da\\u011f\\u0131l\\u0131m\\u0131 ile, m&uuml;kemmel kayma sa\\u011flar.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto31.jpg', u'BASLIK': u'Ola\\u011fan\\xfcst\\xfc Taban Plakas\\u0131 \\u0130le Kusursuz Kayganl\\u0131k', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'15694'}, {u'TIPI': u'1', u'HTML_METIN': u'No-Setting teknolojisi ile kolay ve s\\u0131k\\u0131nt\\u0131s\\u0131z &uuml;t&uuml;leme: yakma riski olmadan %100 g&uuml;venli sonu&ccedil;lar i&ccedil;in buhar ve s\\u0131cakl\\u0131\\u011f\\u0131n m&uuml;kemmel birle\\u015fimi.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto28.jpg', u'BASLIK': u'Tam G\\xfcvenlik \\u0130\\xe7in No-Setting Sistemi', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'15695'}, {u'TIPI': u'1', u'HTML_METIN': u'Kolay dikey buharlama &ouml;zelli\\u011fi ve sadece 30 saniyede s&uuml;per h\\u0131zl\\u0131 \\u0131s\\u0131nma s&uuml;resine sahiptir, b&ouml;ylece ihtiyac\\u0131n\\u0131z oldu\\u011funda son anda yapaca\\u011f\\u0131n\\u0131z r&ouml;tu\\u015flarla harika g&ouml;r&uuml;n&uuml;rs&uuml;n&uuml;z.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto29.jpg', u'BASLIK': u'Son Dakika R\\xf6tu\\u015flar\\u0131 \\u0130\\xe7in M\\xfckemmeldir', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'15696'}, {u'TIPI': u'1', u'HTML_METIN': u'Kolay ta\\u015f\\u0131ma kilit sistemine sahiptir, saklarken tam rahatl\\u0131k ve g&uuml;venlik sa\\u011flar, &ccedil;\\u0131kar\\u0131labilir su haznesi &uuml;t&uuml; yapmay\\u0131 keyifli hale getirir.', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto30.jpg', u'BASLIK': u'Kolay Ta\\u015f\\u0131ma Ve \\xdcst\\xfcn Rahatl\\u0131k', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'15697'}, {u'TIPI': u'1', u'HTML_METIN': u'<ul><li>Kolay onar\\u0131lacak \\u015fekilde tasarlanm\\u0131\\u015ft\\u0131r</li><li>10Y+ i&ccedil;in d&uuml;\\u015f&uuml;k bedelli, h\\u0131zl\\u0131 yedek par&ccedil;a teslimi </li><li>D&uuml;nya genelinde 6500 onar\\u0131m merkezi</li></ul>', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_picto32.jpg', u'BASLIK': u'Onar\\u0131labilir \\xdcr\\xfcn', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'15698'}, {u'TIPI': u'2', u'HTML_METIN': u'2800 Watt G&uuml;&ccedil;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_900_w_guc.jpg', u'BASLIK': u'Teknik \\xd6zellik 1', u'SIRANO': u'1.000000', u'GECERLI': u'true', u'DETAY_ID': u'15699'}, {u'TIPI': u'2', u'HTML_METIN': u'120 g/min Sabit Buhar G&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_Sabit-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 2', u'SIRANO': u'2.000000', u'GECERLI': u'true', u'DETAY_ID': u'15700'}, {u'TIPI': u'2', u'HTML_METIN': u'420 g/min \\u015eok Buhar G&uuml;c&uuml;', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_\\u015eok-buhar-g\\xfcc\\xfc.jpg', u'BASLIK': u'Teknik \\xd6zellik 3', u'SIRANO': u'3.000000', u'GECERLI': u'true', u'DETAY_ID': u'15701'}, {u'TIPI': u'2', u'HTML_METIN': u'1.8 l &Ccedil;\\u0131kar\\u0131labilir Su Haznesi', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_\\xc7\\u0131kar\\u0131labilir-su-haznesi.jpg', u'BASLIK': u'Teknik \\xd6zellik 4', u'SIRANO': u'4.000000', u'GECERLI': u'true', u'DETAY_ID': u'15702'}, {u'TIPI': u'2', u'HTML_METIN': u'Eko Mod', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_Eko-Modu.jpg', u'BASLIK': u'Teknik \\xd6zellik 5', u'SIRANO': u'5.000000', u'GECERLI': u'true', u'DETAY_ID': u'15703'}, {u'TIPI': u'2', u'HTML_METIN': u'Otomatik Kapanma', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_Otomatik-Kapanma.jpg', u'BASLIK': u'Teknik \\xd6zellik 6', u'SIRANO': u'6.000000', u'GECERLI': u'true', u'DETAY_ID': u'15704'}, {u'TIPI': u'2', u'HTML_METIN': u'Kire&ccedil; Toplay\\u0131c\\u0131', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_Kirec-Avcisi.jpg', u'BASLIK': u'Teknik \\xd6zellik 7', u'SIRANO': u'7.000000', u'GECERLI': u'true', u'DETAY_ID': u'15705'}, {u'TIPI': u'2', u'HTML_METIN': u'1.6 m Kordon Uzunlu\\u011fu', u'RESIM_URL': u'http://files.divaportal.com/ecom/33/Uploads/UploadedImages/2152_img1_8,2-m.-Kordon-Uzunlu\\u011fu.jpg', u'BASLIK': u'Teknik \\xd6zellik 8', u'SIRANO': u'8.000000', u'GECERLI': u'true', u'DETAY_ID': u'15706'}]}",
          "integration_layers_perpallet": "0",
          "integration_model": "SV8054",
          "erp_barkod": "3121040069509",
          "erp_range": "SV80",
          "product_line": "LINEN CARE",
          "agirlik": "4,25 kg",
          "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/4000E13A-E250-4272-BF33B31000D08CCF/?w=147&h=147&crop=false__Son dakika rötuşları için mükemmeldir",
          "integration_gecerli": "true",
          "erp_parcel_dimension_depth": "0",
          "integration_page_title": "Express AntiCalc SV8054",
          "integration_parcel_volume": "0",
          "erp_products_perplayer": "0",
          "downloadable_image_title": "https://tefal.akinoncdn.com/cms/2021/11/03/20da8f02-2000-4afd-829e-5347d4e49667.pdf",
          "integration_serisonuflg": "false",
          "integration_products_perparcel": "0",
          "integration_attributeId_51": "1,8 lt",
          "integration_grup2kodu": "M",
          "erp_is_seo_automatic": "true",
          "genislik": "351,5 mm",
          "integration_alt_aile_kodu": "L02140",
          "integration_attributeId_49": "420 gr/dk",
          "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/A0FA0916-EE69-40A5-91BE6C379FE63754/?w=147&h=147&crop=false__Uzun süreli performans için çıkarılabilir kireç toplayıcı",
          "integration_sirketkodu": "2006_GSEB",
          "erp_pallet_dimension_depth": "0",
          "erp_page_description": "Express AntiCalc SV8054",
          "erp_agirlik": "4250",
          "ozellik6_aciklama": "Kolay taşıma kilit sistemine sahiptir, saklarken tam rahatlık ve güvenlik sağlar, çıkarılabilir su haznesi ütü yapmayı keyifli hale getirir.",
          "integration_grup1kodu": "KM",
          "integration_products_percontainer_c40": "0",
          "integration_attributeId_47": "6,5 bar",
          "erp_attributeId_47": "6,5 bar",
          "erp_page_title": "Express AntiCalc SV8054",
          "integration_attributeId_730": "1,6 m",
          "integration_defoluflg": "false",
          "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/BEF552D2-5F76-413B-87F11A36C4405849/?w=147&h=147&crop=false__Tefal'in ekstra güçlü buhar jeneratörlü ütüsü",
          "erp_parcel_volume": "0",
          "erp_gecerliflg": "true",
          "erp_gecerli": "true",
          "erp_sirketkodu": "2006_GSEB",
          "erp_parcel_dimension_width": "0",
          "integration_durum": "Sıfır",
          "integration_editorial_description_detail": "Express Anti-Calc Buhar Kazanlı Ütü, ileri teknoloji bakım sistemi ile her türlü kumaş için ideal olan olağanüstü buhar gücünü bir araya getirerek kalıcı performanslı, hızlı ve kolay sonuçlar sağlar. Çıkarılabilen yeni kireç toplayıcı, kolay bakımı ve üstün performansı ile ütünüzün daha uzun ömürlü olmasına olanak tanır. Hızlı ütüleme performansı için, 120 g/dk sürekli buhar çıkışı 6,5 bar buhar basıncı ile bir araya gelirken, 420 g/dk şok buhar gücü en zorlu kırışıklıkları bile açar. Durilium AirGlide taban teknolojisinin üstün kayganlığı ve yüksek ütüleme gücüne ile uzun süreli performansa sahiptir.<br><br>Groupe SEB N.1 Avrupa'nın 1 Numaralı Ütü Üreticisi*<br><br>*Euromonitor International Limited, ütü kategorisi,Groupe SEB’in ütü markalarının 2019 yılındaki toplam hacim bazında perakende satışı (Tefal, Calor,Rowenta, OBH Nortica)",
          "ozellik7_aciklama": "• Kolay onarılacak şekilde tasarlanmıştır • 15 yıl boyunca düşük bedelli, hızlı parça teslimi • Dünya genelinde 6500 onarım merkezi",
          "ozellik1_aciklama": "Gelişmiş kireç önleme teknolojisi, kolay bakım sağlayan yeni çıkarılabilir kireç toplayıcı ile, uzun süre kalıcı buhar performansı sağlar. Ayrıca kolay bakım için pratik bir aksesuarı da ek olarak içindedir.",
          "integration_parcel_dimension_depth": "0",
          "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/320DF84B-2B3E-4BB5-9D5DF37A9956ECB0/?w=147&h=147&crop=false__Tam güvenlik için No-Setting sistemi",
          "marketplace_product_name": "Tefal SV8054 E0 Express Anti-Calc 6.5 Bar Buhar Kazanlı Ütü 2800 Watts",
          "integration_parcel_dimension_height": "0",
          "purchase_limit_per_basket": "5",
          "integration_attributeId_22": "Mor",
          "erp_picto": "1--Uzun Süreli Performans İçin Çıkarılabilir Kireç Toplayıcı--Gelişmiş kire&ccedil; &ouml;nleme teknolojisi, kolay bakım sağlayan yeni &ccedil;ıkarılabilir kire&ccedil; toplayıcı ile, uzun s&uuml;re kalıcı buhar performansı sağlar. Ayrıca kolay bakım i&ccedil;in pratik bir aksesuarı da ek olarak i&ccedil;indedir|2--Tefal'in Ekstra Güçlü Buhar Jeneratörlü Ütüsü--Hızlı ve etkili sonu&ccedil;lar i&ccedil;in, 120 g/dk s&uuml;rekli buhar &ccedil;ıkışı 6,5 bar buhar basıncı ile bir araya gelirken, 420 g/dk şok buhar g&uuml;c&uuml; en zorlu kırışıklıkları bile a&ccedil;ar.|3--Olağanüstü Taban Plakası İle Kusursuz Kayganlık--Durilium AirGlide Taban Plakası, kolay ve keyifli &uuml;t&uuml;leme i&ccedil;in optimum buhar dağılımı ile, m&uuml;kemmel kayma sağlar.|4--Tam Güvenlik İçin No-Setting Sistemi--No-Setting teknolojisi ile kolay ve sıkıntısız &uuml;t&uuml;leme: yakma riski olmadan %100 g&uuml;venli sonu&ccedil;lar i&ccedil;in buhar ve sıcaklığın m&uuml;kemmel birleşimi.|5--Son Dakika Rötuşları İçin Mükemmeldir--Kolay dikey buharlama &ouml;zelliği ve sadece 30 saniyede s&uuml;per hızlı ısınma s&uuml;resine sahiptir, b&ouml;ylece ihtiyacınız olduğunda son anda yapacağınız r&ouml;tuşlarla harika g&ouml;r&uuml;n&uuml;rs&uuml;n&uuml;z.|6--Kolay Taşıma Ve Üstün Rahatlık--Kolay taşıma kilit sistemine sahiptir, saklarken tam rahatlık ve g&uuml;venlik sağlar, &ccedil;ıkarılabilir su haznesi &uuml;t&uuml; yapmayı keyifli hale getirir.|7--Onarılabilir Ürün--<ul><li>Kolay onarılacak şekilde tasarlanmıştır</li><li>10Y+ i&ccedil;in d&uuml;ş&uuml;k bedelli, hızlı yedek par&ccedil;a teslimi </li><li>D&uuml;nya genelinde 6500 onarım merkezi</li></ul>",
          "erp_parcel_dimension_height": "0",
          "integration_attributeId_50": "Var",
          "garanti_suresi": "2 Yıl",
          "integration_marka": "01",
          "integration_attributeId_287": "2800 watt",
          "ozellik3_aciklama": "Durilium AirGlide Taban Plakası, kolay ve keyifli ütüleme için optimum buhar dağılımı ile, mükemmel kayma sağlar.",
          "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B6E833B3-8DD2-4DFC-AD95015752E6F9C9/?w=147&h=147&crop=false__Olağanüstü taban plakası ile kusursuz kayganlık",
          "integration_pallet_dimension_height": "0",
          "erp_parcel_weight": "0",
          "ozellik7_baslik": "https://tefal.akinoncdn.com/cms/2022/02/04/a717e518-07f3-4498-b0e3-963bad95c47e.jpe__Ürün 15 yıl boyunca onarılabilir",
          "downloadable_link": "https://tefal.akinoncdn.com/cms/2021/11/03/a2cc0f9f-b00b-4a4c-b8ea-f61abd60f109.jpe__Kullanım Kılavuzu",
          "erp_attributeId_51": "1,8 lt",
          "integration_products_percontainer_hq4": "0",
          "integration_pallet_volume": "0",
          "integration_parcel_weight": "0",
          "ozelllik1_aciklama": "Gelişmiş kireç önleme teknolojisi, kolay bakım sağlayan yeni çıkarılabilir kireç toplayıcı ile, uzun süre kalıcı buhar performansı sağlar. Ayrıca kolay bakım için pratik bir aksesuarı da ek olarak içindedir.",
          "integration_pallet_dimension_width": "0",
          "erp_products_percontainer_c20": "0",
          "iade_kategori": "yurtici",
          "integration_range": "SV80",
          "erp_marka": "01",
          "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/61309AE8-2160-4ADB-86C9ED34E0802381/?w=147&h=147&crop=false__Kolay taşıma ve üstün rahatlık",
          "erp_attributeId_693": "120 g/dk - 420 g/dk",
          "turu": "Buhar İstasyonlu",
          "derinlik": "211 mm",
          "integration_agirlik": "4250",
          "integration_parcel_dimension_width": "0",
          "integration_pallet_dimension_depth": "0",
          "erp_grup3kodu": "0",
          "integration_attributeId_227": "Var",
          "integration_packed_dimension_depth": "0"
        },
        "attribute_set": 8,
        "attributes_kwargs": {
          "integration_attributeId_49": {
            "value": "420 gr/dk",
            "data_type": "dropdown",
            "label": "420 gr/dk"
          },
          "integration_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_attributeId_24": {
            "value": "Durilium Airglide Autoclean",
            "label": "Durilium Airglide Autoclean"
          },
          "integration_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_attributeId_22": {
            "value": "Mor",
            "label": "Mor"
          },
          "erp_attributeId_47": {
            "value": "6,5 bar",
            "data_type": "dropdown",
            "label": "6,5 bar"
          },
          "integration_attributeId_730": {
            "value": "1,6 m",
            "data_type": "dropdown",
            "label": "1,6 m"
          },
          "integration_attributeId_693": {
            "value": "120 g/dk - 420 g/dk",
            "data_type": "dropdown",
            "label": "120 g/dk - 420 g/dk"
          },
          "integration_attributeId_24": {
            "value": "Durilium Airglide Autoclean",
            "data_type": "dropdown",
            "label": "Durilium Airglide Autoclean"
          },
          "integration_attributeId_22": {
            "value": "Mor",
            "data_type": "dropdown",
            "label": "Mor"
          },
          "erp_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_defoluflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "erp_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_attributeId_51": {
            "value": "1,8 lt",
            "data_type": "dropdown",
            "label": "1,8 L"
          },
          "integration_attributeId_50": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "integration_attributeId_287": {
            "value": "2800 watt",
            "data_type": "dropdown",
            "label": "2800 watt"
          },
          "erp_attributeId_51": {
            "value": "1,8 lt",
            "label": "1,8 lt"
          },
          "integration_attributeId_47": {
            "value": "6,5 bar",
            "data_type": "dropdown",
            "label": "6,5 bar"
          },
          "product_line": {
            "value": "LINEN CARE",
            "data_type": "dropdown",
            "label": "LINEN CARE"
          },
          "integration_gecerli": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          },
          "erp_attributeId_693": {
            "value": "120 g/dk - 420 g/dk",
            "data_type": "dropdown",
            "label": "120 g/dk - 420 g/dk"
          },
          "erp_marka": {
            "value": "01",
            "data_type": "dropdown",
            "label": "TEFAL"
          },
          "integration_serisonuflg": {
            "value": "false",
            "data_type": "dropdown",
            "label": "false"
          },
          "integration_attributeId_227": {
            "value": "Var",
            "data_type": "dropdown",
            "label": "Var"
          },
          "erp_is_seo_automatic": {
            "value": "true",
            "data_type": "dropdown",
            "label": "true"
          }
        },
        "extra_attributes": {
          "top_seller": false
        },
        "productimage_set": [
          {
            "pk": 8077,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/763/58cb264f-fe72-4122-9f8f-23943bf11b5b.jpg",
            "order": 1,
            "created_date": "2021-10-14T14:47:55.230355Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8078,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/763/35a5e765-cec7-4500-9556-7cbb1ed2709f.jpg",
            "order": 2,
            "created_date": "2021-10-14T14:47:55.279680Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8079,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/763/a85fdf17-56f0-4570-a27f-96eb62afa9d4.jpg",
            "order": 3,
            "created_date": "2021-10-14T14:47:55.324668Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8080,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/763/dd66facf-20a2-452a-b9b4-5f8c48b29446.jpg",
            "order": 4,
            "created_date": "2021-10-14T14:47:55.367873Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8081,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/763/65fadfb8-4b61-4a9f-92a9-9665511c4528.jpg",
            "order": 5,
            "created_date": "2021-10-14T14:47:55.412268Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8082,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/763/09f17407-d970-4b80-8f4e-8ac5a72d3149.jpg",
            "order": 6,
            "created_date": "2021-10-14T14:47:55.460581Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8083,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/763/5502b468-0ff4-49d8-be4b-96c16ea0fbd9.jpg",
            "order": 7,
            "created_date": "2021-10-14T14:47:55.513611Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8084,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/763/3b9427a9-269e-4f23-a55a-0f28ed450d73.jpg",
            "order": 9,
            "created_date": "2021-10-14T14:47:55.563845Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8085,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/763/3b0f1f9a-31ee-44ca-9099-2d7e50168cb0.jpg",
            "order": 10,
            "created_date": "2021-10-14T14:47:55.605579Z",
            "specialimage_set": [
              
            ]
          },
          {
            "pk": 8086,
            "status": "active",
            "image": "https://64ee49.cdn.akinoncloud.com/products/2021/10/14/763/0ea09ab9-b290-4974-a8a3-c39377691d8a.jpg",
            "order": 12,
            "created_date": "2021-10-14T14:47:55.646337Z",
            "specialimage_set": [
              
            ]
          }
        ],
        "price": "3569.90",
        "in_stock": false,
        "currency_type": "try",
        "retail_price": "3569.90",
        "unit_type": "qty",
        "absolute_url": "/express-sv8054-anti-calc-buhar-kazanli-utu-1830006950/",
        "productvideo_set": [
          
        ],
        "product_type": "0",
        "price_type": "default",
        "form_schema": null,
        "is_ready_to_basket": false,
        "stock": 0,
        "data_source": null,
        "basket_offers": [
          
        ],
        "extra_data": {
          "variants": [
            
          ]
        }
      }
    ],
    "category": {
      "pk": 166,
      "name": "Elektrikli Ev Aletleri",
      "menuitemmodel": "498e945e-db4e-4803-8be3-fefb7cbf0f21",
      "absolute_url": "/elektrikli-ev-aletleri/",
      "sort_option": 563,
      "uuid": "982ce2e1-8c99-429c-b762-bc5c1b3dd8cb",
      "depth": 2,
      "attributes": {
        "subcategory": [
          {
            "value": {
              "link": "/utuleme/",
              "title": "ÜTÜLEME"
            },
            "kwargs": {
              "data_type": "nested",
              "value": {
                
              }
            }
          },
          {
            "value": {
              "link": "/elektrikli-supurgeler/",
              "title": "ELEKTRİKLİ SÜPÜRGELER"
            },
            "kwargs": {
              "data_type": "nested",
              "value": {
                
              }
            }
          }
        ],
        "url_slug": {
          "value": "/elektrikli-ev-aletleri/",
          "kwargs": {
            
          }
        }
      }
    }}]
  ;

  it('JSON.stringify() Speed', function () {
    console.time('JSON.stringify()');
    JSON.stringify(obj);
    console.timeEnd('JSON.stringify()');
  });

  it('quicki() Speed', function () {
    console.time('quicki()');
    quicki(obj);
    console.timeEnd('quicki()');
  });
});

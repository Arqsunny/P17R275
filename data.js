var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.6873423926944966,
        "pitch": -0.3716301094741006,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": 3.088994056906323,
          "pitch": 0.07483069328069014,
          "rotation": 1.5707963267948966,
          "target": "1-deck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-deck",
      "name": "Deck",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.8735263415142427,
        "pitch": 0.13290147606955216,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": -1.5915519875610045,
          "pitch": 0.11037807471593553,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": -2.5887090569286855,
          "pitch": 0.017978373507837375,
          "rotation": 0,
          "target": "6-bedroom"
        },
        {
          "yaw": 2.7701599278895284,
          "pitch": 0.03600389655372638,
          "rotation": 0,
          "target": "2-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-livingroom",
      "name": "LivingRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.3211916485880586,
        "pitch": 0.3193300208386738,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": 2.530122227869354,
          "pitch": 0.10724729912915265,
          "rotation": 0,
          "target": "3-laundry"
        },
        {
          "yaw": -1.0834243379493174,
          "pitch": 0.026677278012650518,
          "rotation": 0,
          "target": "6-bedroom"
        },
        {
          "yaw": -2.3052351950152303,
          "pitch": -0.055436097744388846,
          "rotation": 0,
          "target": "4-hall"
        },
        {
          "yaw": 0.17996460982551277,
          "pitch": -0.05897996767941471,
          "rotation": 0,
          "target": "1-deck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.4917805115682379,
        "pitch": 0.23088549511711953,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": -1.2807250114614845,
          "pitch": 0.0909347663164084,
          "rotation": 1.5707963267948966,
          "target": "2-livingroom"
        },
        {
          "yaw": -0.99913086925309,
          "pitch": -0.0035100845704363337,
          "rotation": 0,
          "target": "6-bedroom"
        },
        {
          "yaw": -1.5925825502738018,
          "pitch": 0.025967786094625467,
          "rotation": 0,
          "target": "4-hall"
        },
        {
          "yaw": -0.5690721184953844,
          "pitch": 0.041321222718080364,
          "rotation": 0,
          "target": "1-deck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall",
      "name": "hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.8272106861511084,
        "pitch": 0.04653794279788315,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": 2.605329923911233,
          "pitch": -0.04120548122884493,
          "rotation": 0,
          "target": "5-bath"
        },
        {
          "yaw": -2.049036553195286,
          "pitch": 0.025783760931712862,
          "rotation": 0,
          "target": "2-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bath",
      "name": "Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.102751557210132,
        "pitch": 0.09326988027164163,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": -1.208221806707222,
          "pitch": 0.028174295835862395,
          "rotation": 4.71238898038469,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.4207830160262702,
        "pitch": -0.09170093610401153,
        "fov": 1.6361377546976372
      },
      "linkHotspots": [
        {
          "yaw": -0.9068499907103789,
          "pitch": -0.033957638535305534,
          "rotation": 0,
          "target": "1-deck"
        },
        {
          "yaw": -0.05249969276207267,
          "pitch": 0.0006045518177089093,
          "rotation": 5.497787143782138,
          "target": "2-livingroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

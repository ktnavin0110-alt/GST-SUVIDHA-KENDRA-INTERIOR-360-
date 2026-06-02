var APP_DATA = {
  "scenes": [
    {
      "id": "0-office-entry",
      "name": "OFFICE ENTRY",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13054324183242727,
          "pitch": 0.011588231758050682,
          "rotation": 0,
          "target": "1-view-1"
        },
        {
          "yaw": 0.6422509882510532,
          "pitch": -0.017266952980882877,
          "rotation": 1.5707963267948966,
          "target": "2-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view-1",
      "name": "VIEW 1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3570426487074947,
          "pitch": 0.096073675221783,
          "rotation": 0,
          "target": "0-office-entry"
        },
        {
          "yaw": -1.5365672668830523,
          "pitch": 0.0990665683022236,
          "rotation": 0,
          "target": "2-view-2"
        },
        {
          "yaw": -1.2993690453925133,
          "pitch": -0.03937905720604462,
          "rotation": 1.5707963267948966,
          "target": "3-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-view-2",
      "name": "VIEW 2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20675129096489897,
          "pitch": 0.08428881033314539,
          "rotation": 0,
          "target": "4-managers-cabin-entry"
        },
        {
          "yaw": -0.9330344700425766,
          "pitch": 0.22409691491516526,
          "rotation": 0.7853981633974483,
          "target": "3-wash"
        },
        {
          "yaw": 1.5596509182382219,
          "pitch": 0.14918990154933454,
          "rotation": 0,
          "target": "1-view-1"
        },
        {
          "yaw": 1.188113947087178,
          "pitch": 0.2000964791914175,
          "rotation": 4.71238898038469,
          "target": "0-office-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash",
      "name": "WASH",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0047116099422,
          "pitch": 0.20490573316049243,
          "rotation": 0,
          "target": "2-view-2"
        },
        {
          "yaw": 1.1708988997907959,
          "pitch": 0.16610395316968862,
          "rotation": 4.71238898038469,
          "target": "4-managers-cabin-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-managers-cabin-entry",
      "name": "MANAGERS CABIN ENTRY",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9632020894466429,
          "pitch": 0.0313546134909668,
          "rotation": 0.7853981633974483,
          "target": "6-wash-2"
        },
        {
          "yaw": 0.8977055419671025,
          "pitch": 0.09934931572236749,
          "rotation": 0,
          "target": "5-cabin-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cabin-view-1",
      "name": "CABIN VIEW 1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5942326542184233,
          "pitch": 0.2661346958743209,
          "rotation": 0,
          "target": "4-managers-cabin-entry"
        },
        {
          "yaw": -0.9963062105593359,
          "pitch": 0.19870129225073008,
          "rotation": 4.71238898038469,
          "target": "2-view-2"
        },
        {
          "yaw": -0.1618988499279581,
          "pitch": 0.06809005605945018,
          "rotation": 1.5707963267948966,
          "target": "6-wash-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-wash-2",
      "name": "WASH 2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0179307460016886,
          "pitch": 0.29425165101234896,
          "rotation": 0,
          "target": "4-managers-cabin-entry"
        },
        {
          "yaw": 2.3118366918870628,
          "pitch": 0.16692601970057197,
          "rotation": 1.5707963267948966,
          "target": "2-view-2"
        },
        {
          "yaw": 1.6124426825093163,
          "pitch": 0.17160195522421695,
          "rotation": 5.497787143782138,
          "target": "5-cabin-view-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "GST SUVIDHA KENDRA N. PARAVUR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

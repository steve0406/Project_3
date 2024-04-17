// An array that contains all the information needed to create city and state markers
// Population Data Source: U.S. 2020 Decennial Census
let locations = [
   {
        coordinates: [33.93911 , 67.709953],
        country: {
            name: 'Afghanistan' ,
            population: 37172386,
            tourism:14000,
            cases:170152,
            deaths:7488,
            mean_age:17.3
        },
       },
   {
        coordinates: [41.153332 , 20.168331],
        country: {
            name: 'Albania' ,
            population: 2866376,
            tourism:5340000,
            cases:267551,
            deaths:3407,
            mean_age:36.2
        },
       },
   {
        coordinates: [28.033886 , 1.659626],
        country: {
            name: 'Algeria' ,
            population: 42228429,
            tourism:2657000,
            cases:261226,
            deaths:6715,
            mean_age:27.5
        },
       },
   {
        coordinates: [42.546245 , 1.601554],
        country: {
            name: 'Andorra' ,
            population: 77006,
            tourism:3042000,
            cases:37140,
            deaths:148,
            mean_age:37
        },
       },
   {
        coordinates: [-11.202692 , 17.873887],
        country: {
            name: 'Angola' ,
            population: 30809762,
            tourism:218000,
            cases:98514,
            deaths:1898,
            mean_age:16.4
        },
       },
   {
        coordinates: [17.060816 , -61.796428],
        country: {
            name: 'Antigua and Barbuda' ,
            population: 96286,
            tourism:269000,
            cases:7331,
            deaths:134,
            mean_age:30.7
        },
       },
   {
        coordinates: [-38.416097 , -63.616672],
        country: {
            name: 'Argentina' ,
            population: 44494502,
            tourism:6942000,
            cases:8728262,
            deaths:123987,
            mean_age:30.8
        },
       },
   {
        coordinates: [40.069099 , 45.038189],
        country: {
            name: 'Armenia' ,
            population: 2951776,
            tourism:1652000,
            cases:404805,
            deaths:8157,
            mean_age:33.9
        },
       },
   {
        coordinates: [-25.274398 , 133.775136],
        country: {
            name: 'Australia' ,
            population: 24982688,
            tourism:9246000,
            cases:2902294,
            deaths:4593,
            mean_age:37.4
        },
       },
   {
        coordinates: [47.516231 , 14.550072],
        country: {
            name: 'Austria' ,
            population: 8840521,
            tourism:30816000,
            cases:2248713,
            deaths:14360,
            mean_age:43.2
        },
       },
   {
        coordinates: [40.143105 , 47.576927],
        country: {
            name: 'Azerbaijan' ,
            population: 9939800,
            tourism:2633000,
            cases:738328,
            deaths:9027,
            mean_age:30.3
        },
       },
   {
        coordinates: [25.03428 , -77.39628],
        country: {
            name: 'Bahamas' ,
            population: 385640,
            tourism:14000,
            cases:32925,
            deaths:757,
            mean_age:32.5
        },
       },
   {
        coordinates: [25.930414 , 50.637772],
        country: {
            name: 'Bahrain' ,
            population: 1569439,
            tourism:12045000,
            cases:458539,
            deaths:1425,
            mean_age:31.2
        },
       },
   {
        coordinates: [23.684994 , 90.356331],
        country: {
            name: 'Bangladesh' ,
            population: 161356039,
            tourism:14000,
            cases:1904826,
            deaths:28791,
            mean_age:25.6
        },
       },
   {
        coordinates: [13.193887 , -59.543198],
        country: {
            name: 'Barbados' ,
            population: 286641,
            tourism:680000,
            cases:51311,
            deaths:295,
            mean_age:38.5
        },
       },
   {
        coordinates: [53.709807 , 27.953389],
        country: {
            name: 'Belarus' ,
            population: 9483499,
            tourism:11501600,
            cases:823045,
            deaths:6237,
            mean_age:39.6
        },
       },
   {
        coordinates: [50.503887 , 4.469936],
        country: {
            name: 'Belgium' ,
            population: 11433256,
            tourism:9119000,
            cases:3421081,
            deaths:29624,
            mean_age:41.3
        },
       },
   {
        coordinates: [17.189877 , -88.49765],
        country: {
            name: 'Belize' ,
            population: 383071,
            tourism:489000,
            cases:55183,
            deaths:631,
            mean_age:23.5
        },
       },
   {
        coordinates: [9.30769 , 2.315834],
        country: {
            name: 'Benin' ,
            population: 11485048,
            tourism:295000,
            cases:26552,
            deaths:163,
            mean_age:18.2
        },
       },
   {
        coordinates: [27.514162 , 90.433601],
        country: {
            name: 'Bhutan' ,
            population: 754394,
            tourism:274000,
            cases:7199,
            deaths:5,
            mean_age:26.3
        },
       },
   {
        coordinates: [-16.290154 , -63.588653],
        country: {
            name: 'Bolivia' ,
            population: 11353142,
            tourism:1142000,
            cases:882649,
            deaths:21261,
            mean_age:37
        },
       },
   {
        coordinates: [43.915886 , 17.679076],
        country: {
            name: 'Bosnia and Herzegovina' ,
            population: 3323929,
            tourism:1053000,
            cases:362527,
            deaths:14984,
            mean_age:41
        },
       },
   {
        coordinates: [-14.235004 , -51.92528],
        country: {
            name: 'Brazil' ,
            population: 209469333,
            tourism:6621000,
            cases:27434286,
            deaths:638346,
            mean_age:31.3
        },
       },
   {
        coordinates: [4.535277 , 114.727669],
        country: {
            name: 'Brunei' ,
            population: 428962,
            tourism:14000,
            cases:21579,
            deaths:98,
            mean_age:37
        },
       },
   {
        coordinates: [42.733883 , 25.48583],
        country: {
            name: 'Bulgaria' ,
            population: 7025037,
            tourism:9273000,
            cases:1035285,
            deaths:34359,
            mean_age:43.5
        },
       },
   {
        coordinates: [12.238333 , -1.561593],
        country: {
            name: 'Burkina Faso' ,
            population: 19751535,
            tourism:144000,
            cases:20705,
            deaths:375,
            mean_age:17
        },
       },
   {
        coordinates: [16.5388 , -23.0418],
        country: {
            name: 'Cabo Verde' ,
            population: 543767,
            tourism:710000,
            cases:55840,
            deaths:400,
            mean_age:23.8
        },
       },
   {
        coordinates: [12.565679 , 104.990963],
        country: {
            name: 'Cambodia' ,
            population: 16249798,
            tourism:6201000,
            cases:123042,
            deaths:3015,
            mean_age:24
        },
       },
   {
        coordinates: [7.369722 , 12.354722],
        country: {
            name: 'Cameroon' ,
            population: 25216237,
            tourism:14000,
            cases:118675,
            deaths:1915,
            mean_age:18.3
        },
       },
   {
        coordinates: [56.130366 , -106.346771],
        country: {
            name: 'Canada' ,
            population: 37057765,
            tourism:21134000,
            cases:3186067,
            deaths:35439,
            mean_age:40.5
        },
       },
   {
        coordinates: [6.611111 , 20.939444],
        country: {
            name: 'Central African Republic' ,
            population: 4666377,
            tourism:14000,
            cases:14154,
            deaths:111,
            mean_age:17.8
        },
       },
   {
        coordinates: [15.454166 , 18.732207],
        country: {
            name: 'Chad' ,
            population: 15477751,
            tourism:14000,
            cases:7216,
            deaths:190,
            mean_age:16.1
        },
       },
   {
        coordinates: [-35.675147 , -71.542969],
        country: {
            name: 'Chile' ,
            population: 18729160,
            tourism:5723000,
            cases:2582934,
            deaths:40464,
            mean_age:33.7
        },
       },
   {
        coordinates: [35.86166 , 104.195397],
        country: {
            name: 'China' ,
            population: 1392730000,
            tourism:62900000,
            cases:123728,
            deaths:4855,
            mean_age:37
        },
       },
   {
        coordinates: [4.570868 , -74.297333],
        country: {
            name: 'Colombia' ,
            population: 49648685,
            tourism:3904000,
            cases:6014563,
            deaths:136953,
            mean_age:30.1
        },
       },
   {
        coordinates: [-4.521666 , 21.964255],
        country: {
            name: 'Congo (Brazzaville)' ,
            population: 5244363,
            tourism:156000,
            cases:23860,
            deaths:375,
            mean_age:37
        },
       },
   {
        coordinates: [-1.142502 , 15.852951],
        country: {
            name: 'Congo (Kinshasa)' ,
            population: 84068091,
            tourism:14000,
            cases:85776,
            deaths:1316,
            mean_age:37
        },
       },
   {
        coordinates: [9.748917 , -83.753428],
        country: {
            name: 'Costa Rica' ,
            population: 4999441,
            tourism:3017000,
            cases:757093,
            deaths:7772,
            mean_age:31.4
        },
       },
   {
        coordinates: [7.54 , -5.305323],
        country: {
            name: "Cote d'Ivoire" ,
            population: 25069229,
            tourism:1965000,
            cases:81118,
            deaths:789,
            mean_age:37
        },
       },
   {
        coordinates: [45.1 , 15.2],
        country: {
            name: 'Croatia' ,
            population: 4087843,
            tourism:16645000,
            cases:1015185,
            deaths:14424,
            mean_age:42.6
        },
       },
   {
        coordinates: [21.521757 , -77.781167],
        country: {
            name: 'Cuba' ,
            population: 11338138,
            tourism:4684000,
            cases:1059834,
            deaths:8467,
            mean_age:41.1
        },
       },
   {
        coordinates: [35.126413 , 33.429859],
        country: {
            name: 'Cyprus' ,
            population: 1189265,
            tourism:3939000,
            cases:288063,
            deaths:785,
            mean_age:34.9
        },
       },
   {
        coordinates: [49.8175 , 15.473],
        country: {
            name: 'Czechia' ,
            population: 10065000,
            tourism:14000,
            cases:3385250,
            deaths:37765,
            mean_age:41.4
        },
       },
   {
        coordinates: [56.26392 , 9.501785],
        country: {
            name: 'Denmark' ,
            population: 5793636,
            tourism:12749000,
            cases:2289076,
            deaths:4038,
            mean_age:41.6
        },
       },
   {
        coordinates: [-100 , -100],
        country: {
            name: 'Diamond Princess' ,
            population: 712,
            tourism:14000,
            cases:712,
            deaths:13,
            mean_age:37
        },
       },
   {
        coordinates: [11.825138 , 42.590275],
        country: {
            name: 'Djibouti' ,
            population: 958920,
            tourism:14000,
            cases:15531,
            deaths:189,
            mean_age:23.7
        },
       },
   {
        coordinates: [15.414999 , -61.370976],
        country: {
            name: 'Dominica' ,
            population: 71625,
            tourism:63000,
            cases:10414,
            deaths:53,
            mean_age:37
        },
       },
   {
        coordinates: [18.735693 , -70.162651],
        country: {
            name: 'Dominican Republic' ,
            population: 10627165,
            tourism:6569000,
            cases:569024,
            deaths:4343,
            mean_age:26.1
        },
       },
   {
        coordinates: [-1.831239 , -78.183406],
        country: {
            name: 'Ecuador' ,
            population: 17084357,
            tourism:2535000,
            cases:781470,
            deaths:34854,
            mean_age:26.6
        },
       },
   {
        coordinates: [26.820553 , 30.802498],
        country: {
            name: 'Egypt' ,
            population: 98423595,
            tourism:11196000,
            cases:452821,
            deaths:23292,
            mean_age:24.7
        },
       },
   {
        coordinates: [13.794185 , -88.89653],
        country: {
            name: 'El Salvador' ,
            population: 6420744,
            tourism:1677300,
            cases:135109,
            deaths:3989,
            mean_age:25.8
        },
       },
   {
        coordinates: [1.650801 , 10.267895],
        country: {
            name: 'Equatorial Guinea' ,
            population: 1308974,
            tourism:14000,
            cases:15859,
            deaths:182,
            mean_age:22.2
        },
       },
   {
        coordinates: [15.179384 , 39.782334],
        country: {
            name: 'Eritrea' ,
            population: 3214000,
            tourism:14000,
            cases:9664,
            deaths:103,
            mean_age:18.9
        },
       },
   {
        coordinates: [58.595272 , 25.013607],
        country: {
            name: 'Estonia' ,
            population: 1321977,
            tourism:3234000,
            cases:415994,
            deaths:2106,
            mean_age:41.6
        },
       },
   {
        coordinates: [-26.5179414 , 31.4659],
        country: {
            name: 'Eswatini' ,
            population: 1136191,
            tourism:782000,
            cases:68781,
            deaths:1383,
            mean_age:37
        },
       },
   {
        coordinates: [9.145 , 40.489673],
        country: {
            name: 'Ethiopia' ,
            population: 109224559,
            tourism:849000,
            cases:467399,
            deaths:7421,
            mean_age:18.6
        },
       },
   {
        coordinates: [-16.578193 , 179.414413],
        country: {
            name: 'Fiji' ,
            population: 883483,
            tourism:870000,
            cases:63476,
            deaths:819,
            mean_age:27.6
        },
       },
   {
        coordinates: [61.92411 , 25.748151],
        country: {
            name: 'Finland' ,
            population: 5515525,
            tourism:3224000,
            cases:569973,
            deaths:2170,
            mean_age:42.5
        },
       },
   {
        coordinates: [46.227638 , 2.213749],
        country: {
            name: 'France' ,
            population: 66977107,
            tourism:89322000,
            cases:21075675,
            deaths:131833,
            mean_age:41.2
        },
       },
   {
        coordinates: [-0.803689 , 11.609444],
        country: {
            name: 'Gabon' ,
            population: 2119275,
            tourism:14000,
            cases:47426,
            deaths:302,
            mean_age:22.6
        },
       },
   {
        coordinates: [13.443182 , -15.310139],
        country: {
            name: 'Gambia' ,
            population: 2280000,
            tourism:14000,
            cases:11911,
            deaths:365,
            mean_age:17
        },
       },
   {
        coordinates: [42.315407 , 43.356892],
        country: {
            name: 'Georgia' ,
            population: 3726549,
            tourism:4757000,
            cases:1438353,
            deaths:15516,
            mean_age:38
        },
       },
   {
        coordinates: [51.165691 , 10.451526],
        country: {
            name: 'Germany' ,
            population: 82905782,
            tourism:38881000,
            cases:12391463,
            deaths:119939,
            mean_age:45.9
        },
       },
   {
        coordinates: [7.946527 , -1.023194],
        country: {
            name: 'Ghana' ,
            population: 29767108,
            tourism:14000,
            cases:157751,
            deaths:1419,
            mean_age:20.4
        },
       },
   {
        coordinates: [39.074208 , 21.824312],
        country: {
            name: 'Greece' ,
            population: 10731726,
            tourism:30123000,
            cases:2163240,
            deaths:24679,
            mean_age:43.3
        },
       },
   {
        coordinates: [12.262776 , -61.604171],
        country: {
            name: 'Grenada' ,
            population: 111454,
            tourism:185000,
            cases:13242,
            deaths:213,
            mean_age:27.2
        },
       },
   {
        coordinates: [15.783471 , -90.230759],
        country: {
            name: 'Guatemala' ,
            population: 17247807,
            tourism:1781000,
            cases:733960,
            deaths:16627,
            mean_age:21.3
        },
       },
   {
        coordinates: [9.945587 , -9.696645],
        country: {
            name: 'Guinea' ,
            population: 12414318,
            tourism:14000,
            cases:36329,
            deaths:436,
            mean_age:18.4
        },
       },
   {
        coordinates: [11.803749 , -15.180413],
        country: {
            name: 'Guinea-Bissau' ,
            population: 1874309,
            tourism:14000,
            cases:7849,
            deaths:161,
            mean_age:18.9
        },
       },
   {
        coordinates: [4.860416 , -58.93018],
        country: {
            name: 'Guyana' ,
            population: 779004,
            tourism:287000,
            cases:62156,
            deaths:1190,
            mean_age:24.6
        },
       },
   {
        coordinates: [18.971187 , -72.285215],
        country: {
            name: 'Haiti' ,
            population: 11123176,
            tourism:447000,
            cases:29939,
            deaths:807,
            mean_age:23
        },
       },
   {
        coordinates: [41.9029 , 12.4534],
        country: {
            name: 'Holy See' ,
            population: 825,
            tourism:14000,
            cases:29,
            deaths:0,
            mean_age:37
        },
       },
   {
        coordinates: [15.199999 , -86.241905],
        country: {
            name: 'Honduras' ,
            population: 9587522,
            tourism:14000,
            cases:391874,
            deaths:10512,
            mean_age:23
        },
       },
   {
        coordinates: [47.162494 , 19.503304],
        country: {
            name: 'Hungary' ,
            population: 9775564,
            tourism:17552000,
            cases:1695991,
            deaths:42360,
            mean_age:41.7
        },
       },
   {
        coordinates: [64.963051 , -19.020835],
        country: {
            name: 'Iceland' ,
            population: 352721,
            tourism:2343800,
            cases:85980,
            deaths:54,
            mean_age:36
        },
       },
   {
        coordinates: [20.593684 , 78.96288],
        country: {
            name: 'India' ,
            population: 1352617328,
            tourism:17423000,
            cases:42631421,
            deaths:508665,
            mean_age:26.7
        },
       },
   {
        coordinates: [-0.789275 , 113.921327],
        country: {
            name: 'Indonesia' ,
            population: 267663435,
            tourism:15810000,
            cases:4708043,
            deaths:144958,
            mean_age:28
        },
       },
   {
        coordinates: [32.427908 , 53.688046],
        country: {
            name: 'Iran' ,
            population: 81800269,
            tourism:7295000,
            cases:6780453,
            deaths:133570,
            mean_age:29.5
        },
       },
   {
        coordinates: [33.223191 , 43.679291],
        country: {
            name: 'Iraq' ,
            population: 38433600,
            tourism:14000,
            cases:2273535,
            deaths:24678,
            mean_age:19.4
        },
       },
   {
        coordinates: [53.41291 , -8.24389],
        country: {
            name: 'Ireland' ,
            population: 4867309,
            tourism:10926000,
            cases:1242806,
            deaths:6291,
            mean_age:36.9
        },
       },
   {
        coordinates: [31.046051 , 34.851612],
        country: {
            name: 'Israel' ,
            population: 8882800,
            tourism:4121000,
            cases:3394758,
            deaths:9466,
            mean_age:30.2
        },
       },
   {
        coordinates: [41.87194 , 12.56738],
        country: {
            name: 'Italy' ,
            population: 60421760,
            tourism:61567200,
            cases:12053330,
            deaths:150824,
            mean_age:45.9
        },
       },
   {
        coordinates: [18.109581 , -77.297508],
        country: {
            name: 'Jamaica' ,
            population: 2934855,
            tourism:2473000,
            cases:126886,
            deaths:2738,
            mean_age:29.4
        },
       },
   {
        coordinates: [36.204824 , 138.252924],
        country: {
            name: 'Japan' ,
            population: 126529100,
            tourism:31192000,
            cases:3842551,
            deaths:20234,
            mean_age:46.3
        },
       },
   {
        coordinates: [30.585164 , 36.238414],
        country: {
            name: 'Jordan' ,
            population: 9956011,
            tourism:4150000,
            cases:1450810,
            deaths:13477,
            mean_age:22.1
        },
       },
   {
        coordinates: [48.019573 , 66.923684],
        country: {
            name: 'Kazakhstan' ,
            population: 18272430,
            tourism:8789000,
            cases:1377390,
            deaths:18736,
            mean_age:29.3
        },
       },
   {
        coordinates: [-0.023559 , 37.906193],
        country: {
            name: 'Kenya' ,
            population: 51393010,
            tourism:14000,
            cases:322436,
            deaths:5629,
            mean_age:19
        },
       },
   {
        coordinates: [35.9078 , 127.7669],
        country: {
            name: 'Korea, South' ,
            population: 51606633,
            tourism:15347000,
            cases:1350630,
            deaths:7081,
            mean_age:37
        },
       },
   {
        coordinates: [29.31166 , 47.481766],
        country: {
            name: 'Kuwait' ,
            population: 4137309,
            tourism:8508000,
            cases:599039,
            deaths:2519,
            mean_age:33.4
        },
       },
   {
        coordinates: [41.20438 , 74.766098],
        country: {
            name: 'Kyrgyzstan' ,
            population: 6316000,
            tourism:14000,
            cases:200020,
            deaths:2927,
            mean_age:25.3
        },
       },
   {
        coordinates: [19.85627 , 102.495496],
        country: {
            name: 'Laos' ,
            population: 7062000,
            tourism:14000,
            cases:138765,
            deaths:591,
            mean_age:37
        },
       },
   {
        coordinates: [56.879635 , 24.603189],
        country: {
            name: 'Latvia' ,
            population: 1927174,
            tourism:1946000,
            cases:510833,
            deaths:5020,
            mean_age:42.5
        },
       },
   {
        coordinates: [33.854721 , 35.862285],
        country: {
            name: 'Lebanon' ,
            population: 6848925,
            tourism:1964000,
            cases:1012044,
            deaths:9824,
            mean_age:28.5
        },
       },
   {
        coordinates: [6.428055 , -9.429499],
        country: {
            name: 'Liberia' ,
            population: 4818977,
            tourism:14000,
            cases:7358,
            deaths:290,
            mean_age:18.6
        },
       },
   {
        coordinates: [26.3351 , 17.228331],
        country: {
            name: 'Libya' ,
            population: 6678567,
            tourism:14000,
            cases:466666,
            deaths:6113,
            mean_age:27.2
        },
       },
   {
        coordinates: [47.166 , 9.555373],
        country: {
            name: 'Liechtenstein' ,
            population: 37910,
            tourism:85300,
            cases:10451,
            deaths:74,
            mean_age:37
        },
       },
   {
        coordinates: [55.169438 , 23.881275],
        country: {
            name: 'Lithuania' ,
            population: 2801543,
            tourism:2825000,
            cases:807861,
            deaths:8090,
            mean_age:42.7
        },
       },
   {
        coordinates: [49.815273 , 6.129583],
        country: {
            name: 'Luxembourg' ,
            population: 607950,
            tourism:1018000,
            cases:173419,
            deaths:969,
            mean_age:39.3
        },
       },
   {
        coordinates: [-18.766947 , 46.869107],
        country: {
            name: 'Madagascar' ,
            population: 26262368,
            tourism:291000,
            cases:62844,
            deaths:1335,
            mean_age:18.7
        },
       },
   {
        coordinates: [4.210484 , 101.975766],
        country: {
            name: 'Malaysia' ,
            population: 31528585,
            tourism:25832000,
            cases:3019163,
            deaths:32114,
            mean_age:27.7
        },
       },
   {
        coordinates: [3.202778 , 73.22068],
        country: {
            name: 'Maldives' ,
            population: 515696,
            tourism:1484000,
            cases:158031,
            deaths:288,
            mean_age:27.9
        },
       },
   {
        coordinates: [17.570692 , -3.996166],
        country: {
            name: 'Mali' ,
            population: 19077690,
            tourism:14000,
            cases:30259,
            deaths:716,
            mean_age:16
        },
       },
   {
        coordinates: [35.937496 , 14.375416],
        country: {
            name: 'Malta' ,
            population: 484630,
            tourism:2599000,
            cases:69901,
            deaths:585,
            mean_age:40.9
        },
       },
   {
        coordinates: [21.00789 , -10.940835],
        country: {
            name: 'Mauritania' ,
            population: 4403319,
            tourism:14000,
            cases:58563,
            deaths:972,
            mean_age:19.7
        },
       },
   {
        coordinates: [-20.348404 , 57.552152],
        country: {
            name: 'Mauritius' ,
            population: 1265303,
            tourism:1399000,
            cases:70862,
            deaths:786,
            mean_age:35.6
        },
       },
   {
        coordinates: [23.634501 , -102.552784],
        country: {
            name: 'Mexico' ,
            population: 126190788,
            tourism:41313000,
            cases:5283852,
            deaths:312697,
            mean_age:27.5
        },
       },
   {
        coordinates: [47.411631 , 28.369885],
        country: {
            name: 'Moldova' ,
            population: 2706049,
            tourism:160000,
            cases:482842,
            deaths:10924,
            mean_age:37
        },
       },
   {
        coordinates: [43.750298 , 7.412841],
        country: {
            name: 'Monaco' ,
            population: 38682,
            tourism:347000,
            cases:9020,
            deaths:49,
            mean_age:37
        },
       },
   {
        coordinates: [46.862496 , 103.846656],
        country: {
            name: 'Mongolia' ,
            population: 3170208,
            tourism:529000,
            cases:875440,
            deaths:2145,
            mean_age:27.1
        },
       },
   {
        coordinates: [42.708678 , 19.37439],
        country: {
            name: 'Montenegro' ,
            population: 622227,
            tourism:2077000,
            cases:226142,
            deaths:2634,
            mean_age:37.7
        },
       },
   {
        coordinates: [31.791702 , -7.09262],
        country: {
            name: 'Morocco' ,
            population: 36029138,
            tourism:12289000,
            cases:1154531,
            deaths:15766,
            mean_age:27.9
        },
       },
   {
        coordinates: [-18.665695 , 35.529562],
        country: {
            name: 'Mozambique' ,
            population: 29495962,
            tourism:2743000,
            cases:224653,
            deaths:2189,
            mean_age:17.2
        },
       },
   {
        coordinates: [-22.95764 , 18.49041],
        country: {
            name: 'Namibia' ,
            population: 2448255,
            tourism:14000,
            cases:156765,
            deaths:3993,
            mean_age:21
        },
       },
   {
        coordinates: [28.394857 , 84.124008],
        country: {
            name: 'Nepal' ,
            population: 28087871,
            tourism:1173000,
            cases:972632,
            deaths:11882,
            mean_age:23.2
        },
       },
   {
        coordinates: [52.132633 , 5.291266],
        country: {
            name: 'Netherlands' ,
            population: 17231624,
            tourism:18780000,
            cases:5674315,
            deaths:21389,
            mean_age:42.1
        },
       },
   {
        coordinates: [-40.900557 , 174.885971],
        country: {
            name: 'New Zealand' ,
            population: 4841000,
            tourism:3686000,
            cases:19777,
            deaths:53,
            mean_age:37.3
        },
       },
   {
        coordinates: [12.865416 , -85.207229],
        country: {
            name: 'Nicaragua' ,
            population: 6465513,
            tourism:1256000,
            cases:17791,
            deaths:222,
            mean_age:25.2
        },
       },
   {
        coordinates: [17.607789 , 8.081666],
        country: {
            name: 'Niger' ,
            population: 22442948,
            tourism:157000,
            cases:8709,
            deaths:303,
            mean_age:14.9
        },
       },
   {
        coordinates: [9.081999 , 8.675277],
        country: {
            name: 'Nigeria' ,
            population: 195874740,
            tourism:14000,
            cases:253978,
            deaths:3141,
            mean_age:17.9
        },
       },
   {
        coordinates: [41.6086 , 21.7453],
        country: {
            name: 'North Macedonia' ,
            population: 2082958,
            tourism:707000,
            cases:286096,
            deaths:8736,
            mean_age:37
        },
       },
   {
        coordinates: [60.472024 , 8.468946],
        country: {
            name: 'Norway' ,
            population: 5311916,
            tourism:5688000,
            cases:1024379,
            deaths:1513,
            mean_age:39.2
        },
       },
   {
        coordinates: [21.512583 , 55.923255],
        country: {
            name: 'Oman' ,
            population: 4829483,
            tourism:2301000,
            cases:360999,
            deaths:4195,
            mean_age:29
        },
       },
   {
        coordinates: [30.375321 , 69.345116],
        country: {
            name: 'Pakistan' ,
            population: 212215030,
            tourism:14000,
            cases:1483798,
            deaths:29772,
            mean_age:22.5
        },
       },
   {
        coordinates: [8.537981 , -80.782127],
        country: {
            name: 'Panama' ,
            population: 4176873,
            tourism:1785000,
            cases:741651,
            deaths:7938,
            mean_age:28.4
        },
       },
   {
        coordinates: [-6.314993 , 143.95555],
        country: {
            name: 'Papua New Guinea' ,
            population: 8606316,
            tourism:140000,
            cases:38481,
            deaths:610,
            mean_age:21.7
        },
       },
   {
        coordinates: [-23.442503 , -58.443832],
        country: {
            name: 'Paraguay' ,
            population: 6956071,
            tourism:1181000,
            cases:620708,
            deaths:17844,
            mean_age:24.9
        },
       },
   {
        coordinates: [-9.189967 , -75.015152],
        country: {
            name: 'Peru' ,
            population: 31989256,
            tourism:4419000,
            cases:3435753,
            deaths:208120,
            mean_age:27.5
        },
       },
   {
        coordinates: [12.879721 , 121.774017],
        country: {
            name: 'Philippines' ,
            population: 106651922,
            tourism:7168000,
            cases:3634368,
            deaths:54930,
            mean_age:24.1
        },
       },
   {
        coordinates: [51.919438 , 19.145136],
        country: {
            name: 'Poland' ,
            population: 37974750,
            tourism:19622000,
            cases:5356647,
            deaths:108089,
            mean_age:39.7
        },
       },
   {
        coordinates: [39.399872 , -8.224454],
        country: {
            name: 'Portugal' ,
            population: 10283822,
            tourism:16186000,
            cases:3069128,
            deaths:20492,
            mean_age:43.9
        },
       },
   {
        coordinates: [25.354826 , 51.183884],
        country: {
            name: 'Qatar' ,
            population: 2781677,
            tourism:1819300,
            cases:350188,
            deaths:656,
            mean_age:31.3
        },
       },
   {
        coordinates: [45.943161 , 24.96676],
        country: {
            name: 'Romania' ,
            population: 19466145,
            tourism:11720000,
            cases:2550348,
            deaths:61520,
            mean_age:41.3
        },
       },
   {
        coordinates: [61.52401 , 105.318756],
        country: {
            name: 'Russia' ,
            population: 144478050,
            tourism:24551000,
            cases:13728138,
            deaths:332727,
            mean_age:38.7
        },
       },
   {
        coordinates: [-1.940278 , 29.873888],
        country: {
            name: 'Rwanda' ,
            population: 12301939,
            tourism:14000,
            cases:129295,
            deaths:1450,
            mean_age:19.4
        },
       },
   {
        coordinates: [17.357822 , -62.782998],
        country: {
            name: 'Saint Kitts and Nevis' ,
            population: 52441,
            tourism:14000,
            cases:5498,
            deaths:40,
            mean_age:37
        },
       },
   {
        coordinates: [13.909444 , -60.978893],
        country: {
            name: 'Saint Lucia' ,
            population: 181889,
            tourism:14000,
            cases:21932,
            deaths:347,
            mean_age:32.6
        },
       },
   {
        coordinates: [12.984305 , -61.287228],
        country: {
            name: 'Saint Vincent and the Grenadines' ,
            population: 110210,
            tourism:14000,
            cases:8144,
            deaths:102,
            mean_age:29.8
        },
       },
   {
        coordinates: [43.94236 , 12.457777],
        country: {
            name: 'San Marino' ,
            population: 33785,
            tourism:84000,
            cases:13861,
            deaths:110,
            mean_age:37
        },
       },
   {
        coordinates: [23.885942 , 45.079162],
        country: {
            name: 'Saudi Arabia' ,
            population: 33699947,
            tourism:15334000,
            cases:726251,
            deaths:8971,
            mean_age:29.8
        },
       },
   {
        coordinates: [14.497401 , -14.452362],
        country: {
            name: 'Senegal' ,
            population: 15854360,
            tourism:14000,
            cases:85370,
            deaths:1956,
            mean_age:18.3
        },
       },
   {
        coordinates: [44.016521 , 21.005859],
        country: {
            name: 'Serbia' ,
            population: 6982604,
            tourism:1711000,
            cases:1834974,
            deaths:14366,
            mean_age:40
        },
       },
   {
        coordinates: [-4.679574 , 55.491977],
        country: {
            name: 'Seychelles' ,
            population: 96762,
            tourism:362000,
            cases:38395,
            deaths:157,
            mean_age:34.6
        },
       },
   {
        coordinates: [1.352083 , 103.819836],
        country: {
            name: 'Singapore' ,
            population: 5638676,
            tourism:14673000,
            cases:460075,
            deaths:893,
            mean_age:40
        },
       },
   {
        coordinates: [48.669026 , 19.699024],
        country: {
            name: 'Slovakia' ,
            population: 5450000,
            tourism:14000,
            cases:1841934,
            deaths:18081,
            mean_age:39.2
        },
       },
   {
        coordinates: [46.151241 , 14.995463],
        country: {
            name: 'Slovenia' ,
            population: 2073894,
            tourism:4425000,
            cases:843495,
            deaths:6074,
            mean_age:43
        },
       },
   {
        coordinates: [5.152149 , 46.199616],
        country: {
            name: 'Somalia' ,
            population: 15008154,
            tourism:14000,
            cases:26203,
            deaths:1340,
            mean_age:16.5
        },
       },
   {
        coordinates: [-30.559482 , 22.937506],
        country: {
            name: 'South Africa' ,
            population: 57779622,
            tourism:10472000,
            cases:3640162,
            deaths:96985,
            mean_age:26.1
        },
       },
   {
        coordinates: [40.463667 , -3.74922],
        country: {
            name: 'Spain' ,
            population: 46796540,
            tourism:82773000,
            cases:10604200,
            deaths:95995,
            mean_age:43.2
        },
       },
   {
        coordinates: [7.873054 , 80.771797],
        country: {
            name: 'Sri Lanka' ,
            population: 21670000,
            tourism:2334000,
            cases:626966,
            deaths:15777,
            mean_age:32.3
        },
       },
   {
        coordinates: [12.862807 , 30.217636],
        country: {
            name: 'Sudan' ,
            population: 41801533,
            tourism:836000,
            cases:59631,
            deaths:3831,
            mean_age:18.9
        },
       },
   {
        coordinates: [3.919305 , -56.027783],
        country: {
            name: 'Suriname' ,
            population: 575991,
            tourism:14000,
            cases:76975,
            deaths:1298,
            mean_age:28.4
        },
       },
   {
        coordinates: [60.128161 , 18.643501],
        country: {
            name: 'Sweden' ,
            population: 10175214,
            tourism:7440000,
            cases:2397330,
            deaths:16501,
            mean_age:40.9
        },
       },
   {
        coordinates: [46.818188 , 8.227512],
        country: {
            name: 'Switzerland' ,
            population: 8513227,
            tourism:10362000,
            cases:2537734,
            deaths:12933,
            mean_age:42.2
        },
       },
   {
        coordinates: [34.802075 , 38.996815],
        country: {
            name: 'Syria' ,
            population: 16906283,
            tourism:14000,
            cases:52626,
            deaths:3026,
            mean_age:37
        },
       },
   {
        coordinates: [23.6978 , 120.9605],
        country: {
            name: 'Taiwan' ,
            population: 23780000,
            tourism:14000,
            cases:19515,
            deaths:851,
            mean_age:37
        },
       },
   {
        coordinates: [-6.369028 , 34.888822],
        country: {
            name: 'Tanzania' ,
            population: 56318348,
            tourism:1378000,
            cases:33436,
            deaths:792,
            mean_age:37
        },
       },
   {
        coordinates: [15.870032 , 100.992541],
        country: {
            name: 'Thailand' ,
            population: 69428524,
            tourism:38178000,
            cases:2593327,
            deaths:22436,
            mean_age:37.8
        },
       },
   {
        coordinates: [-8.874217 , 125.727539],
        country: {
            name: 'Timor-Leste' ,
            population: 1267972,
            tourism:75000,
            cases:21556,
            deaths:123,
            mean_age:17.4
        },
       },
   {
        coordinates: [8.619543 , 0.824782],
        country: {
            name: 'Togo' ,
            population: 7889094,
            tourism:573000,
            cases:36634,
            deaths:270,
            mean_age:18.9
        },
       },
   {
        coordinates: [10.691803 , -61.222503],
        country: {
            name: 'Trinidad and Tobago' ,
            population: 1389858,
            tourism:375000,
            cases:120003,
            deaths:3519,
            mean_age:33.9
        },
       },
   {
        coordinates: [33.886917 , 9.537499],
        country: {
            name: 'Tunisia' ,
            population: 11565204,
            tourism:8299000,
            cases:964957,
            deaths:27065,
            mean_age:31.1
        },
       },
   {
        coordinates: [38.963745 , 35.243322],
        country: {
            name: 'Turkey' ,
            population: 82319724,
            tourism:45768000,
            cases:12834534,
            deaths:90266,
            mean_age:29.9
        },
       },
   {
        coordinates: [37.09024 , -95.712891],
        country: {
            name: 'US' ,
            population: 326687501,
            tourism:79745920,
            cases:77707349,
            deaths:919255,
            mean_age:37.6
        },
       },
   {
        coordinates: [1.373333 , 32.290275],
        country: {
            name: 'Uganda' ,
            population: 42723139,
            tourism:14000,
            cases:162639,
            deaths:3575,
            mean_age:15.8
        },
       },
   {
        coordinates: [48.379433 , 31.16558],
        country: {
            name: 'Ukraine' ,
            population: 44622516,
            tourism:14104000,
            cases:4708604,
            deaths:109483,
            mean_age:40.3
        },
       },
   {
        coordinates: [23.424076 , 53.847818],
        country: {
            name: 'United Arab Emirates' ,
            population: 9630959,
            tourism:21286000,
            cases:866971,
            deaths:2284,
            mean_age:33.4
        },
       },
   {
        coordinates: [55.378051 , -3.435973],
        country: {
            name: 'United Kingdom' ,
            population: 66460344,
            tourism:36316000,
            cases:18266015,
            deaths:159518,
            mean_age:40.2
        },
       },
   {
        coordinates: [-32.522779 , -55.765835],
        country: {
            name: 'Uruguay' ,
            population: 3449299,
            tourism:3469000,
            cases:772757,
            deaths:6744,
            mean_age:34.9
        },
       },
   {
        coordinates: [41.377491 , 64.585262],
        country: {
            name: 'Uzbekistan' ,
            population: 32955400,
            tourism:5346000,
            cases:233000,
            deaths:1599,
            mean_age:26.3
        },
       },
   {
        coordinates: [6.42375 , -66.58973],
        country: {
            name: 'Venezuela' ,
            population: 28870000,
            tourism:14000,
            cases:503162,
            deaths:5529,
            mean_age:37
        },
       },
   {
        coordinates: [14.058324 , 108.277199],
        country: {
            name: 'Vietnam' ,
            population: 95540395,
            tourism:15498000,
            cases:2484481,
            deaths:38862,
            mean_age:37
        },
       },
   {
        coordinates: [-13.133897 , 27.849332],
        country: {
            name: 'Zambia' ,
            population: 17351822,
            tourism:1072000,
            cases:309293,
            deaths:3937,
            mean_age:17.1
        },
       },
   {
        coordinates: [-19.015438 , 29.154857],
        country: {
            name: 'Zimbabwe' ,
            population: 14439018,
            tourism:2580000,
            cases:231299,
            deaths:5374,
            mean_age:19
        },
       }
  ];
  
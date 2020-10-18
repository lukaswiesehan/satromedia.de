<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="true" :dark="false" />

    <!-- HEADER & STATS -->
    <section id="header" class="max-w-screen-xl px-4 md:mx-auto sm:px-8"> 
      <div class="scroll-reveal relative z-10 max-w-lg p-6 bg-white rounded-lg shadow-md md:p-10">
        <Title :icon="'fa-drafting-compass'" :heading="'Unsere Services'" :title="'Webdesign'"/>
        <p class="pt-4 sm:ml-12 text-black-500">{{$page.webdesign.header.text}}</p>
      </div>
      <div class="relative w-full h-48 mt-20 md:mt-0 sm:h-72 md:h-112 lg:h-112">
        <div class="scroll-reveal absolute bottom-0 left-0 z-10 inline-block ml-2 text-center xs:ml-16 sm:ml-24 xl:ml-64">
          <svg id="developer-illustration" viewBox="0 0 204 184" class="h-24 sm:h-32 md:h-40 lg:h-48">
            <g fill="none">
              <path fill="#2F2E41" d="M54.4952901,125.531792 L68.5435553,125.531792 L103.162496,112.087374 C103.162496,112.087374 127.74696,102.12855 125.740064,121.050319 C123.733168,139.972088 120.221102,165.367089 120.221102,165.367089 C120.221102,165.367089 109.183181,160.387676 103.162489,161.881499 C97.1417963,163.375322 101.155592,131.507079 101.155592,131.507079 C101.155592,131.507079 51.9866642,154.910321 47.4711498,151.922675 C42.9556355,148.935029 41.9521912,128.02149 41.9521912,128.02149 L54.4952901,125.531792 Z"/>
              <path fill="#000" d="M54.4952901,125.531792 L68.5435553,125.531792 L103.162496,112.087374 C103.162496,112.087374 127.74696,102.12855 125.740064,121.050319 C123.733168,139.972088 120.221102,165.367089 120.221102,165.367089 C120.221102,165.367089 109.183181,160.387676 103.162489,161.881499 C97.1417963,163.375322 101.155592,131.507079 101.155592,131.507079 C101.155592,131.507079 51.9866642,154.910321 47.4711498,151.922675 C42.9556355,148.935029 41.9521912,128.02149 41.9521912,128.02149 L54.4952901,125.531792 Z" opacity=".1"/>
              <path fill="#E1A498" d="M76.1688219,82.2953586 L92.9856548,106.45819 L132.191713,139.213989 C132.191713,139.213989 168.420102,147.651093 163.457307,153.606694 C158.494512,159.562294 128.221481,147.651093 128.221481,147.651093 C128.221481,147.651093 83.0600679,114.89529 81.5712312,112.413786 C80.0823945,109.932283 63.7051793,86.6061876 63.7051793,86.6061876 L76.1688219,82.2953586 Z"/>
              <path fill="#000" d="M76.1688219,82.2953586 L92.9856548,106.45819 L132.191713,139.213989 C132.191713,139.213989 168.420102,147.651093 163.457307,153.606694 C158.494512,159.562294 128.221481,147.651093 128.221481,147.651093 C128.221481,147.651093 83.0600679,114.89529 81.5712312,112.413786 C80.0823945,109.932283 63.7051793,86.6061876 63.7051793,86.6061876 L76.1688219,82.2953586 Z" opacity=".1"/>
              <path fill="#D0CDE1" d="M66.8127498,62.1097046 L77.689243,83.8262163 C77.689243,83.8262163 75.2173129,94.4319554 71.2622217,95.4420263 C67.3071305,96.4520973 50.498008,82.3111118 50.498008,82.3111118 L66.8127498,62.1097046 Z"/>
              <path fill="#000" d="M66.8127498,62.1097046 L77.689243,83.8262163 C77.689243,83.8262163 75.2173129,94.4319554 71.2622217,95.4420263 C67.3071305,96.4520973 50.498008,82.3111118 50.498008,82.3111118 L66.8127498,62.1097046 Z" opacity=".1"/>
              <path fill="#2F2E41" d="M200.376585,114.768544 L203.522996,128.214599 C203.558074,128.364503 203.552626,128.52152 203.507251,128.668428 L189.234512,174.876005 C189.11804,175.253081 188.76319,175.494676 188.382877,175.455831 C188.002564,175.416985 187.700088,175.108249 187.656939,174.714869 L185.682475,156.714207 C185.669362,156.594658 185.681197,156.473586 185.717178,156.359189 L198.817969,114.706238 C198.930277,114.34916 199.257765,114.112732 199.620004,114.127212 C199.982243,114.141693 200.29117,114.403562 200.376585,114.768544 Z"/>
              <polygon fill="#F2F2F2" points="199.079 115.679 201.992 127.194 189.367 169.249 186.454 156.232"/>
              <path fill="#2F2E41" d="M133.705274,178.023195 C134.203466,179.50682 185.517019,177.528651 186.015208,177.03411 C186.449566,176.414794 186.816929,175.751739 187.111202,175.055941 C187.579531,174.066857 188.007968,173.077772 188.007968,173.077772 L186.015215,157.064501 L135.199835,155.274262 C135.199835,155.274262 133.929424,168.844497 133.670357,175.055941 C133.60566,176.623635 133.60566,177.72645 133.705274,178.023195 Z"/>
              <polygon fill="#000" points="180.015 159.156 181.016 173.131 158.486 173.131 158.486 159.156" opacity=".1"/>
              <polygon fill="#000" points="150.59 163.842 150.717 163.814 150.117 170.025 138.287 170.025 138.287 163.842" opacity=".1"/>
              <path fill="#000" d="M133.705451,177.96566 C134.20476,179.606716 185.63332,177.418639 186.132625,176.871622 C186.567957,176.186588 186.936143,175.453174 187.231076,174.683544 L133.670467,174.683544 C133.605614,176.417589 133.605614,177.637427 133.705451,177.96566 Z" opacity=".1"/>
              <ellipse cx="74.193" cy="32.608" fill="#E1A498" rx="22.141" ry="22.515"/>
              <path fill="#E1A498" d="M72.250996 52.5566598C72.250996 52.5566598 64.7656066 65.4171524 63.2685303 72.3420333 61.7714539 79.2669142 40.8123697 58.4922714 40.8123697 58.4922714L38.0677291 51.3200742C38.0677291 51.3200742 57.7792452 42.1693384 56.2821689 34.749821 54.7850925 27.3303036 72.250996 52.5566598 72.250996 52.5566598zM76.6363821 92.3881857L96.9721234 119.230296 145.579501 155.516853C145.579501 155.516853 180.795049 162.972997 172.859139 168.440832 164.923228 173.908667 142.107534 163.470072 142.107534 163.470072 142.107534 163.470072 93.0041721 137.125036 82.5883016 126.189362 72.1724312 115.253689 52.8286853 96.8618714 52.8286853 96.8618714L76.6363821 92.3881857z"/>
              <path fill="#2F2E41" d="M48.9699834,133.545133 L54.9441902,143.041263 L90.5987914,131.780228 C98.4219644,129.309386 107.00045,130.218563 113.93941,134.6072 C120.162537,138.543095 124.145335,144.790548 115.184035,154.036781 C97.2614369,172.529246 85.3130385,162.533321 85.3130385,162.533321 C85.3130385,162.533321 25.0731827,191.021711 15.1161853,177.027414 C5.15918781,163.033116 4.66135458,156.035967 4.66135458,156.035967 C4.66135458,156.035967 42.9957842,132.045741 48.9699834,133.545133 Z"/>
              <path fill="#BFBECA" d="M124.192598,166.748777 C124.192598,166.748777 140.259185,177.218838 121.180111,182.204581 C102.101038,187.190323 88.0427729,180.210282 88.0427729,180.210282 C88.0427729,180.210282 71.4741036,180.210282 71.4741036,171.734515 C71.4741036,163.258749 76.9969946,162.261603 76.9969946,162.261603 L94.0677508,164.754475 C94.0677508,164.754475 114.653062,159.270163 124.192598,166.748777 Z"/>
              <path fill="#594642" d="M92.2557374,27.1170732 C93.7792319,27.7961963 95.2899524,28.600009 96.9462669,28.7971423 C98.6025813,28.9942756 100.488694,28.416027 101.272447,26.9437136 C101.695782,26.148463 101.744155,25.2130428 101.763897,24.3123627 C101.823812,21.5811088 101.626268,18.6284982 99.8953892,16.5148069 C98.7938233,15.16961 97.1858108,14.3216031 96.0455452,13.0090557 C95.2286043,12.0686911 94.6848945,10.9288759 94.0994568,9.82938024 C91.8818839,5.66464687 88.5985152,1.66204977 84.0353393,0.461399926 C82.1298711,-0.0399633193 80.1309594,-0.0154979088 78.1608316,0.0123129726 L66.669506,0.174422778 C64.8099128,0.200657319 62.921634,0.231144577 61.1414515,0.769360926 C57.4427245,1.88762902 54.7496588,4.99785103 52.2831969,7.97224313 C50.43792,10.1975219 48.5877588,12.4458183 47.2028834,14.9833108 C45.2173416,18.6862937 44.2133497,22.8360832 44.2866088,27.0371184 C44.2712194,28.1145502 44.4103355,29.1886265 44.699714,30.2265883 C45.0382443,31.1785463 45.4576686,32.0997709 45.9533912,32.980168 C48.1083949,37.2127483 49.3879563,42.4995224 46.9610259,46.5822785 C51.1768602,44.8602417 55.3481502,42.6023588 58.1291551,38.9963002 C59.3732528,37.3831103 60.3489244,35.4946467 62.0069135,34.3108565 C63.6649027,33.1270663 66.3664516,33.0243774 67.4302212,34.761758 C67.7958633,35.464582 67.9841473,36.2461291 67.9786792,37.0383491 C68.0563698,38.3424515 68.054249,39.6968002 68.6071981,40.8804392 C69.1601472,42.0640782 70.4773008,43.0191137 71.7348491,42.664921 C73.9005135,42.0549565 73.6931217,38.7312519 75.3611856,37.2214427 C76.6279693,36.0748421 78.5823519,36.2940328 80.2098069,35.7735305 C82.1059791,35.1670816 83.5287452,33.5244705 84.3394182,31.7062732 C84.9556207,30.3242572 84.9467179,26.7077237 86.1127355,25.9593097 C87.5749802,25.0207368 90.9003225,26.5128698 92.2557374,27.1170732 Z"/>
              <path fill="#E2E1EB" d="M36.7434947,49.1112075 C37.7496698,48.8421562 38.8089815,48.8448587 39.8137768,49.1190403 C43.0042486,49.9774757 50.1564155,52.2500072 51.6899247,55.7080347 C53.6780003,60.1911018 60.6362612,67.1647611 60.6362612,67.1647611 C60.6362612,67.1647611 70.0796148,76.6290124 68.0915391,83.1045547 C66.1034635,89.580097 58.6481856,97.0518732 58.6481856,97.0518732 C58.6481856,97.0518732 60.6362612,127.935219 50.6958869,135.905116 C40.7555125,143.875013 36.7793651,138.395708 36.7793651,145.867484 C36.7793651,153.33926 5.96422687,176.750834 0,162.305398 C0,162.305398 2.98211344,135.406995 1.98807562,125.942744 C1.0083731,116.614985 2.44260429,58.4178873 36.7434947,49.1112075 Z"/>
              <path fill="#E2E1EB" d="M52.8341961,61.8489004 C52.8341961,61.8489004 83.2966653,83.9800021 77.803432,93.3242434 C77.803432,93.3242434 59.3261957,102.17668 55.3311193,101.684883 C51.3360429,101.193087 35.855113,83.9800058 31.8600366,82.5045966 C27.8649603,81.0291873 25.8674202,54.471869 52.8341961,61.8489004 Z"/>
            </g>
          </svg>
          <p id="stat-loc" class="hidden mt-8 text-4xl sm:block font-display lg:text-6xl">{{statLoc}}<span class="text-4xl lg:text-5xl"></span></p>
          <p class="hidden text-xs font-bold tracking-widest uppercase sm:block md:text-sm text-dark-100">Zeilen Code</p>
        </div>
        <div class="scroll-reveal absolute bottom-0 right-0 inline-block -mr-8 text-center xs:mr-0">
          <svg id="designer-illustration" viewBox="0 0 746 493" class="h-64 sm:h-72 md:h-96 lg:h-128">
            <defs>
              <rect id="designer-b" width="536" height="342" x="0" y="0" rx="8"/>
              <filter id="designer-a" width="126.1%" height="140.9%" x="-13.1%" y="-14.6%" filterUnits="objectBoundingBox">
                <feOffset dy="20" in="SourceAlpha" result="shadowOffsetOuter1"/>
                <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="20"/>
                <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"/>
                <feOffset dy="4.5" in="SourceAlpha" result="shadowOffsetOuter2"/>
                <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="4.45"/>
                <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0"/>
                <feOffset dy="1.3" in="SourceAlpha" result="shadowOffsetOuter3"/>
                <feGaussianBlur in="shadowOffsetOuter3" result="shadowBlurOuter3" stdDeviation="1.35"/>
                <feColorMatrix in="shadowBlurOuter3" result="shadowMatrixOuter3" values="0 0 0 0 0.264832428   0 0 0 0 0.229513027   0 0 0 0 0.229513027  0 0 0 0.15 0"/>
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1"/>
                  <feMergeNode in="shadowMatrixOuter2"/>
                  <feMergeNode in="shadowMatrixOuter3"/>
                </feMerge>
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd" transform="translate(0 20)">
              <g fill-rule="nonzero" transform="translate(0 112)">
                <path fill="#8CA0C3" d="M114.305665,0 C99.6074319,-0.0251595804 85.0437087,2.80769169 71.4206192,8.34191959 C70.872084,8.56738161 70.3213902,8.79392323 69.770967,9.02559718 C27.4409922,26.9401452 -0.054455856,68.5602936 0,114.63852 L0,239.729715 C0,242.480371 2.22577574,244.709445 4.96844743,244.712545 L5.06710263,244.721193 C100.827839,262.16218 193.923544,271 281.8449,271 C283.163007,271 284.479854,271 285.795441,270.994054 C372.220004,270.730207 456.372787,261.892388 535.915705,244.72498 L536.031634,244.712545 C538.774346,244.709543 541,242.480412 541,239.729715 L541,4.98302667 C541,2.2323691 538.774307,0.00329292428 536.031634,0 L114.305665,0 Z"/>
                <g fill="#D1E6EB" transform="translate(27.205 135.5)">
                  <ellipse cx="2.746" cy="72.281" rx="2.746" ry="2.777"/>
                  <ellipse cx="2.746" cy="60.71" rx="2.746" ry="2.777"/>
                  <ellipse cx="2.746" cy="49.139" rx="2.746" ry="2.777"/>
                  <ellipse cx="2.746" cy="37.569" rx="2.746" ry="2.777"/>
                  <ellipse cx="2.746" cy="25.998" rx="2.746" ry="2.777"/>
                  <ellipse cx="2.746" cy="14.427" rx="2.746" ry="2.777"/>
                  <ellipse cx="2.746" cy="2.856" rx="2.746" ry="2.777"/>
                  <ellipse cx="11.441" cy="72.281" rx="2.746" ry="2.777"/>
                  <ellipse cx="11.441" cy="60.71" rx="2.746" ry="2.777"/>
                  <ellipse cx="11.441" cy="49.139" rx="2.746" ry="2.777"/>
                  <ellipse cx="11.441" cy="37.569" rx="2.746" ry="2.777"/>
                  <ellipse cx="11.441" cy="25.998" rx="2.746" ry="2.777"/>
                  <ellipse cx="11.441" cy="14.427" rx="2.746" ry="2.777"/>
                  <ellipse cx="11.441" cy="2.856" rx="2.746" ry="2.777"/>
                  <ellipse cx="20.137" cy="72.281" rx="2.746" ry="2.777"/>
                  <ellipse cx="20.137" cy="60.71" rx="2.746" ry="2.777"/>
                  <ellipse cx="20.137" cy="49.139" rx="2.746" ry="2.777"/>
                  <ellipse cx="20.137" cy="37.569" rx="2.746" ry="2.777"/>
                  <ellipse cx="20.137" cy="25.998" rx="2.746" ry="2.777"/>
                  <ellipse cx="20.137" cy="14.427" rx="2.746" ry="2.777"/>
                  <ellipse cx="20.137" cy="2.856" rx="2.746" ry="2.777"/>
                  <ellipse cx="28.832" cy="72.281" rx="2.746" ry="2.777"/>
                  <ellipse cx="28.832" cy="60.71" rx="2.746" ry="2.777"/>
                  <ellipse cx="37.528" cy="72.281" rx="2.746" ry="2.777"/>
                  <ellipse cx="37.528" cy="60.71" rx="2.746" ry="2.777"/>
                  <ellipse cx="37.528" cy="49.139" rx="2.746" ry="2.777"/>
                  <ellipse cx="28.832" cy="49.139" rx="2.746" ry="2.777"/>
                  <ellipse cx="28.832" cy="37.569" rx="2.746" ry="2.777"/>
                  <ellipse cx="28.832" cy="25.998" rx="2.746" ry="2.777"/>
                  <ellipse cx="28.832" cy="14.427" rx="2.746" ry="2.777"/>
                  <ellipse cx="28.832" cy="2.856" rx="2.746" ry="2.777"/>
                </g>
                <path fill="#282850" d="M274.10785,17.9109195 L91.222571,17.9109195 C89.3523091,17.9128238 87.8347701,19.439213 87.8347701,21.3226817 L87.8347701,178.812381 C87.8347701,180.695849 89.35231,182.222237 91.222571,182.224138 L274.10785,182.224138 C275.97812,182.222243 277.49569,180.695858 277.49569,178.812381 L277.49569,21.3226651 C277.49569,19.4391942 275.978115,17.9128177 274.10785,17.9109195 L274.10785,17.9109195 Z M276.138016,178.812381 C276.138016,179.942346 275.229885,180.859219 274.10785,180.863273 L91.222571,180.863273 C90.0996151,180.861461 89.1924416,179.943267 89.1924416,178.812381 L89.1924416,21.3226651 C89.1924416,20.1917795 90.0996151,19.2735856 91.222571,19.2717736 L274.10785,19.2717736 C275.229885,19.2758276 276.138016,20.1927003 276.138016,21.3226651 L276.138016,178.812381 Z"/>
                <path fill="#3F3D56" d="M259.643402,145.623563 L150.770391,145.623563 C149.496075,145.625884 148.46408,146.845486 148.46408,148.349138 C148.46408,149.85279 149.496075,151.072392 150.770391,151.074713 L259.643402,151.074713 C260.917718,151.072392 261.949713,149.85279 261.949713,148.349138 C261.949713,146.845486 260.917718,145.625884 259.643402,145.623563 L259.643402,145.623563 Z"/>
                <path fill="#FFF" d="M198.208717 158.862069L150.798467 158.862069C149.509221 158.862069 148.46408 160.08235 148.46408 161.587644 148.46408 163.092937 149.509221 164.313218 150.798467 164.313218L198.208717 164.313218C199.497963 164.313218 200.543103 163.092937 200.543103 161.587644 200.543103 160.08235 199.497963 158.862069 198.208717 158.862069zM298.430402 129.270115L114.315287 129.270115C111.711703 129.267046 109.601935 127.17288 109.599138 124.588842L109.599138 44.3965224C109.602047 41.8125742 111.711793 39.7185498 114.315287 39.7155172L298.430402 39.7155172C301.033896 39.7185498 303.143642 41.8125742 303.146552 44.3965224L303.146552 124.588831C303.143761 127.172873 301.033991 129.267046 298.430402 129.270115zM114.315287 41.3581077C112.625381 41.3600571 111.254154 42.7193028 111.254154 44.3965224L111.254154 124.588831C111.254154 126.266101 112.625329 127.625434 114.315287 127.627513L298.430402 127.627513C300.12036 127.625434 301.491536 126.266101 301.491536 124.588831L301.491536 44.3965224C301.491536 42.7193028 300.120309 41.3600571 298.430402 41.3581077L114.315287 41.3581077z"/>
                <path fill="#282850" d="M249.415773,238.293103 L118.246583,238.293103 C116.905706,238.29153 115.819103,237.2054 115.817529,235.865106 L115.817529,203.341791 C115.819103,202.001497 116.905706,200.915367 118.246583,200.913793 L249.415773,200.913793 C250.75665,200.915367 251.843253,202.001497 251.844828,203.341791 L251.844828,235.865106 C251.843253,237.2054 250.75665,238.29153 249.415773,238.293103 L249.415773,238.293103 Z M118.246583,201.88499 C117.442028,201.885866 116.789148,202.537585 116.789148,203.341791 L116.789148,235.865106 C116.789148,236.669309 117.44203,237.321025 118.246583,237.321901 L249.415773,237.321901 C250.220324,237.321022 250.873203,236.669307 250.873203,235.865106 L250.873203,203.341791 C250.873203,202.537587 250.220327,201.885869 249.415773,201.88499 L118.246583,201.88499 Z"/>
              </g>
              <g transform="translate(129)">
                <use fill="#000" filter="url(#designer-a)" xlink:href="#designer-b"/>
                <use fill="#272730" xlink:href="#designer-b"/>
                <g fill="#A6A6AF" transform="translate(15 15)">
                  <circle cx="6" cy="6" r="6"/>
                  <circle cx="26" cy="6" r="6"/>
                  <circle cx="46" cy="6" r="6"/>
                </g>
                <rect width="91.095" height="5.446" x="324.001" y="141.268" fill="#8CA0C3" fill-rule="nonzero"/>
                <rect width="140.147" height="5.446" x="324.001" y="159.941" fill="#8CA0C3" fill-rule="nonzero"/>
                <rect width="114.453" height="5.446" x="324.001" y="177.835" fill="#E5F0F5" fill-rule="nonzero"/>
                <rect width="66.959" height="5.446" x="324.001" y="195.73" fill="#8CA0C3" fill-rule="nonzero"/>
                <rect width="100.438" height="5.446" x="324.001" y="213.625" fill="#8CA0C3" fill-rule="nonzero"/>
                <rect width="10.9" height="10.892" x="282.736" y="139.712" fill="#E6E6E6" fill-rule="nonzero"/>
                <rect width="10.9" height="10.892" x="282.736" y="157.606" fill="#6C63FF" fill-rule="nonzero"/>
                <rect width="10.9" height="10.892" x="282.736" y="175.501" fill="#E6E6E6" fill-rule="nonzero"/>
                <rect width="10.9" height="10.892" x="282.736" y="193.396" fill="#E6E6E6" fill-rule="nonzero"/>
                <rect width="10.9" height="10.892" x="282.736" y="211.291" fill="#E6E6E6" fill-rule="nonzero"/>
                <path fill="#D1E6EB" fill-rule="nonzero" d="M428.332845,210.512586 L403.149619,210.512586 C401.431065,200.730152 401.431065,190.729802 403.149619,180.947368 L428.332845,180.947368 C425.495746,190.604477 425.495752,200.85548 428.332845,210.512586 L428.332845,210.512586 Z"/>
                <ellipse cx="142.979" cy="168.11" fill="#D1E6EB" fill-rule="nonzero" rx="67.348" ry="67.3"/>
                <path fill="#FFF" fill-rule="nonzero" d="M146.482405,104.700229 L138.696481,104.700229 L138.696481,96.9199085 L146.482405,96.9199085 L146.482405,104.700229 Z M140.253666,103.144165 L144.92522,103.144165 L144.92522,98.4759725 L140.253666,98.4759725 L140.253666,103.144165 Z"/>
                <rect width="39.708" height="1.556" x="145.704" y="100.032" fill="#FFF" fill-rule="nonzero"/>
                <ellipse cx="185.412" cy="100.81" fill="#FFF" fill-rule="nonzero" rx="1.557" ry="1.556"/>
                <rect width="38.93" height="1.556" x="100.545" y="100.032" fill="#FFF" fill-rule="nonzero"/>
                <ellipse cx="100.545" cy="100.81" fill="#FFF" fill-rule="nonzero" rx="1.557" ry="1.556"/>
                <path fill="#FFF" fill-rule="nonzero" d="M214.219941,171.610984 L206.434018,171.610984 L206.434018,163.830664 L214.219941,163.830664 L214.219941,171.610984 Z M207.991202,170.05492 L212.662757,170.05492 L212.662757,165.386728 L207.991202,165.386728 L207.991202,170.05492 Z"/>
                <rect width="1.557" height="38.902" x="209.548" y="170.833" fill="#FFF" fill-rule="nonzero"/>
                <ellipse cx="210.327" cy="210.513" fill="#FFF" fill-rule="nonzero" rx="1.557" ry="1.556"/>
                <rect width="1.557" height="38.902" x="209.548" y="125.707" fill="#FFF" fill-rule="nonzero"/>
                <ellipse cx="210.327" cy="125.707" fill="#FFF" fill-rule="nonzero" rx="1.557" ry="1.556"/>
                <path fill="#FFF" fill-rule="nonzero" d="M78.744868,171.610984 L70.9589443,171.610984 L70.9589443,163.830664 L78.744868,163.830664 L78.744868,171.610984 Z M72.516129,170.05492 L77.1876833,170.05492 L77.1876833,165.386728 L72.516129,165.386728 L72.516129,170.05492 Z"/>
                <rect width="1.557" height="38.902" x="74.073" y="170.833" fill="#FFF" fill-rule="nonzero"/>
                <ellipse cx="74.852" cy="210.513" fill="#FFF" fill-rule="nonzero" rx="1.557" ry="1.556"/>
                <rect width="1.557" height="40.458" x="74.073" y="124.151" fill="#FFF" fill-rule="nonzero"/>
                <ellipse cx="74.852" cy="125.707" fill="#FFF" fill-rule="nonzero" rx="1.557" ry="1.556"/>
                <path fill="#FFF" fill-rule="nonzero" d="M146.482405,239.299771 L138.696481,239.299771 L138.696481,231.519451 L146.482405,231.519451 L146.482405,239.299771 Z M140.253666,237.743707 L144.92522,237.743707 L144.92522,233.075515 L140.253666,233.075515 L140.253666,237.743707 Z"/>
                <rect width="39.708" height="1.556" x="146.482" y="234.632" fill="#FFF" fill-rule="nonzero"/>
                <ellipse cx="185.412" cy="235.41" fill="#FFF" fill-rule="nonzero" rx="1.557" ry="1.556"/>
                <rect width="38.93" height="1.556" x="100.545" y="234.632" fill="#FFF" fill-rule="nonzero"/>
                <ellipse cx="100.545" cy="235.41" fill="#FFF" fill-rule="nonzero" rx="1.557" ry="1.556"/>
              </g>
              <g fill-rule="nonzero" transform="translate(121 81)">
                <rect width="625" height="1.556" y="389.667" fill="#2F2E41"/>
                <polygon fill="#3F3D56" points="209.371 239.678 257.18 147.778 270.081 155.311 215.442 243.444"/>
                <path fill="#D1E6EB" d="M182.044755,258.891925 C182.044755,258.891925 190.836385,265.709609 191.834411,251.122417 C192.091755,246.438404 194.329507,242.076129 198.002274,239.098784 C201.983082,235.959645 207.711924,233.812645 214.601843,237.968271 C220.734688,241.667276 222.114578,247.030832 221.777272,251.811791 C221.165917,258.763884 217.139123,264.978098 211.001143,268.441693 C204.166269,272.445884 193.37689,275.459698 182.044762,265.617395 C182.044755,265.617388 175.230482,258.144651 182.044755,258.891925 Z"/>
                <ellipse cx="265.8" cy="22.944" fill="#E1A498" rx="18.291" ry="18.278"/>
                <path fill="#E1A498" d="M256.849315,32.1099012 C256.849315,32.1099012 261.619735,57.2120674 259.711571,62.0394021 C257.803408,66.8667369 286.425903,60.1084698 286.425903,60.1084698 C286.425903,60.1084698 280.701405,35.0063035 281.655483,29.2134988 C282.609561,23.4206941 256.849315,32.1099012 256.849315,32.1099012 Z"/>
                <polygon fill="#E1A498" points="224.159 119 226.105 144.925 235.762 185.642 238.753 196.778 243.618 179.494 238.753 140.125 237.101 122.401"/>
                <path fill="#E1A498" d="M325.342466,114.333333 L325.342466,141.339043 C325.342466,141.339043 322.458064,176.060648 316.689253,184.741064 C310.920441,193.42148 308.997509,150.019459 308.997509,150.019459 L313.517939,118.191307 L325.342466,114.333333 Z"/>
                <path fill="#41414D" d="M239.852748,198.476349 C239.852748,198.476349 235.027788,204.26142 238.887755,263.07633 C242.747721,321.89124 236.957775,364.315096 249.502653,364.315096 C249.502653,364.315096 245.642687,376.849419 256.257593,377.8136 C266.872498,378.777778 271.697458,379.741954 272.662452,376.849419 C273.627445,373.956883 275.557425,360.45838 272.662452,360.45838 C272.662452,360.45838 272.662452,364.315096 274.592431,348.888239 C276.522411,333.461381 276.522418,260.183779 281.347371,250.541992 L296.787237,286.216612 C296.787237,286.216612 296.787237,302.607651 299.682209,310.321083 C302.577182,318.034516 307.402142,362.386719 307.402142,362.386719 L306.437149,369.135971 C306.437149,369.135971 329.596932,372.992687 330.561934,369.135971 C331.526935,365.279255 331.526927,359.494184 330.561934,357.56583 C329.59694,355.637475 329.596948,355.637468 331.526927,351.780759 C333.456906,347.92405 333.456914,345.031507 332.491921,342.138972 C331.526927,339.246437 331.526927,276.57481 331.526927,276.57481 C331.526927,276.57481 329.596955,200.404681 318.017056,196.547964 C306.437156,192.691248 239.852748,198.476349 239.852748,198.476349 Z"/>
                <path fill="#2F2E41" d="M252.639293 369.444444L244.965453 383.082165C244.965453 383.082165 232.975069 378.698614 235.373139 389.901025 255.996605 391.362217 270.385068 389.413966 270.385068 389.413966 270.385068 389.413966 275.181225 391.362217 276.14045 388.439841 277.099675 385.517466 273.742371 375.289187 270.86468 375.289187 267.986989 375.289187 252.639293 369.444444 252.639293 369.444444zM308.26796 365.977658C308.26796 365.977658 300.516191 383.076711 303.423102 384.026668 306.330014 384.976625 332.49222 388.77641 334.430174 389.726352 336.368128 390.676295 346.057821 391.626252 347.026802 385.926568 347.995782 380.226883 342.181944 378.326984 342.181944 378.326984 342.181944 378.326984 331.523262 376.427084 328.61635 366.927615 325.709438 357.428146 308.26796 365.977658 308.26796 365.977658z"/>
                <path fill="#E2E1EB" d="M288.262779,56.5871934 C288.262779,56.5871934 262.204245,51.7660082 256.413454,56.5871934 C250.622663,61.4083787 226.494396,71.0507416 226.494396,75.8719193 C226.494396,80.6930969 239.041096,127.940665 239.041096,127.940665 C239.041096,127.940665 232.28518,199.29416 239.041096,201.222637 C245.797013,203.151114 257.378587,197.36569 270.89042,204.115345 C284.402254,210.865 323.007472,198.329929 323.007472,198.329929 C323.007472,198.329929 308.530506,136.61879 312.391031,125.04795 C316.251555,113.47711 319.146947,73.9434195 319.146947,73.9434195 C319.146947,73.9434195 302.739745,56.5871934 288.262779,56.5871934 Z"/>
                <path fill="#E2E1EB" d="M233.155934 73.1111111L226.411883 75.0487296C226.411883 75.0487296 211.960343 120.582852 217.740956 122.52047 223.521569 124.458089 239.899985 128.333333 241.826853 128.333333 243.753722 128.333333 233.155934 73.1111111 233.155934 73.1111111zM303.549191 68.4444444L319.13027 74.1999977C319.13027 74.1999977 339.580431 111.611109 334.711342 116.407409 329.842253 121.203708 308.41828 126 308.41828 126L303.549191 68.4444444z"/>
                <path fill="#594642" d="M265.178499,0.166337529 C263.66162,-0.110452956 262.10242,-0.0411210355 260.615663,0.369230074 C259.425701,0.899923988 258.330256,1.62366344 257.372979,2.51160879 C255.635933,3.90581523 253.780721,5.14375465 251.828706,6.21117264 C250.273061,7.06172393 248.60086,7.84896214 247.514819,9.25675629 C247.001409,9.96820363 246.591428,10.7497988 246.297272,11.5779076 C244.426318,16.3901137 243.923509,21.6321417 244.845238,26.7160686 C244.948835,27.4384475 245.164635,28.1399123 245.484721,28.794733 C246.4825,30.646241 248.686274,31.3759047 250.542718,32.3464881 C254.067342,34.1892218 256.739133,37.2921377 259.629994,40.034397 C260.703741,41.1139367 261.910372,42.0504963 263.220427,42.8212094 C267.34465,45.0859293 272.385652,44.3471127 277.015296,43.5462852 C277.677918,43.5449979 278.312611,43.2773435 278.778463,42.8027461 C279.244314,42.3281488 279.502772,41.6858842 279.496454,41.018547 L283.150758,24.4648319 C283.813158,22.0121965 284.128467,19.4776609 284.08735,16.9362467 C283.832388,12.9178311 281.672362,7.35139089 278.744196,4.49696533 C275.332339,1.17110229 269.638279,0.641863145 265.178499,0.166337529 Z"/>
              </g>
            </g>
          </svg>
          <p id="stat-pixels" class="hidden mt-8 text-4xl sm:block font-display lg:text-6xl">{{statPixels}}<span class="-mr-20 text-4xl sm:mr-0 lg:text-5xl"></span></p>
          <p class="hidden text-xs font-bold tracking-widest uppercase sm:block md:text-sm text-dark-100">Gestaltete Pixel</p>
        </div>
      </div>
      <div class="scroll-reveal block mt-8 text-center sm:hidden">
        <p id="stat-loc" class="text-4xl font-display lg:text-6xl">{{statLoc}}<span class="text-4xl lg:text-5xl"></span></p>
        <p class="text-xs font-bold tracking-widest uppercase md:text-sm text-dark-100">Zeilen Code</p>
      </div>
      <div class="scroll-reveal block mt-8 text-center sm:hidden">
        <p id="stat-loc" class="text-4xl font-display lg:text-6xl">{{statPixels}}<span class="text-4xl lg:text-5xl"></span></p>
        <p class="text-xs font-bold tracking-widest uppercase md:text-sm text-dark-100">Gestaltete Pixel</p>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="service" class="scroll-reveal max-w-screen-lg px-4 mx-auto mt-16 sm:px-8 md:mt-24 lg:mt-40">
      <div class="hidden md:block">
        <div class="md:flex">
          <div class="flex-shrink-0 px-4 md:px-0">
            <Window class="relative z-20 max-w-sm">
              <div class="p-4 pb-8 xs:pb-12 xs:p-8">
                <div v-for="(service, i) in $page.webdesign.services" :key="i">
                  <div class="flex">
                    <div class="flex-shrink-0 w-6 h-6 border-2 border-gray-500 rounded-md"><i class="ml-1 -mt-1 text-2xl service-tick fas fa-check text-light-900" v-bind:id="'service-tick-' + i"></i></div>
                    <div class="ml-8 font-bold text-gray-500">
                      <p v-on:click="selectService(i)" class="transition-all duration-300 ease-in-out transform cursor-pointer hover:-translate-y-1 hover:text-gray-300" v-bind:class="{'text-light-900': selectedService == i}">{{service.title}} <i class="fas fa-chevron-right"></i></p>
                    </div>
                  </div>
                  <div v-if="i < ($page.webdesign.services.length - 1)" class="h-8 my-2 ml-3 border-l-2 border-gray-500"></div>
                </div>
              </div>
            </Window>
          </div>
          <div>
            <Title :icon="'fa-clipboard-check'" :heading="'Webdesign'" :title="'Unser Service'" class="hidden mb-12 ml-16 md:flex"/>
            <div class="relative z-10 p-8 pt-24 -mt-16 bg-white rounded-lg shadow-md lg:p-10 md:pl-32 lg:pl-40 lg:pb-12 md:-ml-24 md:mt-0 md:pt-8">
              <h3 class="font-display">{{$page.webdesign.services[selectedService].title}}</h3>
              <p class="pt-4 text-black-500">{{$page.webdesign.services[selectedService].description}}</p>
            </div>
          </div>
        </div>
        <div id="service-image" class="relative w-10/12 mx-auto overflow-hidden rounded-lg shadow-lg -mt-24">
          <img v-bind:src="$page.webdesign.services[selectedService].image" v-bind:alt="$page.webdesign.services[selectedService].title" class="object-cover object-center w-full">
          <div class="absolute top-0 left-0 w-full h-full bg-opacity-25 bg-dark-900"></div>
        </div>
      </div>
      <div class="md:hidden">
        <Title :icon="'fa-clipboard-check'" :heading="'Webdesign'" :title="'Unser Service'" class="scroll-reveal block mb-12"/>
        <Window class="relative z-20 max-w-sm mx-auto">
          <div class="p-4 pb-8 xs:pb-12 xs:p-8">
            <div v-for="(service, i) in $page.webdesign.services" :key="i">
              <div class="flex">
                <div class="flex-shrink-0 w-6 h-6 border-2 border-gray-500 rounded-md"><i class="ml-1 -mt-1 text-2xl service-tick fas fa-check text-light-900" v-bind:id="'service-tick-' + i"></i></div>
                <div class="ml-8 font-bold text-gray-500">
                  <p v-on:click="selectService(i)" class="transition-all duration-300 ease-in-out transform cursor-pointer hover:-translate-y-1 hover:text-gray-300" v-bind:class="{'text-light-900': selectedService == i}">{{service.title}} <i class="fas fa-chevron-right"></i></p>
                </div>
              </div>
              <div v-if="i < ($page.webdesign.services.length - 1)" class="h-8 my-2 ml-3 border-l-2 border-gray-500"></div>
            </div>
          </div>
        </Window>
        <div id="service-image" class="z-10 relative w-10/12 mx-auto overflow-hidden rounded-lg shadow-lg -mt-8">
          <img v-bind:src="$page.webdesign.services[selectedService].image" v-bind:alt="$page.webdesign.services[selectedService].title" class="object-cover object-center w-full">
          <div class="absolute top-0 left-0 w-full h-full bg-opacity-25 bg-dark-900"></div>
        </div>
        <div>
          <Title :icon="'fa-clipboard-check'" :heading="'Webdesign'" :title="'Unser Service'" class="hidden mb-12 ml-16 md:flex"/>
          <div class="relative p-8 pt-24 -mt-16 bg-white rounded-lg shadow-md lg:p-10 md:pl-32 lg:pl-40 lg:pb-12 md:-ml-24 md:mt-0 md:pt-8">
            <h3 class="font-display">{{$page.webdesign.services[selectedService].title}}</h3>
            <p class="pt-4 text-black-500">{{$page.webdesign.services[selectedService].description}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="scroll-reveal max-w-2xl px-4 mx-auto mt-16 text-center sm:px-8 md:mt-24">
      <h3 class="font-display">{{$page.webdesign.cta.heading}}</h3>
      <p class="pt-4 text-black-500">{{$page.webdesign.cta.text}}</p>
      <a href="mailto:kontak@satromedia.de?subject=Anfrage%20Webdesign" class="inline-block px-6 py-3 mt-12 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 ease-in-out transform rounded-full shadow-sm bg-black-900 hover:-translate-y-1 hover:shadow-md hover:text-light-900">Ihr Projekt starten <i class="fas fa-chevron-right"></i></a>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="mt-16 md:mt-24 lg:mt-32">
      <div class="max-w-screen-lg px-4 mx-auto sm:px-8">
        <Title class="scroll-reveal" :icon="'fa-desktop'" :heading="'Webdesign'" :title="'Latest Work'"/>
      </div>
      <div class="max-w-screen-xl px-4 mx-auto mt-12 sm:px-8">
        <div v-for="(project, i) in $page.webdesign.projects" :key="i" class="scroll-reveal">
          <Window class="relative w-11/12 max-w-screen-lg mx-auto md:mx-0">
            <img v-bind:src="project.screenshot_desktop" alt="Screenshot Desktop" class="w-full">
            <div class="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-opacity-25 bg-dark-900 hover:bg-opacity-0"></div>
          </Window>
          <div class="flex-row-reverse hidden md:-mt-72 lg:-mt-96 md:flex">
            <div class="relative w-48 overflow-hidden shadow-lg md:w-56 lg:w-64 border-black-900" style="border-radius: 2.5rem; border-width: .75rem">
              <img v-bind:src="project.screenshot_mobile" alt="Screenshot Mobile" class="w-full">
              <div class="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-opacity-25 bg-dark-900 hover:bg-opacity-0"></div>
            </div>
          </div>
          <div class="relative z-10 max-w-xl p-6 mx-auto -mt-4 bg-white rounded-lg shadow-md md:-mt-40 lg:-mt-32 md:p-10">
            <h3 class="font-display">{{project.title}}</h3>
            <p class="pt-4 text-black-500">{{project.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer :dark="false"/>
  </Layout>
</template>

<page-query>
  query {
    webdesign(id: "6") {
      id
      header {
        text
      }
      stats {
        loc
        pixels
      }
      services {
        title
        description
        image
      }
      cta {
        heading
        text
      }
      projects {
        title
        description
        screenshot_desktop
        screenshot_mobile
      }
    }
  }
</page-query>

<script>
  import Navbar from '../components/Navbar.vue'
  import Title from '../components/Title.vue'
  import Window from '../components/Window.vue'
  import Footer from '../components/Footer.vue'

  import {gsap, TweenLite} from 'gsap/all'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  
  export default {
    name: 'Webdesign',
    metaInfo: {
      title: 'Webdesign'
    },
    components: {
      Navbar, 
      Title,
      Window,
      Footer,
    },
    data() {
      return {
        statLoc: 0,
        statPixels: 0,
        selectedService: 0
      }
    },
    methods: {
      sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
      },  
      selectService(id) {
        for(var i = this.$page.webdesign.services.length - 1; i >= id + 1 ; i--) {
          gsap.to('#service-tick-' + i, {scale: 0, duration: 0.2, delay: 0.1 * (this.selectedService - i)})
        }
        for(var i = 0; i <= id; i++) {
          gsap.to('#service-tick-' + i, {scale: 1, duration: 0.8, ease: 'back.out(3)', delay: 0.1 * (i - this.selectedService - 1)})
        }
        this.selectedService = id
        gsap.fromTo('#service-image', {translateY: -100, opacity: 0}, {translateY: 0, opacity: 1, duration: 2.0, ease: 'power3'})
      },  
      animations() {
        gsap.to('#app', {opacity: 1, duration: 0.2})
        //Stat upcount animation:
        var counter1 = {var: 0}
        TweenLite.to(counter1, 1.6, {
          var: this.$page.webdesign.stats.loc,
          ease: 'power3',
          scrollTrigger: '#stat-loc',
          onUpdate: () => {this.statLoc = Math.ceil(counter1.var).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        })
        var counter2 = {var: 0}
        TweenLite.to(counter2, 1.2, {
          var: this.$page.webdesign.stats.pixels,
          ease: 'power3',
          scrollTrigger: '#stat-pixels',
          onUpdate: () => {this.statPixels = Math.ceil(counter2.var).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        })
        //Scroll reveal animations:
        const elements = gsap.utils.toArray('.scroll-reveal')
        elements.forEach(element => {
          gsap.from(element, {scrollTrigger: {trigger: element}, y: 100, opacity: 0, scale: 0.95, duration: 1.6, ease: 'power3'})
        })
      }
    },
    async mounted() { 
      gsap.registerPlugin(ScrollTrigger)
      await this.sleep(50)
      this.animations()
      this.selectService(0)
    } 
  }
</script>
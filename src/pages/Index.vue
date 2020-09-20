<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="false" :dark="true" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl md:mx-auto px-4 sm:px-8 -mt-20 xs:-mt-32 md:-mt-64">
      <Window id="header-window">
        <video width="100%" height="100%" muted playsinline autoplay preload loop>
          <source v-bind:src="$page.landing.header_video" type="video/mp4">
          <img v-bind:src="$page.landing.header_thumbnail" alt="Satro Media Showreel">
        </video>
        <div class="flex items-center absolute left-0 top-0 w-full h-full bg-dark-900 bg-opacity-25">
          <img src="../assets/img/satro_logo.png" alt="Satro Media Logo" class="w-2/3 mx-auto -mt-8 sm:-mt-12 md:-mt-20 lg:-mt-24">
        </div>
      </Window>
    </section>

    <!-- QUOTE -->
    <section id="quote" class="max-w-screen-lg mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <div class="flex">
        <div class="text-3xl"><i class="fas fa-quote-right text-dark-100 pr-6"></i></div>
        <div><p class="text-lg md:text-3xl font-display">{{$page.landing.cite}}</p></div>
      </div>
    </section>

    <!-- INTRO -->
    <section id="intro" class="md:pb-12">
      <div class="relative mt-12 pt-12">
        <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-light-900 to-dark-100 opacity-50"></div>
        <div class="max-w-screen-lg mx-auto px-4 sm:px-8">
          <div class="relative md:flex">
            <div>
              <div class="relative w-64 h-56 md:h-64 lg:w-112 lg:h-96 md:-mb-12">
                <Window id="portrait-1" class="absolute top-0 left-0 fade-in-up">
                  <img v-bind:src="$page.landing.portraits[0].photo" alt="Satro Media Gründer" class="object-cover w-32 h-40 lg:w-56 lg:h-64">
                  <div class="absolute w-full h-full top-0 left-0 bg-dark-900 bg-opacity-25 transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 flex flex-col-reverse">
                    <div class="p-4 text-white">
                      <p class="font-bold">Henning Trogisch</p>
                      <p class="text-xs">henning@satromedia.de</p>
                    </div>
                  </div>
                </Window>
                <Window id="portrait-2" class="absolute bottom-0 right-0">
                  <img v-bind:src="$page.landing.portraits[1].photo" alt="Satro Media Gründer" class="object-cover w-32 h-40 lg:w-56 lg:h-64">
                  <div class="absolute w-full h-full top-0 left-0 bg-dark-900 bg-opacity-25 transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 flex flex-col-reverse">
                    <div class="p-4 text-white">
                      <p class="font-bold">Mika Sannmann</p>
                      <p class="text-xs">mika@satromedia.de</p>
                    </div>
                  </div>
                </Window>
              </div>
            </div>
            <div class="py-12 md:pt-0 md:ml-16">
              <p class="text-black-500">{{$page.landing.intro}}</p>
              <div class="pt-8">
                <p class="text-dark-300">Mika Sannmann & Henning Trogisch</p>
                <p class="text-dark-300 italic">Gründer SaTro Media</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="mt-16 md:mt-24 lg:mt-40">
      <div class="max-w-screen-lg mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div id="service-1" class="flex">
          <div v-on:mouseenter="hover_im" class="top-service bg-white rounded-lg shadow-md p-6 pt-0 flex flex-col justify-between mt-24 md:mt-36 lg:mt-48 mb-12 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div class="top-service-image -mt-24 md:-mt-36 lg:-mt-48 mb-6 transition-all duration-300 ease-in-out">
              <div class="relative rounded-lg overflow-hidden shadow-lg">
                <img v-bind:src="$page.landing.topServices[0].cover" v-bind:alt="$page.landing.topServices[0].title" class="mx-auto">
                <div class="flex items-center absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-50 p-20 md:p-12">
                  <svg width="170" height="170" viewBox="0 0 170 170" class="mx-auto">
                    <g fill="none">
                        <g id="im-bg" fill="#E5F0F5" transform="translate(38 11)">
                          <polygon points="0 62.92 5.985 62.92 5.985 73.973 0 73.973"/>
                          <polygon points="42.748 141.995 48.733 141.995 48.733 147.947 42.748 147.947"/>
                          <polygon points="46.168 119.037 52.153 119.037 52.153 124.989 46.168 124.989"/>
                          <path d="M11.9694656,68.5882353 L34.540458,68.5882353 L34.540458,79.9251337 L40.1832061,79.9251337 L40.1832061,65.7540107 C40.1832061,64.1951872 38.9135878,62.9197861 37.3618321,62.9197861 L14.7908397,62.9197861 C13.239084,62.9197861 11.9694656,64.1951872 11.9694656,65.7540107 L11.9694656,68.5882353 Z"/>
                          <polygon points="46.168 73.973 60.702 73.973 60.702 79.925 46.168 79.925"/>
                          <path d="M14.7908397 56.9679144L37.3618321 56.9679144C38.9135878 56.9679144 40.1832061 55.6925134 40.1832061 54.1336898L40.1832061 48.4652406 34.540458 48.4652406 34.540458 51.2994652 11.9694656 51.2994652 11.9694656 54.1336898C11.9694656 55.6925134 13.239084 56.9679144 14.7908397 56.9679144zM112 159L112 102.28669C112 94.7533425 109.321985 87.4332035 104.3888 81.7476586L100.089881 76.5240642 95.7557252 80.1485991 100.089881 85.4432627C104.14214 90.0983026 106.362074 96.1036594 106.362074 102.28669L106.362074 159 112 159zM74.5364351 159L77.4032211 159 77.4032211 153.334174C77.4032211 152.696768 77.1882121 152.059363 76.7581942 151.563603 70.5229347 143.950149 69.6987338 133.326725 74.6439396 124.827986L77.009038 120.755674C77.6540648 119.65792 77.4390559 118.241463 76.5431853 117.356178L59.3424695 100.3587C56.583188 97.5257865 56.6190228 93.0639484 59.4141391 90.2664468 62.2092554 87.5043565 66.7602782 87.4689451 69.6270641 90.1956239L92.5613518 112.858928 96.610687 108.857439 91.7371509 104.006075 91.7371509 82.5113472 86.003579 82.5113472 86.003579 98.340249 78.5857703 91.0100864 80.270007 91.0100864 80.270007 85.3442603 72.6730242 85.3442603C67.9069925 81.5198277 61.0983759 81.5198277 56.3323442 85.3442603L45.8685754 85.3442603 45.8685754 91.0100864 52.283009 91.0100864C51.6379822 92.8160685 51.4229732 94.7636962 51.6379822 96.6759126L45.8685754 96.6759126 45.8685754 102.341739 53.6447324 102.341739C54.1105851 103.049967 54.6839423 103.722784 55.2931343 104.360189L58.9841212 108.007565 45.8685754 108.007565 45.8685754 113.673391 64.753528 113.673391 70.4870999 119.339217 57.3357193 119.339217 57.3357193 125.005043 68.229506 125.005043C67.4411398 126.811025 66.796113 128.723242 66.3660951 130.670869L45.8685754 130.670869 45.8685754 136.336695 65.7927379 136.336695C65.7210682 142.392047 67.5486443 148.341165 71.0246223 153.334174L14.3339298 153.334174C9.56789816 153.334174 5.73357193 149.545153 5.73357193 144.835435L5.73357193 142.002522 0 142.002522 0 144.835435C0 152.661357 6.4144336 159 14.3339298 159L74.5364351 159zM91.480916 22.9572193L46.1679389 22.9572193 46.1679389 17.2231205 85.8073176 17.2231205C85.8073176 16.1726796 85.8073176 15.2191127 85.8073176 14.3624196 85.8073176 10.0716768 82.4670142 5.74098408 77.2880932 5.74098408 73.8354792 5.74098408 63.4620945 5.74098408 46.1679389 5.74098408L46.1679389 0C61.6006517 0 71.9740365 0 77.2880932 0 85.2591783 0 91.480916 6.46008411 91.480916 14.3624196 91.480916 19.6306432 91.480916 22.4955764 91.480916 22.9572193z"/>
                          <polygon points="65.832 73.973 71.817 73.973 71.817 79.925 65.832 79.925"/>
                        </g>
                        <g fill="#8CA0C3">
                          <g id="im-bubble-1" transform="translate(11.05 84.971)">
                            <path d="M11.3333333,11.2884258 C5.06458333,11.2884258 0,16.3272369 0,22.5640871 L0,50.7532404 C0,56.9900906 5.06458333,62.0289017 11.3333333,62.0289017 L56.6666667,62.0289017 C62.9354167,62.0289017 68,56.9900906 68,50.7532404 L68,22.5640871 C68,16.3272369 62.9354167,11.2884258 56.6666667,11.2884258 L45.3333333,11.2884258 L45.3333333,2.83167978 C45.3333333,1.80982297 44.7666667,0.823202602 43.8458333,0.32989242 C42.925,-0.163417763 41.7916667,-0.0929448802 40.9416667,0.470838186 L24.65,11.2884258 L11.3333333,11.2884258 Z M27.0583333,16.4681827 L39.6666667,8.11714602 L39.6666667,14.1073411 C39.6666667,15.6577445 40.9416667,16.9262564 42.5,16.9262564 L56.6666667,16.9262564 C59.7833333,16.9262564 62.3333333,19.4632802 62.3333333,22.5640871 L62.3333333,50.7532404 C62.3333333,53.8540473 59.7833333,56.3910711 56.6666667,56.3910711 L11.3333333,56.3910711 C8.21666667,56.3910711 5.66666667,53.8540473 5.66666667,50.7532404 L5.66666667,22.5640871 C5.66666667,19.4632802 8.21666667,16.9262564 11.3333333,16.9262564 L25.5,16.9262564 C26.0666667,16.9262564 26.5979167,16.7500742 27.0583333,16.4681827 Z"/>
                            <path d="M24.3666667,50.6141673 C25.2520833,51.1054895 26.3145833,51.1054895 27.2,50.6141673 L47.0333333,39.3839445 C47.91875,38.8926223 48.45,37.9450722 48.45,36.9624277 C48.45,35.9446888 47.91875,35.0322332 47.0333333,34.540911 L27.2,23.3106882 C26.3145833,22.819366 25.2520833,22.819366 24.3666667,23.3106882 C23.48125,23.8020105 22.95,24.7495605 22.95,25.7672994 L22.95,48.2277449 C22.95,49.2103894 23.48125,50.122845 24.3666667,50.6141673 Z M28.6166667,30.5752386 L39.9145833,36.9624277 L28.6166667,43.3496169 L28.6166667,30.5752386 Z"/>
                          </g>
                          <g id="im-bubble-2">
                            <path d="M11.2928571,56.6367131 L24.5619643,56.6367131 L40.7954464,67.5038824 C41.6777009,68.0702495 42.7716964,68.1410454 43.6892411,67.6454742 C44.6067857,67.1499029 45.1714286,66.1941584 45.1714286,65.167618 L45.1714286,56.672111 L67.7571429,56.672111 C74.0035045,56.672111 79.05,51.6102048 79.05,45.3447684 L79.05,11.3273426 C79.05,5.06190623 74.0035045,1.0658141e-13 67.7571429,1.0658141e-13 L11.2928571,1.0658141e-13 C5.04649554,1.0658141e-13 9.23705556e-14,5.06190623 9.23705556e-14,11.3273426 L9.23705556e-14,45.3093704 C9.23705556e-14,51.5748068 5.04649554,56.6367131 11.2928571,56.6367131 Z M67.7571429,50.9730417 L42.3482143,50.9730417 C40.7954464,50.9730417 39.525,52.2473678 39.525,53.8048774 L39.525,59.8225282 L26.9616964,51.433215 C26.5029241,51.1146335 25.9382813,50.9730417 25.4089286,50.9730417 L11.2928571,50.9730417 C8.57551339,50.9730417 6.24636161,49.0261547 5.75229911,46.3713088 L28.0909821,23.9644092 L45.8772321,44.3536259 C46.8653571,45.4863602 48.5945759,45.627952 49.7591518,44.7076054 L61.8989732,34.9731703 L73.2977009,46.4067068 C72.8036384,49.0615527 70.4744866,50.9730417 67.7571429,50.9730417 Z M5.64642857,11.3273426 C5.64642857,8.21232339 8.18732143,5.66367131 11.2928571,5.66367131 L67.7571429,5.66367131 C70.8626786,5.66367131 73.4035714,8.21232339 73.4035714,11.3273426 L73.4035714,38.4775669 L64.1222545,29.1679072 C63.0988393,28.1413668 61.4754911,28.0705709 60.3462054,28.9555195 L48.3475446,38.5837608 L30.3495536,17.9467584 C29.8202009,17.3449934 29.1143973,16.9910139 28.3027232,16.9910139 C27.5263393,16.955616 26.7499554,17.2741975 26.2206027,17.8051667 L5.64642857,38.4775669 L5.64642857,11.3273426 Z"/>
                            <path d="M51,28.0404624 C55.7104167,28.0404624 59.5,24.2521676 59.5,19.5433526 C59.5,14.8345376 55.7104167,11.0462428 51,11.0462428 C46.2895833,11.0462428 42.5,14.8345376 42.5,19.5433526 C42.5,24.2521676 46.2895833,28.0404624 51,28.0404624 Z M51,16.7109827 C52.5583333,16.7109827 53.8333333,17.9855491 53.8333333,19.5433526 C53.8333333,21.1011561 52.5583333,22.3757225 51,22.3757225 C49.4416667,22.3757225 48.1666667,21.1011561 48.1666667,19.5433526 C48.1666667,17.9855491 49.4416667,16.7109827 51,16.7109827 Z"/>
                          </g>
                          <g id="im-bubble-3" transform="translate(90.95 39.936)">
                            <path d="M79.05,8.49688819 C79.05,3.78819599 75.2739509,1.42108547e-14 70.5803571,1.42108547e-14 L39.525,1.42108547e-14 L33.8785714,1.42108547e-14 L8.46964286,1.42108547e-14 C3.77604911,1.42108547e-14 9.23705556e-14,3.78819599 9.23705556e-14,8.49688819 L9.23705556e-14,31.1552567 C9.23705556e-14,35.8639489 3.77604911,39.6521449 8.46964286,39.6521449 L25.4089286,39.6521449 L25.4089286,48.1490331 C25.4089286,49.2819515 26.079442,50.3440625 27.1381473,50.768907 C28.1968527,51.1937514 29.3967188,50.9813292 30.2083929,50.167044 L40.6895759,39.6521449 L70.5803571,39.6521449 C75.2739509,39.6521449 79.05,35.8639489 79.05,31.1552567 C79.05,19.8260724 79.05,19.8260724 79.05,8.49688819 Z M73.4035714,31.1552567 C73.4035714,32.7130195 72.133125,33.9875528 70.5803571,33.9875528 L39.525,33.9875528 C38.7839063,33.9875528 38.0428125,34.2707824 37.5134598,34.8018379 L31.0553571,41.3161188 L31.0553571,36.8198488 C31.0553571,35.262086 29.7849107,33.9875528 28.2321429,33.9875528 L8.46964286,33.9875528 C6.916875,33.9875528 5.64642857,32.7130195 5.64642857,31.1552567 L5.64642857,8.49688819 C5.64642857,6.93912536 6.916875,5.66459213 8.46964286,5.66459213 L70.5803571,5.66459213 C72.133125,5.66459213 73.4035714,6.93912536 73.4035714,8.49688819 L73.4035714,31.1552567 Z"/>
                            <polygon points="11.05 11.046 22.1 11.046 22.1 16.994 11.05 16.994"/>
                            <polygon points="28.05 11.046 68 11.046 68 16.994 28.05 16.994"/>
                            <polygon points="11.05 22.092 39.1 22.092 39.1 28.04 11.05 28.04"/>
                            <polygon points="45.05 22.092 51 22.092 51 28.04 45.05 28.04"/>
                            <polygon points="56.1 22.092 67.15 22.092 67.15 28.04 56.1 28.04"/>
                          </g>
                        </g>
                      </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-4 px-4 xs:px-16 sm:px-24 md:px-8 lg:px-16 text-center">
              <h3 class="font-display">{{$page.landing.topServices[0].title}}</h3>
              <p class="my-4 text-sm lg:text-base">{{$page.landing.topServices[0].description}}</p>
              <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest hover:text-dark-300">Mehr dazu <i class="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
        <div id="service-2" class="flex">
          <div v-on:mouseenter="hover_cp" class="top-service bg-white rounded-lg shadow-md p-6 pt-0 flex flex-col justify-between mt-24 md:mt-36 lg:mt-48 mb-12 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div class="top-service-image -mt-24 md:-mt-36 lg:-mt-48 mb-6 transition-all duration-300 ease-in-out">
              <div class="relative rounded-lg overflow-hidden shadow-lg">
                <img v-bind:src="$page.landing.topServices[1].cover" v-bind:alt="$page.landing.topServices[1].title" class="mx-auto">
                <div class="flex items-center absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-50 p-20 md:p-12">
                  <svg width="170" height="170" viewBox="0 0 170 170" class="mx-auto">
                    <g fill="none">
                      <g id="cp-bg" fill="#E5F0F5">
                        <polygon points="93.5 120.7 98.6 120.7 98.6 125.8 93.5 125.8"/>
                        <polygon points="104.55 120.7 109.65 120.7 109.65 125.8 104.55 125.8"/>
                        <polygon points="82.45 120.7 87.55 120.7 87.55 125.8 82.45 125.8"/>
                        <path d="M156.290323,21.9354839 L82.2580645,21.9354839 L82.2580645,8.22580645 C82.2580645,3.7016129 78.5564516,0 74.0322581,0 L8.22580645,0 C3.7016129,0 0,3.7016129 0,8.22580645 L0,63.0645161 C0,67.5887097 3.7016129,71.2903226 8.22580645,71.2903226 L21.9354839,71.2903226 L21.9354839,123.387097 C21.9354839,130.961694 28.0705645,137.096774 35.6451613,137.096774 L70.5362903,137.096774 L66.4233871,153.548387 L54.8387097,153.548387 C50.3145161,153.548387 46.6129032,157.25 46.6129032,161.774194 L46.6129032,170 L145.322581,170 L145.322581,161.774194 C145.322581,157.25 141.620968,153.548387 137.096774,153.548387 L125.512097,153.548387 L121.399194,137.096774 L156.290323,137.096774 C163.864919,137.096774 170,130.961694 170,123.387097 L170,35.6451613 C170,28.0705645 163.864919,21.9354839 156.290323,21.9354839 Z M38.3870968,71.2903226 L74.0322581,71.2903226 C78.5564516,71.2903226 82.2580645,67.5887097 82.2580645,63.0645161 L82.2580645,38.3870968 L153.548387,38.3870968 L153.548387,109.677419 L38.3870968,109.677419 L38.3870968,71.2903226 Z M5.48387097,63.0645161 L5.48387097,8.22580645 C5.48387097,6.71774194 6.71774194,5.48387097 8.22580645,5.48387097 L74.0322581,5.48387097 C75.5403226,5.48387097 76.7741935,6.71774194 76.7741935,8.22580645 L76.7741935,63.0645161 C76.7741935,64.5725806 75.5403226,65.8064516 74.0322581,65.8064516 L8.22580645,65.8064516 C6.71774194,65.8064516 5.48387097,64.5725806 5.48387097,63.0645161 Z M139.83871,161.774194 L139.83871,164.516129 L52.0967742,164.516129 L52.0967742,161.774194 C52.0967742,160.266129 53.3306452,159.032258 54.8387097,159.032258 L137.096774,159.032258 C138.604839,159.032258 139.83871,160.266129 139.83871,161.774194 Z M119.891129,153.548387 L72.0443548,153.548387 L76.1572581,137.096774 L115.743952,137.096774 L119.891129,153.548387 Z M164.516129,123.387097 C164.516129,127.91129 160.814516,131.612903 156.290323,131.612903 L35.6451613,131.612903 C31.1209677,131.612903 27.4193548,127.91129 27.4193548,123.387097 L27.4193548,71.2903226 L32.9032258,71.2903226 L32.9032258,109.677419 C32.9032258,112.693548 35.3709677,115.16129 38.3870968,115.16129 L153.548387,115.16129 C156.564516,115.16129 159.032258,112.693548 159.032258,109.677419 L159.032258,38.3870968 C159.032258,35.3709677 156.564516,32.9032258 153.548387,32.9032258 L82.2580645,32.9032258 L82.2580645,27.4193548 L156.290323,27.4193548 C160.814516,27.4193548 164.516129,31.1209677 164.516129,35.6451613 L164.516129,123.387097 Z"/>
                      </g>
                      <g fill="#8CA0C3" transform="translate(11 9)">
                        <path id="cp-bullhorn" d="M49.4313947,8.48599838 L49.4313947,-2.55795385e-13 L35.1855414,-2.55795385e-13 L13.2160326,8.21225649 L8.23856578,8.21225649 C3.7073546,8.21225649 -5.75539616e-13,11.9077719 -5.75539616e-13,16.424513 L-5.75539616e-13,27.3741883 C-5.75539616e-13,30.9328328 2.29993295,33.9439935 5.49237719,35.0731788 L5.49237719,54.7483766 C5.49237719,57.7595373 7.96394692,60.2232143 10.9847544,60.2232143 L16.4771316,60.2232143 C19.497939,60.2232143 21.9695088,57.7595373 21.9695088,54.7483766 L21.9695088,38.8371297 L35.1855414,43.7987013 L49.4313947,43.7987013 L49.4313947,35.3127029 C55.6789737,34.0466467 60.4161491,28.5033736 60.4161491,21.8993506 C60.4161491,15.2953277 55.6789737,9.75205459 49.4313947,8.48599838 Z M16.4771316,12.8316508 L32.9542631,6.6724584 L32.9542631,37.0920252 L16.4771316,30.9328328 L16.4771316,12.8316508 Z M5.49237719,16.424513 C5.49237719,14.9189326 6.72816206,13.6870942 8.23856578,13.6870942 L10.9847544,13.6870942 L10.9847544,30.1116071 L8.23856578,30.1116071 C6.72816206,30.1116071 5.49237719,28.8797687 5.49237719,27.3741883 L5.49237719,16.424513 Z M16.4771316,54.7483766 L10.9847544,54.7483766 L10.9847544,35.5864448 L13.2160326,35.5864448 L16.4771316,36.7840655 L16.4771316,54.7483766 Z M43.9390175,38.3238636 L38.4466403,38.3238636 L38.4466403,5.47483766 L43.9390175,5.47483766 L43.9390175,38.3238636 Z M49.4313947,29.5983411 L49.4313947,14.2003602 C52.6238389,15.3295455 54.9237719,18.3407062 54.9237719,21.8993506 C54.9237719,25.4579951 52.6238389,28.4691558 49.4313947,29.5983411 Z" transform="translate(76.584 34.777)"/>
                        <path id="cp-slider" d="M13.8276398,6.39488462e-14 C10.2324534,6.39488462e-14 7.19037267,2.24953497 6.04959239,5.37202381 L9.59232693e-14,5.37202381 L9.59232693e-14,10.7440476 L6.04959239,10.7440476 C7.19037267,13.8665365 10.2324534,16.1160714 13.8276398,16.1160714 C17.4228261,16.1160714 20.4649068,13.8665365 21.6056871,10.7440476 L44.2484472,10.7440476 L44.2484472,5.37202381 L21.6056871,5.37202381 C20.4649068,2.24953497 17.4228261,6.39488462e-14 13.8276398,6.39488462e-14 Z M13.8276398,10.7440476 C12.3065994,10.7440476 11.0621118,9.53534226 11.0621118,8.05803571 C11.0621118,6.58072917 12.3065994,5.37202381 13.8276398,5.37202381 C15.3486801,5.37202381 16.5931677,6.58072917 16.5931677,8.05803571 C16.5931677,9.53534226 15.3486801,10.7440476 13.8276398,10.7440476 Z" transform="translate(33.186 78.036)"/>
                        <path id="cp-playbutton" d="M-5.32907052e-15,-6.39488462e-14 L-5.32907052e-15,31.3839286 L31.484472,15.6745094 L-5.32907052e-15,-6.39488462e-14 Z M5.60346555,9.00673367 L18.9467179,15.6745094 L5.60346555,22.3422851 L5.60346555,9.00673367 Z" transform="translate(18.72)"/>
                        <g id="cp-text" transform="translate(0 34.777)">
                          <polygon points="0 0 5.106 0 5.106 5.089 0 5.089"/>
                          <polygon points="11.062 0 60.416 0 60.416 5.089 11.062 5.089"/>
                          <polygon points="0 11.027 60.416 11.027 60.416 16.116 0 16.116"/>
                        </g>
                        <g id="cp-dots" transform="translate(109.77 89.063)">
                          <polygon points="0 0 5.106 0 5.106 5.089 0 5.089"/>
                          <polygon points="10.211 0 15.317 0 15.317 5.089 10.211 5.089"/>
                          <polygon points="22.124 0 27.23 0 27.23 5.089 22.124 5.089"/>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-4 px-4 xs:px-16 sm:px-24 md:px-8 lg:px-16 text-center">
              <h3 class="font-display">{{$page.landing.topServices[1].title}}</h3>
              <p class="my-4 text-sm lg:text-base">{{$page.landing.topServices[1].description}}</p>
              <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest hover:text-dark-300">Mehr dazu <i class="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </div> 
      </div>
      <div class="max-w-screen-xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-x-8">
        <div id="service-3" class="flex">
          <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between mb-12 md:mb-0 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div class="px-20 py-4 md:px-12 md:py-8">
              <img src="../assets/img/digitale_konzepte.svg" v-bind:alt="$page.landing.services[0].title" class="mx-auto">
            </div>
            <div class="mt-4 px-4 xs:px-16 sm:px-24 md:px-0 lg:px-6 text-center">
              <h3 class="font-display">{{$page.landing.services[0].title}}</h3>
              <p class="my-4 text-sm lg:text-base">{{$page.landing.services[0].description}}</p>
              <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest hover:text-dark-300">Mehr dazu <i class="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
        <div id="service-4" class="flex">
          <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between mb-12 md:mb-0 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div class="px-20 py-4 md:px-12 md:py-8">
              <img src="../assets/img/webdesign.svg" v-bind:alt="$page.landing.services[1].title" class="mx-auto">
            </div>
            <div class="mt-4 px-4 xs:px-16 sm:px-24 md:px-0 lg:px-6 text-center">
              <h3 class="font-display">{{$page.landing.services[1].title}}</h3>
              <p class="my-4 text-sm lg:text-base">{{$page.landing.services[1].description}}</p>
              <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest hover:text-dark-300">Mehr dazu <i class="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
        <div id="service-5" class="flex">
          <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between mb-12 md:mb-0 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div class="px-20 py-4 md:px-12 md:py-8">
              <img src="../assets/img/online_marketing.svg" v-bind:alt="$page.landing.services[2].title" class="mx-auto">
            </div>
            <div class="mt-4 px-4 xs:px-16 sm:px-24 md:px-0 lg:px-6 text-center">
              <h3 class="font-display">{{$page.landing.services[2].title}}</h3>
              <p class="my-4 text-sm lg:text-base">{{$page.landing.services[2].description}}</p>
              <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest hover:text-dark-300">Mehr dazu <i class="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REFERENCES -->
    <section id="references" class="mt-16 md:mt-24 lg:mt-40">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
        <Title :icon="'fa-user-friends'" :heading="'Kundenstimmen'" :title="'Über unsere Arbeit'"></Title>
      </div>
      <div class="relative mt-8">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
          <div class="md:flex">
            <div class="md:w-1/2 lg:w-2/3 py-8 md:py-12 md:pr-8 lg:pr-24 flex flex-wrap items-center">
              <div v-for="(client, i) in $page.landing.clients" :key="i" class="w-1/2 p-4 md:p-2 lg:px-4 lg:py-8" v-bind:class="{'w-1/3': i > 1}">
                <img v-bind:src="client.logo" alt="Logo Client" class="w-full" style="filter: grayscale(100%) opacity(80%); -webkit-filter: grayscale(100%) opacity(80%);">
              </div>
            </div>
            <div class="relative z-10 max-w-xl mx-auto pb-12 lg:pb-0 md:w-1/2 lg:w-1/3 md:-mt-20">
              <Window id="reference-window">
                <div class="ml-2 mr-6 mb-8">
                  <div v-for="(reference, i) in $page.landing.references" :key="i">
                    <Bubble :light="false">
                      <p class="text-gray-500 font-bold">{{reference.name}}, {{reference.company}}</p>
                      <p class="text-gray-300">{{reference.reference_text}}</p>
                    </Bubble>
                  </div>
                </div>
              </Window>
            </div>
          </div>
        </div>
        <div class="absolute w-full h-full left-0 top-0 bg-gradient-to-br from-light-900 to-dark-100 opacity-50"></div>
      </div>
    </section>
    
    <!-- ABOUT -->
    <section id="about" class="max-w-screen-xl mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <Title :icon="'fa-users'" :heading="'Satro Media'" :title="'Über die Agentur'"></Title>
      <div class="mt-8 lg:flex">
        <div class="px-4 py-8 pb-32 md:px-8 md:py-12 md:pb-32 lg:w-1/2 md:pr-32 lg:pb-0 bg-white shadow-md rounded-lg">
          <h3 class="font-display">{{$page.landing.about_header}}</h3>
          <p class="pt-4 text-black-500">{{$page.landing.about_description}}</p>
        </div>
        <div id="about-image" class="mx-8 -mt-24 lg:mx-0 lg:my-8 lg:-ml-24 lg:w-4/5 relative rounded-lg overflow-hidden shadow-lg">
          <img v-bind:src="$page.landing.about_image" alt="Satro Media Team" class="w-full h-full">
          <div class="absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-25"></div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="mt-16 md:mt-24 lg:mt-40">
      <div class="md:pt-24">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-8 md:flex md:flex-row-reverse">
          <div class="md:w-1/2 md:pl-16">
            <Title :icon="'fa-address-card'" :heading="'Ihre Marke'" :title="'Ihre Anfrage'"></Title>
          </div>
        </div>
        <div class="bg-gradient-to-br from-gray-600 to-gray-700 mt-8">
          <div class="max-w-screen-lg mx-auto px-4 sm:px-8 md:flex md:flex-row-reverse">
            <div class="md:w-1/2 md:pl-16 py-12 md:py-16">
              <p class="text-gray-300 leading-loose">{{$page.landing.contact_description}}</p>
            </div>
            <div class="md:w-1/2 md:-mt-32">
              <Window id="contact-form">
                <div class="p-6">
                  <form name="Kontaktanfragen" method="POST" v-on:submit.prevent="submitForm" data-netlify="true" data-netlify-honeypot="bot-field">
                    <label for="name" class="text-xs text-gray-300 uppercase font-bold tracking-widest">Ihr Name</label>
                    <input type="text" name="name" v-model="form.data.name" v-on:blur="checkName" class="bg-gray-700 focus:outline-none focus:shadow-outline text-gray-300 placeholder-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-1 mb-4" v-bind:class="{'border-2': form.errors.name, 'border-red-500': form.errors.name}" placeholder="John Doe">
                    <label for="company" class="text-xs text-gray-300 uppercase font-bold tracking-widest">Ihr Unternehmen</label>
                    <input type="text" name="company" v-model="form.data.company" v-on:blur="checkCompany" class="bg-gray-700 focus:outline-none focus:shadow-outline text-gray-300 placeholder-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-1 mb-4" v-bind:class="{'border-2': form.errors.company, 'border-red-500': form.errors.company}" placeholder="Acme Corporation">
                    <label for="email" class="text-xs text-gray-300 uppercase font-bold tracking-widest">Ihre Email-Adresse</label>
                    <input type="email" name="email" v-model="form.data.email" v-on:blur="checkEmail" class="bg-gray-700 focus:outline-none focus:shadow-outline text-gray-300 placeholder-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-1 mb-4" v-bind:class="{'border-2': form.errors.email, 'border-red-500': form.errors.email}" placeholder="john.doe@example.com">
                    <label for="message" class="text-xs text-gray-300 uppercase font-bold tracking-widest">Ihre Anfrage</label>
                    <textarea name="message" v-model="form.data.message" id="message" v-on:blur="checkMessage" rows="7" placeholder="Mein Projekt..." class="bg-gray-700 relative z-20 rounded-lg w-full py-2 px-4 focus:outline-none focus:shadow-outline text-gray-300 placeholder-gray-500 mt-1" v-bind:class="{'border-2': form.errors.message, 'border-red-500': form.errors.message}" style="resize: none;"></textarea>
                    <svg v-if="form.errors.message" xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30" class="-mt-8 -ml-4">
                      <path fill="#F56565" fill-rule="evenodd" d="M15.6631996,0 C15.6631996,10.0805034 10.7875563,19.1652917 1.03626976,27.2543651 C-5.06981953,32.3196049 17.7244451,30.5947092 19.5560233,20.2538567 C20.7770755,13.359955 19.4794676,6.60866946 15.6631996,0 Z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30" class="-mt-8 -ml-4">
                      <path fill="#31313D" fill-rule="evenodd" d="M15.6631996,0 C15.6631996,10.0805034 10.7875563,19.1652917 1.03626976,27.2543651 C-5.06981953,32.3196049 17.7244451,30.5947092 19.5560233,20.2538567 C20.7770755,13.359955 19.4794676,6.60866946 15.6631996,0 Z"/>
                    </svg>
                    <div class="mt-6 md:mt-10 md:flex md:items-center md:justify-between">
                      <div class="flex items-center">
                        <input type="checkbox" name="privacy" v-model="form.data.privacy" v-on:blur="checkPrivacy" class="w-6 h-6 form-checkbox rounded-md text-dark-100 bg-gray-900 border-2 border-gray-300 focus:outline-none focus:shadow-outline focus:border-gray-300 transition-all duration-300 ease-in-out transform hover:scale-110" v-bind:class="{'border-red-500': form.errors.privacy, 'focus:border-red-500': form.errors.privacy}">
                        <p class="text-gray-300 text-sm ml-4">Ich habe die <a href="#" class="font-bold text-xs text-dark-100 uppercase tracking-widest focus:outline-none focus:underline">Datenschutzerklärung <i class="fas fa-chevron-right"></i></a> gelesen und stimme zu.</p>
                      </div>
                      <button type="submit" class="flex-shrink-0 mt-6 md:mt-0 md:ml-10 bg-dark-100 text-white w-12 h-12 rounded-full text-xl focus:outline-none focus:shadow-outline active:bg-dark-300 transition-all duration-300 ease-in-out transform hover:scale-110"><i class="fas fa-paper-plane"></i></button>
                    </div>
                  </form>
                  <p v-if="form.success" class="text-sm font-bold text-black-100 mt-8"><i class="fas fa-check text-dark-100"></i> Ihre Anfrage wurde gesendet.</p>
                </div>
              </Window>
            </div>
          </div>
          <Footer :dark="true"/>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    landing(id: "1") {
      id
      header_video
      header_thumbnail
      cite
      portraits { 
        photo
      }
      intro
      topServices {
        cover
        title
        description
      }
      services {
        title
        description
      }
      clients {
        logo
      }
      references {
        name
        company
        reference_text
      }
      about_header
      about_description
      about_image
      contact_description 
    }
  }
</page-query>

<script>
  import Navbar from '../components/Navbar.vue'
  import Window from '../components/Window.vue'
  import Bubble from '../components/Bubble.vue'
  import Title from '../components/Title.vue'
  import Footer from '../components/Footer.vue'

  import {gsap, TimelineMax} from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  export default {
    name: 'Index',
    metaInfo: {
      title: 'Satro Media Consulting'
    },
    components: {
      Navbar,
      Window,
      Bubble,
      Title,
      Footer
    },
    data() {
      return {
        form: {
          data: {name: '', company: '', email: '', message: '', privacy: false},
          errors: {name: false, company: false, email: false, message: false, privacy: false},
          success: false
        }
      }
    },
    methods: {
      clearForm: function() {
        this.form.data.name = ''
        this.form.data.company = ''
        this.form.data.email = ''
        this.form.data.message = ''
        this.form.data.privacy = false
        this.form.errors.name = false
        this.form.errors.company = false
        this.form.errors.email = false
        this.form.errors.message = false
        this.form.errors.privacy = false
      },
      checkName() {
        this.form.errors.name = (this.form.data.name == '' || this.form.data.name.length < 3 || this.form.data.name.indexOf(' ') == -1)
      },
      checkCompany() {
        this.form.errors.company = (this.form.data.company == '' || this.form.data.company.length < 3)
      },
      checkEmail() {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.form.errors.email = !re.test(String(this.form.data.email).toLowerCase());
      },
      checkMessage() {
        this.form.errors.message = (this.form.data.message == '')
      },
      checkPrivacy() {
        this.form.errors.privacy = !this.form.data.privacy
      },
      encode(data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      },
      submitForm(e) {
        this.checkName()
        this.checkCompany()
        this.checkEmail()
        this.checkMessage()
        this.checkPrivacy()
        if(!(this.form.errors.name || this.form.errors.company || this.form.errors.email || this.form.errors.message || this.form.errors.privacy)) {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
              'form-name': e.target.getAttribute('name'),
              ...this.form.data
            }),
          })
          .then(() => {
            this.clearForm()
            this.form.success = true
          })
          .catch(error => console.log(error))
        }
      },
      hover_im() {
        if(!this.tl_im.isActive()) {
          this.tl_im.play(0)
        }
      },
      hover_cp() {
        if(!this.tl_cp.isActive()) {
          this.tl_cp.play(0)
        }
      },
      animations() {
        //loading animation:
        gsap.from('#navbar', {opacity:0, duration: 0.8})
        gsap.from('#header-window', {opacity: 0, scale: 2, duration: 0.6})
        gsap.from('#nav-item-2', {y: -200, duration: 0.6, delay: 0.4})
        gsap.from('#nav-item-3', {y: -200, duration: 0.6, delay: 0.5})
        gsap.from('#nav-item-4', {y: -200, duration: 0.6, delay: 0.6})
        gsap.from('#nav-item-5', {y: -200, duration: 0.6, delay: 0.7})
        //scroll reveal animation:
        gsap.from('#service-1', {scrollTrigger: '#service-1', y: 100, opacity: 0, scale: 0.8, duration: 0.4})
        gsap.from('#service-2', {scrollTrigger: '#service-2', y: 100, opacity: 0, scale: 0.8, duration: 0.4, delay: 0.1})
        gsap.from('#service-3', {scrollTrigger: {trigger: '#service-3', start: 'top 85%'}, y: 100, opacity: 0, scale: 0.8, duration: 0.4})
        gsap.from('#service-4', {scrollTrigger: {trigger: '#service-4', start: 'top 85%'}, y: 100, opacity: 0, scale: 0.8, duration: 0.4, delay: 0.1})
        gsap.from('#service-5', {scrollTrigger: {trigger: '#service-5', start: 'top 85%'}, y: 100, opacity: 0, scale: 0.8, duration: 0.4, delay: 0.2})
        gsap.from('#about-image', {scrollTrigger: {trigger: '#about-image', start: 'center bottom'}, x: 200, opacity: 0, scale: 0.9, duration: 0.6})
        //parallax scrolling:
        gsap.timeline({scrollTrigger: {trigger: '#portrait-1', scrub: true}}).fromTo('#portrait-1', {y: 50}, {y: -30})
        gsap.timeline({scrollTrigger: {trigger: '#portrait-2', scrub: true}}).fromTo('#portrait-2', {y: 50}, {y: 0})
        gsap.timeline({scrollTrigger: {trigger: '#reference-window', scrub: true}}).fromTo('#reference-window', {y: 50}, {y: -50})
        gsap.timeline({scrollTrigger: {trigger: '#contact-form', scrub: true}}).fromTo('#contact-form', {y: 50}, {y: -50})
        //influencer management icon animation:
        const tl_im_bubble_1 = gsap.timeline()
        .to('#im-bubble-1', 0.3, {x: 3, y: 90, scale: 1.1})
        .to('#im-bubble-1', 0.2, {rotate: -10, transformOrigin: '50% 50%'})
        .to('#im-bubble-1', 1, {rotate: 0, ease: 'elastic', transformOrigin: '50% 50%'})
        .to('#im-bubble-1', 0.3, {x: 11.05, y: 84.971, scale: 1, transformOrigin: '0% 0%', delay: -0.3})
        const tl_im_bubble_2 = gsap.timeline()
        .to('#im-bubble-2', 0.3, {x: 3, y: 5, delay: -0.3})
        .to('#im-bubble-2', 0.2, {rotate: -10, transformOrigin: '50% 50%'})
        .to('#im-bubble-2', 1, {rotate: 0, ease: 'elastic', transformOrigin: '50% 50%'})
        .to('#im-bubble-2', 0.3, {x: 0, y: 0, transformOrigin: '0% 0%', delay: -0.3})
        const tl_im_bubble_3 = gsap.timeline()
        .to('#im-bubble-3', 0.3, {x: 83, y: 55, scale: 1.05, delay: -0.3})
        .to('#im-bubble-3', 0.2, {rotate: -5, transformOrigin: '50% 50%'})
        .to('#im-bubble-3', 1, {rotate: 0, ease: 'elastic', transformOrigin: '50% 50%'})
        .to('#im-bubble-3', 0.3, {x: 90.95, y: 39.936, scale: 1, transformOrigin: '0% 0%', delay: -0.3})
        this.tl_im = gsap.timeline({paused: true})
        .to('#im-bg', {opacity: 0.5})
        .add(tl_im_bubble_1, 0.2)
        .add(tl_im_bubble_2, 0.5)
        .add(tl_im_bubble_3, 0.4)
        .to('#im-bg', 0.3, {opacity: 1, delay: -0.3})
        //content production icon animation:
        const tl_cp_playbutton = gsap.timeline()
        .to('#cp-playbutton', 0.6, {scale: 1.2, transformOrigin: '50% 50%'})
        .to('#cp-playbutton', 0.2, {scale: 1.0, transformOrigin: '50% 50%', ease: 'back'})
        .to('#cp-playbutton', 0.4, {scale: 1.1, transformOrigin: '50% 50%', ease: 'back'})
        .to('#cp-playbutton', 1, {scale: 1, transformOrigin: '50% 50%'})
        const tl_cp_slider = gsap.timeline()
        .to('#cp-slider', 0.3, {y: 68, scale: 1.05})
        .to('#cp-slider', 0.9, {y: 78.036, scale: 1, ease: 'back'})
        const tl_cp_bullhorn = gsap.timeline()
        .to('#cp-bullhorn', 0.3, {y: 25, scale: 1.05})
        .to('#cp-bullhorn', 0.9, {y: 34.777, scale: 1, ease: 'back'})
        const tl_cp_dots = gsap.timeline()
        .to('#cp-dots', 0.3, {y: 79, scale: 1.05})
        .to('#cp-dots', 0.9, {y: 89.063, scale: 1, ease: 'back'})
        this.tl_cp = gsap.timeline({paused: true})
        .to('#cp-bg', {opacity: 0.5})
        .to('#cp-text', {opacity: 0.5, delay: -0.5})
        .add(tl_cp_playbutton, 0)
        .add(tl_cp_slider, 0.8)
        .add(tl_cp_bullhorn, 1)
        .add(tl_cp_dots, 1.2)
        .to('#cp-bg', 0.3, {opacity: 1, delay: -0.9})
        .to('#cp-text', 0.3, {opacity: 1, delay: -0.9})
      }
    },
    mounted() { 
      gsap.registerPlugin(ScrollTrigger)
      this.animations()
    } 
  }
</script>

<style scoped>
  .top-service:hover .top-service-image {
    transform: translateY(-10px);
  }
</style>
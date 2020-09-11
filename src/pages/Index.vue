<template>
  <Layout>
    <Navbar id="navbar" :showBackButton="false" />

    <!-- HEADER -->
    <section id="header" class="max-w-screen-xl mx-auto px-4 sm:px-8">
      <Window>
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
      <p class="text-xl md:text-3xl font-display"><i class="fas fa-quote-right text-dark-100 pr-6"></i>{{$page.landing.cite}}</p>
    </section>

    <!-- INTRO -->
    <section id=intro>
      <div class="mt-12 pb-32 md:pb-0 bg-light-500">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <div class="py-12">
              <p class="text-black-500">{{$page.landing.intro}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto px-4 sm:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <Window class="relative z-10 w-1/2 sm:w-1/3 md:w-1/2 -mt-32">
              <img v-bind:src="$page.landing.portraits[0].photo" alt="Satro Media Gründer">
            </Window>
            <Window class="relative z-20 w-1/2 sm:w-1/3 md:w-1/2 ml-32 xs:ml-48 sm:ml-40 -mt-40 xs:-mt-56 sm:-mt-48">
              <img v-bind:src="$page.landing.portraits[1].photo" alt="Satro Media Gründer">
            </Window>
          </div>
          <div class="pt-8">
            <p class="text-dark-100">Mika Sannmann & Henning Trogisch</p>
            <p class="text-dark-100 italic">Gründer SaTro Media</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="max-w-screen-lg mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div class="bg-white rounded-lg shadow-md p-6 pt-0 flex flex-col justify-between mt-24 md:mt-36 lg:mt-48 mb-12">
          <div class="-mt-24 md:-mt-36 lg:-mt-48 mb-6">
            <div class="relative rounded-lg overflow-hidden shadow-lg">
              <img v-bind:src="$page.landing.topServices[0].cover" v-bind:alt="$page.landing.topServices[0].title" class="mx-auto">
              <div class="flex items-center absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-50 p-12">
                <img src="../assets/img/influencer_management.svg" v-bind:alt="$page.landing.topServices[0].title" class="mx-auto">
              </div>
            </div>
          </div>
          <div class="mt-4 px-4 xs:px-16 sm:px-24 md:px-8 lg:px-16 text-center">
            <h3 class="font-display">{{$page.landing.topServices[0].title}}</h3>
            <p class="my-4 text-sm">{{$page.landing.topServices[0].description}}</p>
            <a href="#" class="text-xs text-dark-100 hover:text-dark-500 uppercase font-bold tracking-widest hover:text-dark-300">Mehr dazu <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 pt-0 flex flex-col justify-between mt-24 md:mt-36 lg:mt-48 mb-12">
          <div class="-mt-24 md:-mt-36 lg:-mt-48 mb-6">
            <div class="relative rounded-lg overflow-hidden shadow-lg">
              <img v-bind:src="$page.landing.topServices[1].cover" v-bind:alt="$page.landing.topServices[1].title" class="mx-auto">
              <div class="flex items-center absolute w-full h-full left-0 top-0 bg-dark-900 bg-opacity-50 p-12">
                <img src="../assets/img/content_production.svg" v-bind:alt="$page.landing.topServices[1].title" class="mx-auto">
              </div>
            </div>
          </div>
          <div class="mt-4 px-4 xs:px-16 sm:px-24 md:px-8 lg:px-16 text-center">
            <h3 class="font-display">{{$page.landing.topServices[1].title}}</h3>
            <p class="my-4 text-sm">{{$page.landing.topServices[1].description}}</p>
            <a href="#" class="text-xs text-dark-100 hover:text-dark-500 uppercase font-bold tracking-widest hover:text-dark-300">Mehr dazu <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8">
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between mb-12 md:mb-0">
          <div class="p-6">
            <img src="../assets/img/digitale_konzepte.svg" v-bind:alt="$page.landing.services[0].title" class="mx-auto">
          </div>
          <div class="mt-4 px-4 xs:px-16 sm:px-24 md:px-0 text-center">
            <h3 class="font-display">{{$page.landing.services[0].title}}</h3>
            <p class="my-4 text-sm">{{$page.landing.services[0].description}}</p>
            <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest hover:text-dark-300">Mehr dazu <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between mb-12 md:mb-0">
          <div class="p-6">
            <img src="../assets/img/webdesign.svg" v-bind:alt="$page.landing.services[1].title" class="mx-auto">
          </div>
          <div class="mt-4 px-4 xs:px-16 sm:px-24 md:px-0 text-center">
            <h3 class="font-display">{{$page.landing.services[1].title}}</h3>
            <p class="my-4 text-sm">{{$page.landing.services[1].description}}</p>
            <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest hover:text-dark-300">Mehr dazu <i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between mb-12 md:mb-0">
          <div class="p-6">
            <img src="../assets/img/online_marketing.svg" v-bind:alt="$page.landing.services[2].title" class="mx-auto">
          </div>
          <div class="mt-4 px-4 xs:px-16 sm:px-24 md:px-0 text-center">
            <h3 class="font-display">{{$page.landing.services[2].title}}</h3>
            <p class="my-4 text-sm">{{$page.landing.services[2].description}}</p>
            <a href="#" class="text-xs text-dark-100 uppercase font-bold tracking-widest hover:text-dark-300">Mehr dazu <i class="fas fa-chevron-right"></i></a>
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
              <Window>
                <div class="ml-2 mr-6 mb-8">
                  <div v-for="(reference, i) in $page.landing.references" :key="i">
                    <Bubble :light="false">
                      <p class="text-black-300 font-bold">{{reference.name}}, {{reference.company}}</p>
                      <p class="text-white">{{reference.reference_text}}</p>
                    </Bubble>
                  </div>
                </div>
              </Window>
            </div>
          </div>
        </div>
        <div class="absolute w-full h-full left-0 top-0 bg-light-900 bg-opacity-50"></div>
      </div>
    </section>
    
    <!-- ABOUT -->
    <section id="about" class="max-w-screen-xl mx-auto px-4 sm:px-8 mt-16 md:mt-24 lg:mt-40">
      <Title :icon="'fa-users'" :heading="'Satro Media'" :title="'Über die Agentur'"></Title>
      <div class="mt-8 lg:flex">
        <div class="px-4 py-8 pb-32 md:px-8 md:py-12 md:pb-32 lg:w-1/2 md:pr-32 lg:pb-0 bg-white shadow-md rounded-lg">
          <h3 class="font-display">{{$page.landing.about_header}}</h3>
          <p class="pt-4">{{$page.landing.about_description}}</p>
        </div>
        <div class="mx-8 -mt-24 lg:mx-0 lg:my-8 lg:-ml-24 lg:w-4/5 relative rounded-lg overflow-hidden shadow-lg">
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
        <div class="bg-light-500 mt-8">
          <div class="max-w-screen-lg mx-auto px-4 sm:px-8 md:flex md:flex-row-reverse">
            <div class="md:w-1/2 md:pl-16 py-12">
              <p class="text-black-500">{{$page.landing.contact_description}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto px-4 sm:px-8 mt-12 md:-mt-96">
        <div class="md:w-1/2">
          <Window>
            <div class="p-6">
              <form name="contact" method="post" v-on:submit.prevent="submitForm()" data-netlify="true" data-netlify-honeypot="bot-field">
                <label for="name" class="text-xs text-black-300 uppercase font-bold tracking-widest">Ihr Name</label>
                <input type="text" v-model="form.data.name" id="name" v-on:blur="checkName" class="bg-black-700 focus:outline-none focus:shadow-outline text-black-300 placeholder-black-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-1 mb-4" v-bind:class="{'border-2': form.errors.name, 'border-red-500': form.errors.name}" placeholder="John Doe">
                <label for="company" class="text-xs text-black-300 uppercase font-bold tracking-widest">Ihr Unternehmen</label>
                <input type="text" v-model="form.data.company" id="company" v-on:blur="checkCompany" class="bg-black-700 focus:outline-none focus:shadow-outline text-black-300 placeholder-black-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-1 mb-4" v-bind:class="{'border-2': form.errors.company, 'border-red-500': form.errors.company}" placeholder="Acme Corporation">
                <label for="email" class="text-xs text-black-300 uppercase font-bold tracking-widest">Ihre Email-Adresse</label>
                <input type="email" v-model="form.data.email" id="email" v-on:blur="checkEmail" class="bg-black-700 focus:outline-none focus:shadow-outline text-black-300 placeholder-black-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-1 mb-4" v-bind:class="{'border-2': form.errors.email, 'border-red-500': form.errors.email}" placeholder="john.doe@example.com">
                <label for="message" class="text-xs text-black-300 uppercase font-bold tracking-widest">Ihre Anfrage</label>
                <textarea name="message" v-model="form.data.message" id="message" v-on:blur="checkMessage" rows="7" placeholder="Mein Projekt..." class="bg-black-700 relative z-20 rounded-lg w-full py-2 px-4 focus:outline-none focus:shadow-outline text-black-300 placeholder-black-500 mt-1" v-bind:class="{'border-2': form.errors.message, 'border-red-500': form.errors.message}" style="resize: none;"></textarea>
                <svg v-if="form.errors.message" xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30" class="-mt-8 -ml-4">
                  <path fill="#F56565" fill-rule="evenodd" d="M15.6631996,0 C15.6631996,10.0805034 10.7875563,19.1652917 1.03626976,27.2543651 C-5.06981953,32.3196049 17.7244451,30.5947092 19.5560233,20.2538567 C20.7770755,13.359955 19.4794676,6.60866946 15.6631996,0 Z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30" class="-mt-8 -ml-4">
                  <path fill="#3C3C3C" fill-rule="evenodd" d="M15.6631996,0 C15.6631996,10.0805034 10.7875563,19.1652917 1.03626976,27.2543651 C-5.06981953,32.3196049 17.7244451,30.5947092 19.5560233,20.2538567 C20.7770755,13.359955 19.4794676,6.60866946 15.6631996,0 Z"/>
                </svg>
                <div class="mt-6 md:mt-10 md:flex md:items-center md:justify-between">
                  <div class="flex items-center">
                    <input type="checkbox" v-model="form.data.privacy" id="privacy" v-on:blur="checkPrivacy" class="w-6 h-6 form-checkbox rounded-md text-dark-100 bg-black-900 border-2 border-black-300 focus:outline-none focus:shadow-outline focus:border-black-300" v-bind:class="{'border-red-500': form.errors.privacy, 'focus:border-red-500': form.errors.privacy}">
                    <p class="text-black-300 text-sm ml-4">Ich habe die <a href="#" class="font-bold text-xs text-dark-100 uppercase tracking-widest focus:outline-none focus:underline">Datenschutzerklärung <i class="fas fa-chevron-right"></i></a> gelesen und stimme zu.</p>
                  </div>
                  <button type="submit" class="flex-shrink-0 mt-6 md:mt-0 md:ml-10 bg-dark-100 text-white w-12 h-12 rounded-full text-xl focus:outline-none focus:shadow-outline active:bg-dark-300"><i class="fas fa-paper-plane"></i></button>
                </div>
              </form>
              <p v-if="form.success" class="text-sm font-bold text-green-500 mt-8">Ihre Anfrage wurde gesendet.</p>
            </div>
          </Window>
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
  export default {
    name: 'Index',
    metaInfo: {
      title: 'Satro Media Consulting'
    },
    components: {
      Navbar,
      Window,
      Bubble,
      Title
    },
    data() {
      return {
        form: {
          data: {
            name: '',
            company: '',
            email: '',
            message: '',
            privacy: false
          },
          errors: {
            name: false,
            company: false,
            email: false,
            message: false,
            privacy: false
          },
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
        this.form.data.errors.name = false
        this.form.data.errors.company = false
        this.form.data.errors.email = false
        this.form.data.errors.message = false
        this.form.data.errors.privacy = false
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
        if(!form.errors.name && !form.errors.company && !form.errors.email && !form.errors.message && !form.erorrs.privacy) {
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
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div class="signupage">
    <div class="bg">
      <div class="bgChild">
        <div class="coolreads">
          <div class="welcomeToCoolreadsContainer">
            <span class="welcomeToCoolreadsContainer1">
              <p class="welcomeToCoolreads">{{ translations.welcomeToCoolreads }} 📚 </p>
              <p class="welcomeToCoolreads">{{ translations.joinUs }}</p>
            </span>
          </div>
          <div class="titlenameWrapper">
            <div class="titlename" @click="route('/bookmenu')">
              <div class="c">C</div>
              <div class="coolreadsWrapper">
                <i class="coolreads1">oolReads</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form">
        <div class="titleWrapper">
          <div class="title">{{ translations.createAccountTitle }}</div>
          <div class="language-selection">
				      <img class="flag-icon" alt="Português" src="/img/PT.svg" @click="setLanguage('portuguese')"/>
				      <img class="flag-icon" alt="English"   src="/img/US.svg" @click="setLanguage('english')"   />
        	</div>
        </div>
        <div class="frameParent">
          <div class="frameGroup">
            <div class="emailWrapper">
              <div class="email">{{ translations.email }}</div>
            </div>
            <div class="inputTextWrapper">
              <input v-model="email" class="inputText"  placeholder="example@example.com"/>
            </div>
          </div>
          <div class="frameGroup">
            <div class="emailWrapper">
              <div class="email">{{ translations.username }}</div>
            </div>
            <div class="input">
              <input v-model="username" class="inputText1" :placeholder="translations.passwordPlaceholder"/>
            </div>
          </div>
          <div class="frameGroup">
            <div class="emailWrapper">
              <div class="email">{{ translations.password }}</div>
            </div>
            <div class="input">
              <input v-model="password" class="inputText1" :type="type" :placeholder="translations.passwordPlaceholder"/>
                <div class="iconeye-wrapper">
                  <img class="iconeye" alt="" @click="changeType" src="/img/iconeye.svg">
              </div>
            </div>
          </div>
        </div>
        <div class="buttonParent">
            <button class="createbutton" @click="createAccount">{{ translations.createAccountButton }}</button>
          <div class="alreadyHaveAnAccountParent">
            <div class="alreadyHaveAn">{{ translations.alreadyHaveAccount }}</div>
            <a class="logIn" @click="route('/login')">{{ translations.login }}</a>
          </div>
        </div>
        </div>
        </div>
        </div>
</template>

<script>
import router from "../router/index";
import User from "@/models/user";
import 'vue-toast-notification/dist/theme-sugar.css'
export default {
  data(){
    return{
        email:'',
        username:'',
        password:'',
        error_msg:'',
        type:'password'
    }
  },
  methods: {
    route(route) {
      this.$router.push(route);
    },
    createAccount() {

      if(this.username==='' || this.password==='' || this.email===''){
        if (this.selectedLanguage == 'portuguese') {
          this.$toast.error('Existem campos vazios. Introduza email, o Nome de utilizador e palavra-passe.');
        } else {
          this.$toast.error('Some fields are empty. Introduce email, username and password.');
        }
        return;
		  }

      this.$store.dispatch('auth/register', new User(this.username,this.email,this.password)).then(
            data => {
              console.log(data);
              if(this.selectedLanguage == 'portuguese'){
                this.$toast.success("Registro efetuado com sucesso!")
              } else {
                this.$toast.success("Register successful!")
              }
              
            	router.push('/login');
            },
            error => {
              if (this.selectedLanguage == 'portuguese') {
                this.$toast.error('Nome de utilizador ou palavra-passe inválidos. Tente novamente.');
              } else {
                this.$toast.error('Invalid username or password. Try again.');
              }
            }
          );
    },
    closemsg(){
			this.error_msg='';
		},
    changeType(){
      if(this.type==='password') this.type='text';
      else this.type='password';
    },
    setLanguage(language) {
      		this.$store.dispatch('language/setLanguage', language);
    }
  },computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    translations() {
      return this.$store.getters['language/currentTranslations'];
    },
    selectedLanguage() {
      return this.$store.state.language.selectedLanguage;
    },
  },
  created() {
    console.log(this.$store.state.auth.status.loggedIn)
    const token = localStorage.getItem('user');
    console.log(token)
    try {
        const decodedToken = JSON.parse(token);
        console.log(decodedToken)
        if(decodedToken!=null && decodedToken!=null && decodedToken.info!=null && decodedToken.info.exp<Date.now()/1000) {
          this.$router.push('/profile');
        }
        
      } catch (error) {
        console.error('Error parsing user token:', error);
      }
  }
};
</script>

<style scoped>

/*@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inika:wght@400&display=swap');
*/
.bgChild {
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(#222831, #222831), #d9d9d9;
  width: 648px;
  height: 100%;
}
.coolreads {
  position: absolute;
  top: 64px;
  left: 72px;
  width: 160px;
  height: 25px;
}

.welcomeToCoolreads {
  margin: 9;
}

.welcomeToCoolreadsContainer1 {
  width: 100%;
}
.icongoogle-original {
width: 15px;
position: relative;
height: 15px;
overflow: hidden;
flex-shrink: 0;
}
.welcomeToCoolreadsContainer {
  width: 511px;
  position: absolute;
  top: 378px;
  left: 27px;
  font-size: 50.4px;
  line-height: 1.2;
  font-family: Inika;
  background: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0.44));
  color: #fff;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.coolreads1 {
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.1em;
  line-height: 100%;
  font-size: 48px;
  font-weight: 550;
  color: #fff;
}
.coolreadsWrapper {
  position: absolute;
  top: 26px;
  left: 38px;
  width: 138px;
  height: 25px;
}
.c {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 60px;
  font-family: Inika;
  color: #c48930;
}
.titlename {
  cursor: pointer;
  position: absolute;
  top: 43px;
  left: 43px;
  width: 166px;
  height: 51px;
}
.titlenameWrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 648px;
  height: 810px;
  overflow: hidden;
  font-size: 48px;
  font-family: Inika;
}
.bg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 648px;
  height: 810px;
}
.title {
  position: relative;
  line-height: 100%;
  text-align: center;
  font-weight: 600;
  margin-bottom: 21.6px;
  margin-top: 0;
  padding-top: 0;
}
.textButton {
  position: relative;
  line-height: 100%;
  text-align: center;
  font-weight: 600;
}
.titleWrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.alreadyHaveAnAccountParent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7.2px;
  font-size: 12.6px;
  color: #98a2b3;
}
.email {
  flex: 1;
  position: relative;
  line-height: 100%;
  text-transform: capitalize;
}
.emailWrapper {
  align-self: stretch;
  display: flex;
  font-size: 14.4px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.context {
  flex: 1;
  position: relative;
  line-height: 100%;
}
.inputTextChild {
  width: 21.6px;
  height: 21.6px;
}
.inputText {
  align-self: center;
  flex: none;
  border-radius: 7.2px;
  border: 2.7px solid #d1e9ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 7.2px 10.8px;
  width: 270px;
  gap: 4.5px; 
}
.inputTextWrapper {
  align-self: center;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  font-size: 12.6px;
}
.frameGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10.8px;
}
.iconeye {
  top: -25px;
  width: 18.6px;
  position: relative;
  height: 18.6px;
  left:240px;
  cursor:pointer;
}

.iconeyeWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.inputText1 {
  border-radius: 7.2px;
  border: 0.9px solid #d0d5dd;
  padding: 7.2px 10.8px;
  width: 270px;
}
.input {
  flex-direction: row;
  height: auto;
  font-size: 12.6px;
  color: #98a2b3;
}
.frameParent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21.6px;
  color: #344054;
}
.createbutton {
  align-self: center;
  border-radius: 7.2px;
  background-color: #2f3134;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color:white;
  width: 270px;
  padding: 14.4px;
  box-sizing: border-box;
  cursor:pointer;
}
.icongoogleOriginal {
  width: 18px;
  position: relative;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
}
.button1 {
  align-self: center;
  border-radius: 7.2px;
  background-color: #d1e9ff;
  height: 43.2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10.8px 14.4px;
  box-sizing: border-box;
  width: 270px;
  gap: 7.2px;
  color: #1570ef;
}
.alreadyHaveAn {
  position: relative;
  line-height: 100%;
  text-transform: capitalize;
  font-family: Inika;
}
.logIn {
  position: relative;
  line-height: 100%;
  text-transform: capitalize;
  color: #1570ef;
  cursor: pointer;
}

.buttonParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 21.6px;
  color: #fcfcfd;
}
.form {
  position: absolute;
  top: 0px;
  left: 765px;
  background-color: #fff;
  width: 917px;
  height: 1350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 43.2px 64.8px;
  box-sizing: border-box;
  gap: 28.8px;
  font-size: 25.2px;
}
.signuppage {
  width: 100%;
  position: relative;
  background-color: #fff;
  height: 900px;
  text-align: left;
  font-size: 50.4px;
  color: #ffffff;
  font-family: Inika;
}

.button .textButton,
.button1 .textButton {
  font-size: 14.4px;
  font-family: Inika;
}
.language-selection {
  display: flex;
  gap: 10px;
  position: absolute;
  top: 300px;
  right: 120px;
}
.flag-icon {
  cursor: pointer;
  width: 30px;
  height: 20px;
}
.signupage{
  position: absolute;
  top: 0px;
  left: 0px;
  transform: scale(0.903);
}
</style>

const state = () => ({
    selectedLanguage: localStorage.getItem('selectedLanguage') || 'english',
    translations: {
      english: {
        selectLanguage: 'Select your preferred language',
        email: 'Email:',
        username: 'Username',
        password: 'Password:',
        changePassword: 'Change Password',
        privacyTitle: 'Default Privacy Settings for Bookshelf',
        public: 'Public',
        friends: 'Friends Only',
        private: 'Private',
        books: 'Books',
        profile: 'Profile',
        viewProfile: 'View Profile',
        settings: 'Settings',
        home: 'Home',
        searchPlaceholder: 'Search for books, readers and writers...',
        notifications: 'Notifications',
        viewAll: 'View All',
        bookshelf: 'Bookshelf',
        allnotifications: 'All Notifications',
        delete: 'Delete',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirm: 'Confirm',
        loginTitle: 'Login to your account',
        emailOrUsername: 'Email or Username',
        forgot: 'Forgot?',
        loginnow: 'Login now',
        noAccount: "Don't have an account?",
        signup: ' Sign Up',
        createAccountTitle: 'Create an account',
        createAccountButton: 'Create account',
        alreadyHaveAccount: 'Already have an account?',
        login: 'Log in',
        welcomeToCoolreads: 'Welcome to CoolReads!',
        joinUs: 'Join us in our book loving community today!',
        usernamePlaceholder: 'Enter your username',
        passwordPlaceholder: 'Enter your password',
        genres: 'Genres',
        forYou: 'For You',
        adventure: 'Adventure',
        mystery: 'Mystery',
        biography: 'Biography',
        sciFi: 'Sci-Fi',
        fantasy: 'Fantasy',
        music: 'Music',
        sports: 'Sports',
        romance: 'Romance',
        horror: 'Horror',
        manga: 'Manga',
        category: 'Category -',
        searchPlaceholderBooks: 'Search for books...',
        orderBy: 'Order By',
        date: 'Date',
        title: 'Title',
        rate: 'Rate',
      },
      portuguese: {
        selectLanguage: 'Selecione a linguagem pretendida',
        email: 'Email:',
        username: 'Nome de Utilizador',
        password: 'Palavra-Passe:',
        changePassword: 'Alterar Senha',
        privacyTitle: 'Definições Padrão para Privacidade da Estante',
        public: 'Pública',
        friends: 'Apenas Amigos',
        private: 'Privada',
        books: 'Livros',
        profile: 'Perfil',
        viewProfile: 'Ver Perfil',
        settings: 'Definições',
        home: 'Início',
        searchPlaceholder: 'Pesquisar por livros, leitores e escritores...',
        notifications: 'Notificações',
        viewAll: 'Ver Todos',
        bookshelf: 'Estante',
        allnotifications: 'Todas as Notificações',
        delete: 'Apagar',
        currentPassword: 'Palavra-Passe Atual',
        newPassword: 'Palavra-Passe Nova',
        confirm: 'Confirmar',
        loginTitle: 'Inicie a sua sessão',
        emailOrUsername: "Email ou Nome de Utilizador",
        forgot: 'Esqueceu-se?',
        loginnow: 'Iniciar Sessão',
        noAccount: 'Não tem uma conta?',
        signup: ' Registar',
        createAccountTitle: 'Crie uma conta',
        createAccountButton: 'Criar conta',
        alreadyHaveAccount: 'Já tem uma conta?',
        login: 'Entrar',
        welcomeToCoolreads: 'Bem-vindo ao CoolReads!',
        joinUs: 'Junte-se à nossa comunidade que ama livros hoje!',
        usernamePlaceholder: 'Digite o seu nome de utilizador',
        passwordPlaceholder: 'Digite a sua palavra passe',
        genres: 'Géneros',
        forYou: 'Para Você',
        adventure: 'Aventura',
        mystery: 'Mistério',
        biography: 'Biografia',
        sciFi: 'Ficção',
        fantasy: 'Fantasia',
        music: 'Música',
        sports: 'Desporto',
        romance: 'Romance',
        horror: 'Terror',
        manga: 'Manga',
        category: 'Categoria -',
        searchPlaceholderBooks: 'Pesquisar por livros...',
        orderBy: 'Ordenar por',
        date: 'Data',
        title: 'Título',
        rate: 'Avaliação',
      },
    },
  });
  
  const mutations = {
    setSelectedLanguage(state, language) {
        state.selectedLanguage = language;
        localStorage.setItem('selectedLanguage', language);
    },
};;
  
  const actions = {
    setLanguage({ commit }, language) {
      commit('setSelectedLanguage', language);
    },
  };
  
  const getters = {
    currentTranslations(state) {
      return state.translations[state.selectedLanguage];
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  
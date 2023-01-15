<template>
    <div>
    <header>
        <h3>CMS</h3>
    </header>
    <nav>
        <ul>
            <li class="link"><router-link id="textlink" :to="{ name: 'Categories' }">Categories</router-link></li>
            <li class="link"><router-link id="textlink" :to="{ name: 'Cities' }">Cities</router-link></li>
            <li class="link"><router-link id="textlink" :to="{ name: 'Communes' }">Communes</router-link></li>
            <li class="link"><router-link id="textlink" :to="{ name: 'Directions' }">Directions</router-link></li>
            <li class="link"><router-link id="textlink" :to="{ name: 'Images' }">Images</router-link></li>
            <li class="link"><router-link id="textlink" :to="{ name: 'Products' }">Products</router-link></li>
            <li class="link"><router-link id="textlink" :to="{ name: 'Regions' }">Regions</router-link></li>
            <li class="link"><router-link id="textlink" :to="{ name: 'Roles' }">Roles</router-link></li>
            <li class="link"><router-link id="textlink" :to="{ name: 'Shops' }">Shops</router-link></li>
            <li class="link"><router-link id="textlink" :to="{ name: 'States' }">States</router-link></li>
            <li class="link"><router-link id="textlink" :to="{ name: 'Users' }">Users</router-link></li>            
            <li class="link"><a id="textlink" v-on:click="logOut()" >Log Out</a></li>            
        </ul>
    </nav>
    <main>
        <small>EN</small>
        <h1>Welcome!</h1>
        <h2>Welcome to the Content Manager System of Bagual</h2>
        <p>Comming soon with graphs and more features!</p>
        <hr>
        <small>ES</small>
        <h1>Bienvenido!</h1>
        <h2>Bienvenido al Sistema de Gestor de Contenido de Bagual</h2>
        <p>Proximamante con gráficos y más funciones!</p>
    </main>
</div>
</template>

<script>
import auth from '@/logic/auth';

export default {
    data: () => ({

    }),
    methods:{
        logOut: async function(){
            const response = await auth.logout();
            this.$router.push('/');
        }
    }

}
</script>

<style lang="css" scoped>
div {
    display: grid;
    height: 100vh;
    grid-template-columns: 220px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "header header header" "nav content content";
}
div header {
    grid-area: header;
    background-color: #3e51b5;
    color: white;
    padding: 1em;
    box-shadow: 1px 2px 4px 0 #000;
    border-bottom: 1px solid rgba(21, 99, 157, 0.16);
}
div nav {
    grid-area: nav;
    border-right: 1px solid rgba(21, 99, 157, 0.16);
    background-color: #fff;
}
div nav a {
    margin: 0;
    padding: 0;
    padding: 1em;
    cursor: pointer;
    position: relative;
    display: block;
    text-decoration: none;
    color: #000;
}
div main {
    grid-area: content;
    background-color: #f3f8fb;
    padding: 1em;
}

.link{
    background-color: white;
    transition: all 300ms;
}

.link:hover {
    cursor: pointer;
    background-color: #3e51b5;    
    border-radius: 25px;        
}

.link:hover #textlink{
    color: white;
}

ul {
  list-style-type: none;
}

</style>
<template>
    <div>
    <header>
        <h3>CMS</h3>
    </header>
    <nav>
        <ul>
            <li><router-link :to="{ name: 'Categories' }">Categories</router-link></li>
            <li><router-link :to="{ name: 'Cities' }">Cities</router-link></li>
            <li><router-link :to="{ name: 'Communes' }">Communes</router-link></li>
            <li><router-link :to="{ name: 'Directions' }">Directions</router-link></li>
            <li><router-link :to="{ name: 'Images' }">Images</router-link></li>
            <li><router-link :to="{ name: 'Products' }">Products</router-link></li>
            <li><router-link :to="{ name: 'Regions' }">Regions</router-link></li>
            <li><router-link :to="{ name: 'Roles' }">Roles</router-link></li>
            <li><router-link :to="{ name: 'Shops' }">Shops</router-link></li>
            <li><router-link :to="{ name: 'States' }">States</router-link></li>
            <li><router-link :to="{ name: 'Users' }">Users</router-link></li>            
        </ul>
    </nav>
    <main>
        <h1>Bienvenido!</h1>
        <h2>Bienvenido al sistema de administración de contenido de Bagual</h2>
        <p>Proximamante con gráficos y más funciones!</p>
    </main>
</div>
</template>

<script>
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
</style>
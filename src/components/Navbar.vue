<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <ul class="nav navbar-nav">
                <li class="nav">
                    <router-link to="/home">HOME</router-link>
                </li>
                <li class="nav">
                    <router-link to="accounts">ACCOUNTS</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

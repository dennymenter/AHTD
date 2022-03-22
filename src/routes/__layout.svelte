

<script>
    import "../css/global.css"
    import "../css/nav.css"
    import NavHeader from "../common/nav-header.svelte";
    import NavFooter from "../common/nav-footer.svelte";
    import "../app.css";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://www.markuptag.com/bootstrap/5/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css" />
    <!-- Bootstrap JS -->
    <script src="https://www.markuptag.com/bootstrap/5/js/bootstrap.bundle.min.js"></script>
    
</svelte:head>

<main>
    <NavHeader/>
    <slot></slot>
    <div style="padding-top: 10px"></div>
    <NavFooter/>
</main>


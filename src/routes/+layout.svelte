<script>
    import "../app.css"
    import TitleBar from "../components/App/TitleBar.svelte";
    import { ActiveTheme } from "../store";

    let used_theme = $ActiveTheme;

</script>

<TitleBar primaryColor={used_theme.primary} />

<slot />
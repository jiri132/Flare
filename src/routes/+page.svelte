<script>
    import App from "../components/App/App.svelte";

    import { ActiveTheme } from "../store";

    let used_theme = $ActiveTheme;
</script>

<!-- Importing the App component because everything will be set in there -->
<App />
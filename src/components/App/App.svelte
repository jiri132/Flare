<script>
    import SideBar from "../SideBar/SideBar.svelte";
    import RootView from "./RootView.svelte"

    import { ActiveTheme } from "../../store";

    let used_theme = $ActiveTheme;
</script>

<SideBar SideBarTheme={used_theme.SideBar} />
<RootView /> 



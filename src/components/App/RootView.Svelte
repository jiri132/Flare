<script lang="ts">
    import { Content } from "../../store";

    $:c = $Content;

</script>


<svelte:window />

<textarea>
    {c}
</textarea>


<style>
    textarea {
        /* Coloring */
        background-color: rgb(26, 26, 26);
        color: white;

        /* Positioning & Sizing*/
        flex-grow: 1;
        margin-top: 30px;
        height: calc(100vh - 34px);

        /* Borders */
        border-radius: 0px 0px 10px 0px;
        border: none;

        /* overflowing and decoration */
        overflow: auto;
        outline: none;

        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;

        resize: none; /*remove the resize handle on the bottom right*/
    }
</style>

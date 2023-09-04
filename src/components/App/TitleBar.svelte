<script>
    import { appWindow } from '@tauri-apps/api/window'
</script>

<div data-tauri-drag-region class="titlebar">
    <button class="titlebar-button" id="titlebar-minimize" on:click={() => appWindow.minimize()}>
        <img
        src="https://api.iconify.design/mdi:window-minimize.svg"
        alt="minimize"
      />
    </button>
    <button class="titlebar-button" id="titlebar-maximize" on:click={() => appWindow.maximize()}>
        <img
        src="https://api.iconify.design/mdi:window-maximize.svg"
        alt="maximize"
      />
    </button>
    <button class="titlebar-button" id="titlebar-close" on:click={() => appWindow.close()}>
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
    </button>
</div>

<style>
    .titlebar {
        height: 30px;
        padding-left: 10px;
        background: #272727;
        user-select: none;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border-radius: 10px 10px 0px 0px;
    }
    .titlebar-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 15px;
        height: 15px;
        border-radius: 30px;
        border: 0;
        margin: 0px 4px;
    }
    .titlebar-button:hover {
        filter: brightness(65%);
    }
    img {
        width: 12.5px;
    }

    #titlebar-close {
        background: #FF605C;
    }
    #titlebar-minimize {
        background: #FFBD44;
    }
    #titlebar-maximize {
        background: #00CA4E;
    }


</style>
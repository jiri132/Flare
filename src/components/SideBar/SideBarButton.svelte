<script lang="ts">
    import type { FileEntry } from "@tauri-apps/api/fs";
    const self = arguments[0].__proto__.constructor;

    enum fileType {
        directory = 0,
        file = 1
    }

    export let _fileType : fileType;
    export let _directoryChildren : FileEntry[] = [];
    export let _fileName : string;
    export let _filePath : string;

    let show_childeren : boolean = false;

    function interaction() {
        switch(_fileType) {
            case fileType.directory:
                // console.log(_directoryChildren); 
                show_childeren = !show_childeren; 
                break;
            case fileType.file:

                break;           
        }
    }

</script>

<div on:click={interaction}>
    {_fileName}
</div>
<div class="children">
    {#if show_childeren} 
    {#each _directoryChildren as child}
        {#if child.children !== undefined} 
            <svelte:component this={self}  _fileName={child.name} _filePath={child.path}  _fileType={0} _directoryChildren={child.children} />
        {:else}
            <svelte:component this={self}  _fileName={child.name} _filePath={child.path} _fileType={1} />
        {/if}
    {/each}
    {/if}
</div>



<style>
    .children {
        padding-left: 20px;
        /* border: solid red; */
        border-left: 2px solid red;
    }
</style>
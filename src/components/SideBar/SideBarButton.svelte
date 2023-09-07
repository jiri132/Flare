<script lang="ts">
    import { readTextFile, type FileEntry } from "@tauri-apps/api/fs";
    import { Content } from "../../store";
  import { onMount } from "svelte";
    const self = arguments[0].__proto__.constructor;

    enum fileType {
        directory = 0,
        file = 1
    }

    export let _fileType : fileType;
    export let _directoryChildren : FileEntry[] = [];
    export let _fileName : string | undefined;
    export let _filePath : string;
    // export let _foldable : boolean = false; 

    let show_children : boolean = false;

    function interaction() {
        switch(_fileType) {
            case fileType.directory:
                show_children = !show_children; 
                break;
            case fileType.file:
                readTextFile(_filePath).then((text) => {
                    console.log(text);
                    Content.set(text);
                });
                break;            
        }
    }

    onMount(() => {
        _fileName = _fileType.toString() + " " + _fileName;

        _directoryChildren.sort((f1 , f2) => {
                    if (f1.children && !f2.children) {
                        return -1;
                    } else if (!f1.children && f2.children) {
                        return 1;
                    } else {
                        return 0;
                    }
                })
    });


</script>

<button on:click={interaction}>
    {_fileName}
</button>
<div class="children">
    {#if show_children} 
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

    button {
        border: 0;
        text-align: start;
        background-color: transparent;
        width: 100%;
        color: rgb(197, 197, 197);
    }
    button:hover {
        background-color: rgba(0,0,0,0.1);
    }

    .children {
        margin-left: 5px;
        /* border: solid red; */
        border-left: 2px solid rgb(97, 97, 97);
        width: 100%;
    }
</style>
<script lang="ts">
    let width = 180;
    let resize_width = 20;
    let offset = 0;
    let can_drag = false;

    let innerWidth = 0;
    // let max_width = 

    function handleMousedown(event : MouseEvent) {
        const mouseX = event.clientX;
        const mouse_on_panel = mouseX;

        offset = mouse_on_panel - width;

        if (mouse_on_panel < width && mouse_on_panel > width - resize_width) {
            can_drag = true;
        } 
    }

    function handleMouseUp() {
        can_drag = false;
    }

    function handleMouseMove(event : MouseEvent) {
        if (can_drag) {
            width = event.clientX - offset - 0;
            console.log(width);
            console.log(innerWidth)
            if (width < 180) {width = 180}
            if (width > innerWidth * 0.65) {width = innerWidth * 0.65}
        }
    }   

    // import { tauri } from '@tauri-apps/api';

    // async function show_in_folder(path) {
    //     await tauri.invoke('show_in_folder', {path});
    // }

    import { open } from '@tauri-apps/api/dialog'
   import { readDir, type FileEntry } from '@tauri-apps/api/fs'

    const handleOpenFile = () => {
    
    }

    const handleFileChange = () => {
    }

    let project_path : string;
    let project_files : FileEntry[] = [];

    function OpenProject() {
        open({directory: true})
        .then((result) => {
            project_path = result as string;

            readDir(project_path, {recursive: true})
            .then((files) => {
                project_files = files;
            });
        })
    }


    

    // function listFiles(dir) {
    // const files = fs.readdirSync(dir, { withFileTypes: true });

    //     for (const file of files) {
    //         const filePath = path.join(dir, file.name);
    //         if (file.isDirectory()) {
    //             listFiles(filePath);
    //         } else if (file.isFile() && filePath.endsWith('.svelte')) {
    //             processFile(filePath);
    //         }
    //     }
    // }   
</script>

<svelte:window  on:mouseup={handleMouseUp} on:mousedown={handleMousedown} on:mousemove={handleMouseMove}  bind:innerWidth/>

<div id="panel" class="SideBar" style="width: {width}px;">
    <!-- {#if project_path === ""}
    <button on:click={handleOpenFile}>Select</button>
    <input
        type="file"
        webkitdirectory
        multiple
        on:change={handleFileChange}
      <!-- /> -->
         <!-- <button on:click={() => {show_in_folder("Documenten")}}>Open project</button>  -->
         <button on:click={OpenProject}>Open project</button>
    <!-- {/if} -->

    {#each project_files as file} 
        {file.name}<br>
    {/each}
</div>


<style> 
    .SideBar {
        min-width: 180px;
        margin-top: 30px;
        height: calc(100vh - 30px);
        max-width: 65vw;
        background-color: rgb(59, 59, 59);
        border-radius: 0px 0px 0px 10px ;

        display: flex;
        flex-direction: column;
    }

    button {
        border: 0;
        padding: 0.3rem 1rem;
        margin: 10px;
        background-color: rgb(0, 136, 255);
    }
    button::hover {
        background-color: black;
    }
</style>
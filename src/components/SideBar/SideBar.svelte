<script lang="ts">
    import SideBarButton from './SideBarButton.svelte';


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


    import { open } from '@tauri-apps/api/dialog'
    import { readDir, type FileEntry } from '@tauri-apps/api/fs'

    let project_name : string;
    let project_path : string | null;
    let project_files : FileEntry[] = [];

    function OpenProject() {
        open({directory: true})
        .then((result) => {
            project_path = result as string | null;

            if (project_path === null) {
                return;
            }

            const sep_project_path = project_path.split('\\');
            project_name = sep_project_path[sep_project_path.length - 1];

            readDir(project_path, {recursive: true})
            .then((files) => {
                files.sort((f1 , f2) => {
                    if (f1.children && !f2.children) {
                        return -1;
                    } else if (!f1.children && f2.children) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                project_files = files;
                // console.log(project_files)
                // console.log(project_path)
                // console.log(project_name)
            });
        });
    } 
</script>

<svelte:window  on:mouseup={handleMouseUp} on:mousedown={handleMousedown} on:mousemove={handleMouseMove}  bind:innerWidth/>

<div id="panel" class="SideBar" style="width: {width}px;">
    {#if project_path === undefined || project_path === null}
         <button on:click={OpenProject}>Open project</button>
    {/if}

    {#each project_files as file} 
        {#if file.children !== undefined} 
            <SideBarButton  _fileName={file.name} _filePath={file.path}  _fileType={0} _directoryChildren={file.children} />
        {:else}
            <SideBarButton  _fileName={file.name} _filePath={file.path} _fileType={1} />
        {/if}
    {/each}
</div>


<style> 
    .SideBar {
        margin-top: 30px;
        /* padding: 10px; */

        min-width: 180px;
        max-width: 65vw;
        max-height: calc(100vh - 30px); /* 50px = padding-top(10) + padding-bottom(10) + margin-top(30)  */

        overflow-y: auto;
        overflow-x: hidden;

        background-color: rgb(59, 59, 59);
        border-radius: 0px 0px 0px 10px ;

        display: flex;
        flex-direction: column;
    }

    button {
        border: 0;
        padding: 0.3rem 1rem;
        /* margin: 10px; */
        background-color: rgb(0, 136, 255);
    }
    button::hover {
        background-color: black;
    }
</style>
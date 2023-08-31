<script lang="ts">

    enum fileType {
        directory = 0,
        file = 1
    }

    export let _fileType : fileType;
    export let _fileName : string;
    export let _filePath : string;

    function interaction() {
        switch(_fileType) {
            case fileType.directory:
                console.log(_fileType);  
                break;
            case fileType.file:
                console.log(_fileType); 
                break;           
        }
    }

</script>

<div on:click={interaction}>
    {_fileName}
</div>


<style>

</style>
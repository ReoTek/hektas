<template>
    <audio controls class="my-2">
        <source :src="get_record_url" type="audio/wav">
        Your browser does not support the audio element.
    </audio>
</template>

<script>
// A vue prop for the record id
export default {
    props: ['recordId', 'lang'],
    computed: {
        get_record_url() {
            return "/voice_records/" + this.lang + "/" + this.recordId + ".wav"
        }
    }
}
</script>
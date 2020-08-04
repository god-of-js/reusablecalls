<template>
    <div>
        <div>
            <textarea v-model="messages" placeholder="Type a message"></textarea>
        </div>
    </div>
</template>
<script>
export default {
data() {
    return {
        username: '',
        messages: []
    }
},
methods: {

},
mounted() {

}
}
</script>


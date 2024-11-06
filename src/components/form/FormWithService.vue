<script setup lang="ts">
import { Ref, ref } from 'vue'
import { User, Gender, SignUpService } from '../../services/SignUpService'

const signUpService = new SignUpService()

const genders = Object.values(Gender)

const user: Ref<User> = ref({
    name: "",
    lastname: "",
    age: 0,
    gender: Gender.Other,
})

const hasSubmitted: Ref<boolean> = ref(false)

function submit() {
    signUpService.submit(user.value)
    hasSubmitted.value = true
}

function resetSubmit() {
    hasSubmitted.value = false;
}

</script>

<template>
  <h1>Form with service Component</h1>
  <form>
    <input v-model="user.name" type="text" placeholder="Enter name" @input="resetSubmit"/>
    <input v-model="user.lastname" type="text" placeholder="Enter lastname" @input="resetSubmit"/>
    <input v-model="user.age" type="number" min="18" max="120" @input="resetSubmit"/>
    <select v-model="user.gender" @input="resetSubmit">
        <option v-for="gender in genders">{{ gender }}</option>
    </select>
  </form>
  <button @click="submit">
    Submit
  </button>
  <div v-show="hasSubmitted">
    Signup: {{ user.name }} {{ user.lastname }} ({{ user.age }} yo) ({{ user.gender.charAt(0) }})
  </div>
  <hr></hr>
</template>

<style scoped>
</style>

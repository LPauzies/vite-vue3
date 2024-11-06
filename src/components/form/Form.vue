<script setup lang="ts">
import { Ref, ref } from 'vue'

type Form = {
    name: string;
    lastname: string;
    age: number;
    gender: Gender;
}

enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other",
}

const genders = Object.values(Gender)

const form: Ref<Form> = ref({
    name: "",
    lastname: "",
    age: 0,
    gender: Gender.Other,
})

const hasSubmitted: Ref<boolean> = ref(false)

function submit() {
    console.log("Sent it to an api")
    hasSubmitted.value = true
}

function resetSubmit() {
    hasSubmitted.value = false;
}

</script>

<template>
  <h1>Form Component</h1>
  <form>
    <input v-model="form.name" type="text" placeholder="Enter name" @input="resetSubmit"/>
    <input v-model="form.lastname" type="text" placeholder="Enter lastname" @input="resetSubmit"/>
    <input v-model="form.age" type="number" min="18" max="120" @input="resetSubmit"/>
    <select v-model="form.gender" @input="resetSubmit">
        <option v-for="gender in genders">{{ gender }}</option>
    </select>
  </form>
  <button @click="submit">
    Submit
  </button>
  <div v-show="hasSubmitted">
    Signup: {{ form.name }} {{  form.lastname }} ({{ form.age }} yo) ({{  form.gender.charAt(0) }})
  </div>
  <hr></hr>
</template>

<style scoped>
</style>

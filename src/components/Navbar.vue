<script setup>
import { ref, computed } from 'vue'
import HelloWorld from './HelloWorld.vue';
import Count from './Count.vue';
import ObjectList from './ObjectList.vue';
import Form from './form/Form.vue';
import FormWithService from './form/FormWithService.vue';
import Event from './event/Event.vue';

const routes = {
  '/hello': HelloWorld,
  '/count': Count,
  '/objects': ObjectList,
  '/form': Form,
  '/form/service': FormWithService,
  '/event': Event,
}

const routesWithProps = {
  '/hello': { component: HelloWorld, props: { message: 'Hello World!' } },
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  const path = currentPath.value.slice(1) || '/'
  const component = routes[path]
  const routeProps = routesWithProps[path]?.props || {}
  
  return { component, props: routeProps }
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/hello">HelloWorld!</a> |
  <a href="#/count">Count</a> |
  <a href="#/objects">Objects</a> |
  <a href="#/form">Form</a> |
  <a href="#/form/service">Form with service</a> |
  <a href="#/event">Event</a>
  <component :is="currentView.component" v-bind="currentView.props || {}" />
</template>
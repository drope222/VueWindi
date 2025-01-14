<script lang="ts">
import { defineComponent } from 'vue'
import './menu.css'
export default defineComponent({
  name: 'WMenu',
  props: {
    // Menu compact if set true or responsive
    compact: {
      type: [Boolean, String],
      default: false,
      required: false,
      validator: (value: boolean | string) => {
        return ['sm', 'md', 'lg', 'xl', true, false].includes(value)
      },
    },
    // Menu horizontal if set true or responsive
    horizontal: {
      type: [Boolean, String],
      default: false,
      required: false,
      validator: (value: boolean | string) => {
        return ['sm', 'md', 'lg', 'xl', true, false].includes(value)
      },
    },
    // Menu with rounded borders
    rounded: {
      type: Boolean,
      default: false,
      required: false,
    },
    // Menu with padding and list with rounded border
    padding: {
      type: Boolean,
      default: false,
      required: false,
    },
    // List with left border colored on hover
    hoverBorder: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup(props, { slots }) {
    return { slots }
  },
})
</script>

<template>
  <ul
    class="w-menu" :class="[
      compact
        ? typeof compact === 'string'
          ? `w-compact-${compact}`
          : 'w-compact'
        : '',
      horizontal
        ? typeof horizontal === 'string'
          ? `w-horizontal-${horizontal}`
          : 'w-horizontal'
        : '',
      {
        'w-rounded': rounded,
        'w-padding': padding,
        'w-hover-border': hoverBorder,
      },
    ]"
  >
    <template v-if="slots.default">
      <li
        v-for="(slot, key) in slots.default()"
        :key="key"
        class="w-menu-item"
      >
        <component :is="slot" v-if="slots.default" />
      </li>
    </template>
  </ul>
</template>

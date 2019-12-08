<template>
  <div>
    <p class="is-size-3">{{ text }}</p>

    <div class="buttons">
      <b-button
        v-for="(option, index) in options"
        :key="index"
        type="is-primary"
        class="mt-5 is-secondary"
        size="is-large"
        expanded
        @click="sendOption(option)"
        :outlined="selected && option.value !== selected"
      >
        {{ option.label }}
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionSelect',
  props: {
    text: String,
    options: Array,
  },
  data: () => ({
    selected: null,
  }),
  methods: {
    sendOption(option) {
      if (this.selected) return;
      this.selected = option.value;

      setTimeout(() => {
        this.$emit('click', option.value);
        this.selected = null;
      }, 450);
    },
  },
};
</script>

<template>
  <div>
    <b-steps
      v-model="position"
      :has-navigation="false"
      size="is-large"
      :animated="false"
    >
      <b-step-item
        v-for="(question, index) in questions"
        :key="index"
        :icon="question.icon"
      >
        <QuestionSelect
          :text="question.text"
          :options="question.options"
          @click="goNext()"
        />
      </b-step-item>
    </b-steps>
  </div>
</template>

<script>
import QuestionSelect from '../../components/molecules/QuestionSelect.vue';

export default {
  name: 'FormContainer',
  components: {
    QuestionSelect,
  },
  data: () => ({
    position: 0,
    questions: [
      {
        text: 'Porque você está viajando para Belo Horizonte?',
        icon: 'airplane-takeoff',
        options: [
          { label: 'Lazer', value: 'lazer' },
          { label: 'Trabalho', value: 'trabalho' },
          { label: 'Férias', value: 'ferias' },
        ],
      },
      {
        text: 'Qual tipo de comida que você gosta?',
        icon: 'food-apple',
        options: [
          { label: 'Culinária Mineira', value: 'mineira' },
          { label: 'Culinária Japonesa', value: 'japonesa' },
          { label: 'Culinária Italiana', value: 'italiana' },
        ],
      },
      {
        text: 'Em um sábado a noite, aonde você gostaria de ir?',
        icon: 'music',
        options: [
          { label: 'Restaurante', value: 'restaurante' },
          { label: 'Orquestra Sinfônica', value: 'opera' },
          { label: 'Bares', value: 'bar' },
        ],
      },
      {
        text: 'Qual a melhor forma de falar com você?',
        icon: 'forum',
        options: [
          { label: 'Telefone', value: 'telefone' },
          { label: 'WhatsApp', value: 'whatsapp' },
          { label: 'Email', value: 'email' },
          { label: 'SMS', value: 'sms' },
        ],
      },
    ],
  }),
  methods: {
    goNext() {
      const { position } = this;
      if (position >= this.questions.length - 1) this.$router.push('/page-5');
      else this.position = this.position + 1;
    },
  },
};
</script>

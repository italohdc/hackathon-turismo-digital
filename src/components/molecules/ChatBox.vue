<template>
  <div class="main-container">
    <div
      :class="[
        'message-container',
        { 'message-is-from-user': isFromUser },
        { 'message-not-from-user': !isFromUser },
      ]"
    >
      <div
        :class="[
          'chatbox',
          { 'chat-is-from-user': isFromUser },
          { 'chat-not-from-user': !isFromUser },
        ]"
      ><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',
  props: {
    isFromUser: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
}

.message-not-from-user {
  padding-right: 20%;
  margin-right: auto;
}

.message-is-from-user {
  padding-left: 20%;
  margin-left: auto;
}

.message-container {
  width: fit-content;
}

.chat-not-from-user {
  background-color: #dddddd;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-right-color: #dddddd;
    border-left: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-left: -10px;
  }
}

.chat-is-from-user {
  background-color: #00aabb;
  position: relative;
  color: white;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 10px;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-left-color: #00aabb;
    border-right: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-right: -10px;
  }
}

.chatbox {
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 1.4em;
  font-weight: bold;
  width: fit-content;
  min-height: 32px;
}
</style>

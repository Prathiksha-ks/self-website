<template>
  <section>
    <OutsideWrapper class="contact">
      <div class="wrapper">
        <h1 class="header text-center">GET IN TOUCH</h1>
        <div class="contact-info">
          <div class="info" v-for="info in contactInfo" :key="info.title">
            <p class="title">{{ info.title }}</p>
            <a class="description" :href="addLink(info)">{{
              info.description
            }}</a>
          </div>
        </div>
        <div class="map-message">
          <div id="map"></div>
          <div class="message-content">
            <h1 class="header">DROP A MESSAGE</h1>
            <form @submit.prevent="sendMessageData()">
              <input
                v-model="messageFields.Name"
                placeholder="Your Name"
                type="text"
              />
              <input
                v-model="messageFields.Email"
                placeholder="Your Email"
                type="email"
              />
              <input
                v-model="messageFields.PhoneNumber"
                placeholder="Your Phone Number"
                type="tel"
              />
              <textarea
                v-model="messageFields.Message"
                style="resize: none"
                placeholder="Your Message"
                rows="2"
                required
              />
              <button class="send-btn" :disabled="disableSendBtn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </OutsideWrapper>
    <Transition name="slide">
      <div v-if="showToastMessage" class="toast">
        <p class="toast-message">{{ toastMessage }}</p>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import OutsideWrapper from "@/components/OutsideWrapper.vue";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Email from "@/assets/files/smtp.js";

const contactInfo = [
  {
    title: "Address",
    description:
      "Shrinidi Apartment Kottara Chowki Mangaluru Karnataka India Pincode : 575006",
  },
  {
    title: "Email Address",
    description: "prathiksha14feb@gmail.com",
  },
  {
    title: "Phone Number",
    description: "+91 7204950442",
  },
];
const messageFields = ref<{
  Name: string;
  Email: string;
  PhoneNumber: string;
  Message: string;
}>({ Name: "", Email: "", PhoneNumber: "", Message: "" });
const toastMessage = ref<string>("");
const showToastMessage = ref<boolean>(false);
const disableSendBtn = ref<boolean>(false);

onMounted(() => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicHJhdGhpa3NoYSIsImEiOiJjbGNtNTY2aGsxOWY0M3ZtdGc2cmRlcGdyIn0.Dm58JigUja-oHlSw-Xnt8g";
  new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [74.855965, 12.915605], // [lng, lat]
    zoom: 10,
  });
});

const addLink = (info: { [key: string]: string }): string | undefined => {
  if (info.title === "Phone Number")
    return `tel:${info.description}`.replace(/\s/, "");
  else if (info.title === "Email Address") return `mailto:${info.description}`;
};

const formatedMessage = (): string => {
  let message: string = "";
  Object.keys(messageFields.value).map((data: string) => {
    if ((messageFields.value as any)[data])
      message =
        message + "<br>" + data + ": " + (messageFields.value as any)[data];
  });
  return message;
};

const sendMessageData = (): void => {
  disableSendBtn.value = true;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "prathiksha14feb@gmail.com",
    Password: "76839AEAC16DC09E8DEA9F298835E61C0937",
    To: "prathiksha14feb@gmail.com",
    From: "prathiksha14feb@gmail.com",
    Subject: "Message",
    Body: formatedMessage(),
  }).then((message: string) => {
    if (message === "OK")
      toastMessage.value = "Thank you! Message sent successfully.";
    else
      toastMessage.value =
        "Something went wrong. Please try again after sometime.";
    showToastMessage.value = true;
    messageFields.value = { Name: "", Email: "", PhoneNumber: "", Message: "" };
    disableSendBtn.value = false;
  });
};

watch(showToastMessage, () => {
  if (showToastMessage.value) {
    setTimeout(() => {
      showToastMessage.value = false;
    }, 2000);
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  flex-direction: column;
}

.header {
  text-align: start;

  &.text-center {
    text-align: center;
  }
}

.contact-info {
  display: flex;
}

.info {
  width: 33.33%;
  text-align: center;
  padding-bottom: 24px;

  &:not(:last-child) {
    margin-right: 24px;
  }
}

.title {
  padding-bottom: 18px;
}

.mapboxgl-map {
  width: 50%;
  height: 400px;
}

.map-message {
  display: flex;
  margin-top: 24px;
}

.message-content {
  width: 50%;
  margin-left: 24px;
}

input,
textarea {
  width: 100%;
  color: $title;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 16px;
  font-size: 14px;
  border-radius: 8px;
  margin-bottom: 24px;
  font-family: sans-serif;
}

.send-btn {
  margin-top: 0;

  &:disabled {
    color: rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.2);
  }
}

.toast {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.toast-message {
  margin: 24px auto;
  background-color: $header;
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  color: $background-color;
  width: fit-content;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s linear;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media screen and (max-width: 999px) {
  .header {
    text-align: center;
  }

  .contact-info {
    flex-direction: column;
  }

  .info {
    width: 100%;
    text-align: start;

    &:not(:last-child) {
      margin-right: 0;
    }

    &:first-child {
      order: 3;
    }
  }

  .title {
    padding-bottom: 8px;
  }

  .map-message {
    flex-direction: column;
    margin-top: 0;
  }

  .mapboxgl-map {
    width: 100%;
  }

  .message-content {
    width: 100%;
    margin: 24px 0 32px;
  }

  form {
    text-align: center;
  }
}

@media screen and (max-width: 767px) {
  input,
  textarea,
  .toast-message {
    font-size: 12px;
    padding: 12px;
  }
}
</style>

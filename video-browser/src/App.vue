<template>
  <div class="container">
    <SearchBar @termChange="onTermChange" />
    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList
          @videoSelect="onVideoSelect"
          :videos="videos"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList";
import VideoDetail from "@/components/VideoDetail";

const API_KEY = '{API_KEY}';

export default {
  name: 'App',
  components: {
    VideoList,
    SearchBar,
    VideoDetail,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    }
  },
  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video
    },
    onTermChange: function(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
        }
      }).then(response => {
        this.videos = response.data.items;
      })
    }
  }
}
</script>

/**
 *@author NotII
 *@since 02/08/21
 */

// Dependencies
const axios = require("axios");
const platforms = ["steam", "xbl", "psn", "origin", "uplay", "battlenet", "pc"];

/** @constructor */
class TrackerGG {
  constructor({ api_key }) {
    this.api_key = api_key;
    this.base = "https://public-api.tracker.gg/v2";
  }

  checkError = e => {
    switch (e.response.status) {
      case 400:
        throw new Error("Invalid Request.");
      case 401:
        throw new Error("Invalid API key supplied!");
      case 404:
        throw new Error("Invalid username provided or the specified user's profile is private.");
      case 429:
        throw new Error("You have been ratelimited slow down.");
    }
  };

/**
 * @param {string} user - Username
 * @returns {Promise<Object>}
 */
  csgouser = async user => {
    const r = await axios
      .get(`${this.base}/csgo/standard/profile/steam/${user}`, {
        headers: { "TRN-Api-Key": this.api_key },
      })
      .catch((e) => this.checkError(e));
    return r.data;
  };

/**
 * @param {string} platform - Users platform
 * @param {string} user - Username
 * @returns {Promise<Object>}
 */
  apexuser = async (platform, user) => {
    if (!platform || !user) return new Error("Missing Arguments");
    if (platforms.includes(platform)) {
      const r = await axios
        .get(`${this.base}/apex/standard/profile/${platform}/${user}`, {
          headers: { "TRN-Api-Key": this.api_key },
        })
        .catch((e) => this.checkError(e));
      return r.data;
    }
    return new Error("Invalid Platform Provided");
  };

/**
 * @param {string} platform - Users platform
 * @param {string} user - Username
 * @returns {Promise<Object>}
 */
  divisionuser = async (platform, user) => {
    if (!platform || !user) return new Error("Missing Arguments");
    if (platforms.includes(platform)) {
      const r = await axios
        .get(`${this.base}/division-2/standard/profile/${platform}/${user}`, {
          headers: { "TRN-Api-Key": this.api_key },
        })
        .catch((e) => this.checkError(e));
      return r.data;
    }
    return new Error("Invalid Platform Provided");
  };
  
 /**
 * @param {string} platform - Users platform
 * @param {string} user - Username
 * @returns {Promise<Object>}
 */
  fortniteuser = async (platform, user) => {
    if (!platform || !user) return new Error("Missing Arguments");
    
    if (platform == "steam" || platform == "origin" || platform == "uplay" || platform == "battlenet") return new Error("Invalid Platform Provided, Platform supported: `pc,xbl,psn`");
    
    if (platforms.includes(platform)) {
      const r = await axios
        .get(`https://api.fortnitetracker.com/v1/profile/${platform}/${user}`, {
          headers: { "TRN-Api-Key": this.api_key },
        })
        .catch((e) => this.checkError(e));
      return r.data;
    }
    return new Error("Invalid Platform Provided");
  }; 
 
  
  fortniteshop = async () => {
      const r = await axios
        .get(`https://api.fortnitetracker.com/v1/store`, {
          headers: { "TRN-Api-Key": this.api_key },
        })
        .catch((e) => this.checkError(e));
      return r.data;
  };
  
  fortnitechallenges = async () => {
      const r = await axios
        .get(`https://api.fortnitetracker.com/v1/challenges`, {
          headers: { "TRN-Api-Key": this.api_key },
        })
        .catch((e) => this.checkError(e));
      return r.data;
  };

/**
 * @param {string} platform - Users platform
 * @param {string} user - Username
 * @returns {Promise<Object>}
 */
  overwatchuser = async (platform, user) => {
    if (!platform || !user) return new Error("Missing Arguments");
    if (platforms.includes(platform)) {
      const r = await axios
        .get(`${this.base}/overwatch/standard/profile/${platform}/${user}`, {
          headers: { "TRN-Api-Key": this.api_key },
        })
        .catch((e) => this.checkError(e));
      return r.data;
    }
    return new Error("Invalid Platform Provided");
  };
  
/**
 * @param {string} user - Username
 * @returns {Promise<Object>}
 */
  splitgateuser = async user => {
    const r = await axios
      .get(`${this.base}/splitgate/standard/profile/steam/${user}`, {
        headers: { "TRN-Api-Key": this.api_key },
      })
      .catch((e) => this.checkError(e));
    return r.data;
  };

/**
 * @param {string} platform - Users platform
 * @param {string} user - Username
 * @returns {Promise<Object>}
 */
  hyperscapeuser = async (platform, user) => {
    if (!platform || !user) return new Error("Missing Arguments");
    if (platforms.includes(platform)) {
      const r = await axios
        .get(`${this.base}/hyper-scape/standard/profile/${platform}/${user}`, {
          headers: { "TRN-Api-Key": this.api_key },
        })
        .catch((e) => this.checkError(e));
      return r.data;
    }
    return new Error("Invalid Platform Provided");
  };
}

module.exports = TrackerGG;

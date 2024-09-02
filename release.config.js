const config = {
  branches: ['main'],    //1
  plugins: [
    '@semantic-release/commit-analyzer',    //2
    '@semantic-release/release-notes-generator',  //3
    ["@semantic-release/git", {
      "assets": ["dist/*.js", "dist/*.js.map"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"  //4
    }],
    '@semantic-release/github'  //5
  ]
};

module.exports = config;

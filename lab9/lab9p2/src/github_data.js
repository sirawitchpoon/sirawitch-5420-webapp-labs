function GitHubRepoURL(url) {
  return (
    <a href={url} target="_blank" style={{ display: 'block', textAlign: 'center' }}>
      My GitHub repository
    </a>
  );
};


function GitHubAvatar({imgURL, alt, size}) {
  return (
    <img src={imgURL} alt={alt} width={size} height={size} />
  );
};  

export { GitHubRepoURL, GitHubAvatar };

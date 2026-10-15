<script>
    import authorPic from "../../assets/profile_pic.jpg"
</script>

<section class="author-section">
    <h2 class="mb-l">About the author</h2>
    <div class="author-container">
        <div class="author-text">
            <p class="mb-xs">
                Proident irure aliqua elit enim irure labore ipsum qui minim. Et anim dolore reprehenderit minim minim occaecat irure eiusmod culpa veniam voluptate. Enim deserunt anim ad eiusmod laboris cillum ullamco. Sint exercitation fugiat enim anim. Ullamco fugiat exercitation eiusmod consequat consequat non. Pariatur aliquip laborum aliquip in. Tempor anim dolore nostrud dolore id est laboris sunt labore amet.
            </p>
        </div>
        <img src={authorPic} alt="Author's Face" />
    </div>
</section>

<style>
  .author-section {
    padding: 80px 0;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }
  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }

  /* .author-text p:not(:last-of-type) {
    margin-bottom: 8px;
  } */
</style>
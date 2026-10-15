<script>
	import { goto } from "$app/navigation";

  let { children, ...props } = $props();

  

  async function onclick() {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Unable to create a checkout session.");
    }

    const { url } = await response.json();
    if (typeof url !== "string" || !url) {
      throw new Error("The checkout session did not include a URL.");
      goto("/checkout/failure");
    }

    window.location.href = url;
  }

</script>

<button {...props} {onclick}>{@render children()}</button>

<style>
  button {
    background-color: black;
    color: white;
    padding: 20px 24px;
    font-weight: normal;
    font-size: 22px;
    text-transform: uppercase;
    transition: all 0.3s;
    border: 1px solid white;
  }

  button:hover {
    background-color: white;
    color: black;
  }
</style>

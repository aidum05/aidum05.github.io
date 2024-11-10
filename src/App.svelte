<script>
  import Molarity from "./Molarity.svelte";
  import PixelSize from "./PixelSize.svelte";
  import CellConcentration from "./CellConcentration.svelte";
  import BufferSolutions from "./BufferSolutions.svelte";
  import GelFabrication from "./GelFabrication.svelte";

  // Retrieve the site name and URL dynamically
  let siteName = document.querySelector("meta[name='site-name']").getAttribute("content");
  let siteURL = window.location.origin;

  // Track the selected calculator
  let selectedCalculator = "Molarity"; // Default to Molarity calculator
</script>

<div class="container">
  <!-- Sidebar Navigation -->
  <aside class="sidebar">
    <button
      on:click={() => selectedCalculator = "Molarity"}
      class:selected={selectedCalculator === "Molarity"}
    >
      Molarity Calculator
    </button>
    <button
      on:click={() => selectedCalculator = "PixelSize"}
      class:selected={selectedCalculator === "PixelSize"}
    >
      Nyquist Pixel Size
    </button>
    <button
      on:click={() => selectedCalculator = "CellConcentration"}
      class:selected={selectedCalculator === "CellConcentration"}
    >
      Cell Concentration
    </button>
    <button
      on:click={() => selectedCalculator = "BufferSolutions"}
      class:selected={selectedCalculator === "BufferSolutions"}
    >
      Buffer Solutions
    </button>
    <button
      on:click={() => selectedCalculator = "GelFabrication"}
      class:selected={selectedCalculator === "GelFabrication"}
    >
      Gel Fabrication
    </button>
  </aside>

  <!-- Main Content Area -->
  <main class="content">
    {#if selectedCalculator === "Molarity"}
      <Molarity />
    {/if}
    {#if selectedCalculator === "PixelSize"}
      <PixelSize />
    {/if}
    {#if selectedCalculator === "CellConcentration"}
      <CellConcentration />
    {/if}
    {#if selectedCalculator === "BufferSolutions"}
      <BufferSolutions />
    {/if}
    {#if selectedCalculator === "GelFabrication"}
      <GelFabrication />
    {/if}
  </main>
</div>

<style>
  /* Sidebar and main content styling */
  .container {
    display: flex;
    height: 100vh;
  }
  .sidebar {
    width: 250px;
    background-color: #f4f4f4;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  }
  .content {
    flex: 1;
    padding: 20px;
  }
  .sidebar button {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    background-color: #e0e0e0;
    cursor: pointer;
    text-align: left;
  }
  .sidebar button.selected {
    background-color: #d0d0d0;
    font-weight: bold;
  }
</style>

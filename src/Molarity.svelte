<script>
  import axios from 'axios';
  let molecularWeight = '';
  let concentration = '';
  let volume = '';
  let soluteMass = '';
  let calculationMode = 'solute_mass';
  let result = '';
  let errorMessage = '';

  async function calculate() {
    try {
      const response = await axios.post('http://127.0.0.1:5000/calculate', {
        molecular_weight: parseFloat(molecularWeight),
        concentration: parseFloat(concentration),
        volume: volume ? parseFloat(volume) : null,
        solute_mass: soluteMass ? parseFloat(soluteMass) : null,
        mode: calculationMode
      });
      result = response.data.result;
      errorMessage = '';
    } catch (error) {
      errorMessage = error.response ? error.response.data.error : 'An error occurred';
    }
  }
</script>

<div>
  <h3>Molarity Calculator</h3>
  <label>
    Molecular Weight (g/mol):
    <input type="number" bind:value={molecularWeight} />
  </label>
  <label>
    Concentration (M):
    <input type="number" bind:value={concentration} />
  </label>
  {#if calculationMode === "solute_mass"}
    <label>
      Volume (L):
      <input type="number" bind:value={volume} />
    </label>
  {:else}
    <label>
      Solute Mass (g):
      <input type="number" bind:value={soluteMass} />
    </label>
  {/if}

  <label>
    Calculation Mode:
    <select bind:value={calculationMode}>
      <option value="solute_mass">Calculate Solute Mass</option>
      <option value="solvent_volume">Calculate Solvent Volume</option>
    </select>
  </label>

  <button on:click={calculate}>Calculate</button>

  {#if result}
    <p>Result: {result}</p>
  {/if}
  {#if errorMessage}
    <p style="color: red;">Error: {errorMessage}</p>
  {/if}
</div>

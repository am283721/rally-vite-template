<script lang="ts">
  import { Combobox, settingsStore } from 'rally-modern-sdk';
</script>

<Combobox
  label="Sample Setting"
  displayField="name"
  valueField="value"
  allowBlank={false}
  allowNoEntry={false}
  hasSearch={false}
  data={[{ name: 'Sample', value: 'sample' }]}
  initialValue={settingsStore.getSetting('sample')}
  bind:value={settingsStore.settingsValues.sample} />

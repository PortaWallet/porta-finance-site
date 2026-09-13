/**
 * Clone network guide — wallet chrome for custom AA network config.
 * Honest Coming only. No paymaster / sponsorship field. No secrets in copy.
 */
export const CLONE_NETWORK = {
  eyebrow: 'Clone network',
  title: 'Clone from Ethereum or the current network',
  teaser: 'Name, chainId, RPC, bundler, factory, EntryPoint — no empty saves',
  statusLabel: 'Coming',
  intro: [
    '**Clone network** copies a known AA network into an editable form.',
    'Start from **Ethereum** or from the **current** network. Then edit only what you need.',
    'Required fields: **name**, **chainId**, **RPC**, **bundler**, **factory**, **EP** (EntryPoint). You cannot save empty.',
    'There is no paymaster / sponsorship field. Gas stays self-funded — sponsorship is not live.',
  ],
  sourcesTitle: 'Clone from',
  sources: [
    {
      title: 'Ethereum',
      body: 'Fill the form from the Ethereum defaults (name, chainId, RPC, bundler, factory, EP).',
    },
    {
      title: 'Current',
      body: 'Fill the form from the network you have selected now. Same six fields.',
    },
  ],
  fieldsTitle: 'Fields',
  fields: [
    {
      title: 'name',
      body: 'Display name for the network. Required — cannot be empty.',
    },
    {
      title: 'chainId',
      body: 'EVM chain id. Required — cannot be empty.',
    },
    {
      title: 'RPC',
      body: 'JSON-RPC URL for the chain. Required. Do not paste private access tokens into public copy or git.',
    },
    {
      title: 'bundler',
      body: 'ERC-4337 bundler URL for UserOps. Required — cannot be empty.',
    },
    {
      title: 'factory',
      body: 'Account factory address for this network. Required — cannot be empty.',
    },
    {
      title: 'EP',
      body: 'EntryPoint address. Required — cannot be empty.',
    },
  ],
  howTitle: 'How to clone one',
  how: [
    'Open **Networks** (or network settings) in the Mini App or web wallet.',
    'Tap **Clone network**.',
    'Choose **Clone from Ethereum** or **Clone from current**.',
    'Check **name**, **chainId**, **RPC**, **bundler**, **factory**, and **EP**. Edit if you need a custom network.',
    'Save only when every field is filled. Empty fields stay invalid — the wallet will not save.',
    'There is no paymaster field on this form. Sponsorship is not live — you pay gas.',
  ],
  dont: [
    'Do not save with empty **name**, **chainId**, **RPC**, **bundler**, **factory**, or **EP**.',
    'Do not expect a paymaster / gasless / sponsored path (not live).',
    'Do not put RPC secrets or access tokens in git, PRs, or public screenshots.',
    'Do not treat the multichain ring on the home page as a live network list — that art is Coming.',
  ],
} as const

import { watch } from 'turbowatch';

void watch({
  project: __dirname,
  triggers: [
    {
      expression: [
        'allof',
        ['not', ['dirname', 'node_modules']],
        [
          'anyof',
          ['match', '*.js', 'basename'],
        ]
      ],
      interruptible: true,
      name: 'start-server',
      onChange: async ({ spawn }) => {
        await spawn`clear`
        const fileName = process.argv[3]
        console.log(`Result for === ${fileName} ===`)
        await spawn`node ./${fileName}`
      },
    },
  ],
});
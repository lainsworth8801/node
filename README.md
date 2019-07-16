# node

On terminal, run 'npm start';
Open a web browser, type URL 'http://localhost:3000';
Or type URL 'http://localhost:3000/jobs'.

For sawtooth_xo:
1. sawtooth-core is the project;
2. sawtooth-sdk-javascript is the interface that connects front end clients and backend sawtooth-core project;
3. (Hyperthectically) bring up the sawtooth_core (docker-compose -f sawtooth-shell-default.yaml up);
4. open a terminal, go to /example/xo, run 'npm start' to open the entry point (TransactionProcessor, URL - 192.168.99.100:4004, connects front end clients and backend sawtooth-core);
5. now a web browser can be used to call the XOHandler, or open another terminal and play from cli.

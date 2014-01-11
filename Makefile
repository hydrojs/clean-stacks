all: test

# Clean

clean: clean-cov clean-node

clean-node:
	@rm -rf node_modules

clean-cov:
	@rm -rf coverage

# CI

test:
	@npm test

test-browser: node_modules
	@node_modules/serve/bin/serve -Slojp 0

coveralls:
	@./node_modules/.bin/istanbul cover ./node_modules/.bin/_hydro --report lcovonly -- \
		&& cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

# Support

node_modules: clean-node
	@npm install

.PHONY: all test coverage

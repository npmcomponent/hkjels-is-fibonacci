
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

test:
	@open test/index.html

clean:
	rm -fr build components


.PHONY: build components test clean


import {Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector:'search-box',
	template: `
	<div class="form-group">
		<input class="form-control" #input type="text"  (input)="update.emit(input.value)" placeholder="search by name">
	</div>
	`
})
export class SearchBox {
	@Output() update = new EventEmitter();
	ngOnInit() {
		this.update.emit('');
	}
}
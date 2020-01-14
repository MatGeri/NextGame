export class Column {
        key = '';
        title = '';
        type?: 'text'|'date'|'number'|'email' |'textarea' = 'text';
        noEditable?: boolean;
        required?: boolean; 
}

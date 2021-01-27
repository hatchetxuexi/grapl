import React from "react";

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Node } from "types/CustomTypes";

export function tableHeader(node: Node, styles: any) {
    if(node) {
        return (
        <TableHead >
            <TableRow>
                <TableCell 
                    align="right" 
                    className={styles.tableHeader}>
                    <b> Property </b>
                </TableCell>
                <TableCell 
                    align="right"
                    className={styles.tableHeader}
                >
                    <b> Value </b>
                </TableCell>
            </TableRow>
        </TableHead>
    )
    } else {
        return <></>
    }
}
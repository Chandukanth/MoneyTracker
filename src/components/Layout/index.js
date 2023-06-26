import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomToolbar from './BottomToolBar';
import SideMenu from 'react-native-side-menu';
import NavigationDrawer from './navigationDrawer';


const Layout = ({ children, title, FooterContent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const updateMenuState = () => {
        setIsOpen(!isOpen);
    };

    //   const Menu = (
    //     <NavigationDrawer updateMenuState={updateMenuState} />
    //   );

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
                <SideMenu

                    isOpen={isOpen}
                    onChange={(isOpen) => setIsOpen(isOpen)}
                    menuPosition="left"
                >
                    <View style={styles.content}>{children}</View>
                </SideMenu>
                <View style={styles.footer}>{FooterContent}</View>
            </View>
            <BottomToolbar updateMenuState={updateMenuState} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#add8e6',
        paddingTop: '15%',
        paddingHorizontal: 15,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: '8%',
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        backgroundColor: '#f2f2f2',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    menu: {
        flex: 1,
        padding: 20,
        // Customize the menu styles as needed
    },
});

export default Layout;
